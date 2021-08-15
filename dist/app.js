"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@discordjs/rest");
const v9_1 = require("discord-api-types/v9");
const chalk_1 = __importDefault(require("chalk"));
const generateCalc_1 = __importDefault(require("./generateCalc"));
const discord_js_1 = require("discord.js");
require('dotenv').config();
const command = [{
        name: "generate",
        description: "Generates a calculator!",
        type: 1,
        options: [{
                name: "type",
                description: "Whether it's visible or not to other people",
                type: 3,
                choices: [{
                        name: "visible",
                        value: "0",
                    },
                    {
                        name: "invisble",
                        value: "1"
                    }]
            }]
    }];
const rest = new rest_1.REST({ version: "9" }).setToken(process.env.BOT_TOKEN); //Change the BOT_TOKEN in .env property to your token
const client = new discord_js_1.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(chalk_1.default.bold.italic.yellow('Started refreshing application (/) commands...'));
        yield rest.put(v9_1.Routes.applicationCommands(process.env.CLIENT_ID), //Change the CLIENT_ID in .env to your client's id as well
        { body: command });
        console.log(chalk_1.default.underline.bold.green('Successfully reloaded application (/) commands!'));
    }
    catch (error) {
        console.error(chalk_1.default.bold.underline.red(error));
    }
}))();
client.on("interactionCreate", (interaction) => {
    if (!(interaction.isCommand() && interaction.commandName == command[0].name))
        return;
    generateCalc_1.default(interaction);
});
client.on("ready", () => {
    console.log(chalk_1.default.italic.bold.cyan(`Logged in as ${client.user.tag}!\n`));
});
client.login(process.env.BOT_TOKEN);
