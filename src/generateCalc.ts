import { ButtonInteraction, Permissions ,CommandInteraction, TextChannel, ThreadChannel, GuildMemberRoleManager } from "discord.js";
import { Config } from "./index";
import rows from "./calcLayout"

const config: Config = require("../config.json")
const math = require("mathjs") //for some reason there's some problems using ES6 modules, so i swap it with this


export default function(interaction: CommandInteraction){
        if(!interaction.channel) return interaction.reply("Unable to use this command. This could have been caused from using the command in a private channel, a private thread or a public thread inside a private channel.");
        if(((interaction.channel as TextChannel).viewable || (interaction.channel as ThreadChannel).sendable)){ 
            const role = interaction.guild.roles.cache.find(r => r.name == config.role);
            try{ 
                console.log(math.boolean(interaction.options.getString("type")))
                const components = [rows.row_1, rows.row_2, rows.row_3, rows.row_4, rows.row_5]
                interaction.reply({content:"``` ```" , components, ephemeral: math.boolean(parseInt(interaction.options.getString("type")))})

                const filter = (b: ButtonInteraction) => b.customId.indexOf("_calc") !== -1 

                const collector = interaction.channel
                .createMessageComponentCollector(
                    {componentType:"BUTTON", time: 15 * 60 * 1000, filter}
                )
                //This collector will listen to any interaction and filter the ones that correspond to the calculator,
                //That's why we add a "_calc" to each customId

                let result: string = ""

                collector.on("collect", function(button: ButtonInteraction){
                    button.deferUpdate()
                    switch (button.customId[0]) { //Switch statement with the first character of each
                        case "=":                 //button which specifies what each button should do
                            if(result){
                                try {            
                                    result = math.evaluate(result).toString()
                                } catch (error) {
                                    interaction.channel
                                    .send("Even a 3rd grader would know that this is an invalid operation 😐")
                                }
                            }else interaction.channel
                            .send("Sorry, But humans haven't evolved to the point of calculating nothingness yet..")
                            break;
                        case "e": result = result.substring(0, result.length - 1)
                            break
                        case "c": result = ""
                            break
                            //"Special" characters will do their own thing while others will just write their first character 
                        default: result += button.customId[0]
                            break;
                    }
                        interaction.editReply({content: "```" + result + " ```", components})
                })
            }catch(err){
                console.log(err)
                interaction.reply({content:"Ran into problems while executing this command:\n"})
            }
    }else interaction.reply(`Unable to use this command. This could have been caused from using the command in a private channel, a private thread or a public thread inside a private channel.`)
}