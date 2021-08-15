"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calcLayout_1 = __importDefault(require("./calcLayout"));
const config = require("../config.json");
const math = require("mathjs"); //for some reason there's some problems using ES6 modules, so i swap it with this
function default_1(interaction) {
    if (!interaction.channel)
        return interaction.reply("Unable to use this command. This could have been caused from using the command in a private channel, a private thread or a public thread inside a private channel.");
    if ((interaction.channel.viewable || interaction.channel.sendable)) {
        const role = interaction.guild.roles.cache.find(r => r.name == config.role);
        try {
            console.log(math.boolean(interaction.options.getString("type")));
            const components = [calcLayout_1.default.row_1, calcLayout_1.default.row_2, calcLayout_1.default.row_3, calcLayout_1.default.row_4, calcLayout_1.default.row_5];
            interaction.reply({ content: "``` ```", components, ephemeral: math.boolean(parseInt(interaction.options.getString("type"))) });
            const filter = (b) => b.customId.indexOf("_calc") !== -1;
            const collector = interaction.channel
                .createMessageComponentCollector({ componentType: "BUTTON", time: 15 * 60 * 1000, filter });
            //This collector will listen to any interaction and filter the ones that correspond to the calculator,
            //That's why we add a "_calc" to each customId
            let result = "";
            collector.on("collect", function (button) {
                button.deferUpdate();
                switch (button.customId[0]) { //Switch statement with the first character of each
                    case "=": //button which specifies what each button should do
                        if (result) {
                            try {
                                result = math.evaluate(result).toString();
                            }
                            catch (error) {
                                interaction.channel
                                    .send("Even a 3rd grader would know that this is an invalid operation 😐");
                            }
                        }
                        else
                            interaction.channel
                                .send("Sorry, But humans haven't evolved to the point of calculating nothingness yet..");
                        break;
                    case "e":
                        result = result.substring(0, result.length - 1);
                        break;
                    case "c":
                        result = "";
                        break;
                    //"Special" characters will do their own thing while others will just write their first character 
                    default:
                        result += button.customId[0];
                        break;
                }
                interaction.editReply({ content: "```" + result + " ```", components });
            });
        }
        catch (err) {
            console.log(err);
            interaction.reply({ content: "Ran into problems while executing this command:\n" });
        }
    }
    else
        interaction.reply(`Unable to use this command. This could have been caused from using the command in a private channel, a private thread or a public thread inside a private channel.`);
}
exports.default = default_1;
