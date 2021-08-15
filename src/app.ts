import {REST} from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"
import chalk from "chalk"
import generateCalc  from "./generateCalc"
import { ApplicationCommandData, Client, Interaction, Message } from "discord.js"
require('dotenv').config()

const command: Array<ApplicationCommandData> = [{   //Feel free to tweak the name and description as you like
    name: "generate",                      //as long as the name is always lowercase and 
    description:"Generates a calculator!", //dosent have special characters.
    type: 1,                                //Type 1 represents CHAT_INPUT, which is just a slash command
    options:[{
        name: "type",
        description: "Whether it's visible or not to other people",
        type: 3,
        choices:[{
            name:"visible",
            value: "0",
        },
        {
            name:"invisble",
            value: "1"
        }]
    }]
}];

const rest = new REST({version: "9"}).setToken(process.env.BOT_TOKEN); //Change the BOT_TOKEN in .env property to your token

const client: Client = new Client({intents:["GUILDS", "GUILD_MESSAGES"]});

(async () => {
    try {
        console.log(chalk.bold.italic.yellow('Started refreshing application (/) commands...'));

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID), //Change the CLIENT_ID in .env to your client's id as well
            { body: command },
        );
            
        console.log(chalk.underline.bold.green('Successfully reloaded application (/) commands!'));
    } catch (error) {
        console.error(chalk.bold.underline.red(error));
    }
})();

client.on("interactionCreate", (interaction):void =>{
    if (!(interaction.isCommand() && interaction.commandName == command[0].name)) return;
    generateCalc(interaction)
    
})

client.on("ready", () => {
	console.log(chalk.italic.bold.cyan(`Logged in as ${client.user.tag}!\n`));
})

client.login(process.env.BOT_TOKEN)