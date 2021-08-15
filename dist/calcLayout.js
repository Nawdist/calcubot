"use strict";
const discord_js_1 = require("discord.js");
//You are free to change the labels, but changine the customId
const row_1 = new discord_js_1.MessageActionRow().addComponents([
    new discord_js_1.MessageButton()
        .setLabel("1")
        .setStyle("PRIMARY")
        .setCustomId("1_calc"),
    new discord_js_1.MessageButton() //to filter through all other interactions you might
        .setStyle("PRIMARY") //implement and only watch for these ones
        .setCustomId("2_calc")
        .setLabel("2"),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("3_calc") //To change what the button writes in the message,
        .setLabel("3"),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("+_calc")
        .setStyle("SUCCESS")
        .setLabel("+"), ////Again, changing labels will not have any impact
]);
const row_2 = new discord_js_1.MessageActionRow().addComponents([
    new discord_js_1.MessageButton()
        .setLabel("4")
        .setStyle("PRIMARY")
        .setCustomId("4_calc"),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("5_calc")
        .setLabel("5"),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("6_calc")
        .setLabel("6"),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("/_calc")
        .setStyle("SUCCESS")
        .setLabel("/"),
]);
const row_3 = new discord_js_1.MessageActionRow().addComponents([
    new discord_js_1.MessageButton()
        .setLabel("7")
        .setStyle("PRIMARY")
        .setCustomId("7_calc"),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("8_calc")
        .setLabel("8"),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("9_calc")
        .setLabel("9"),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("*_calc")
        .setStyle("SUCCESS")
        .setLabel("*"),
]);
const row_4 = new discord_js_1.MessageActionRow().addComponents([
    new discord_js_1.MessageButton()
        .setLabel(".")
        .setStyle("PRIMARY")
        .setCustomId("._calc"),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("0_calc")
        .setLabel("0"),
    new discord_js_1.MessageButton()
        .setStyle("SUCCESS")
        .setCustomId("=_calc")
        .setLabel("="),
    new discord_js_1.MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("-_calc")
        .setStyle("SUCCESS")
        .setLabel("-"),
]);
const row_5 = new discord_js_1.MessageActionRow().addComponents([
    new discord_js_1.MessageButton()
        .setLabel("(")
        .setStyle("SUCCESS")
        .setCustomId("(_calc"),
    new discord_js_1.MessageButton()
        .setStyle("SUCCESS")
        .setCustomId(")_calc")
        .setLabel(")"),
    new discord_js_1.MessageButton()
        .setStyle("DANGER")
        .setCustomId("c_calc")
        .setLabel("C"),
    new discord_js_1.MessageButton()
        .setCustomId("e_calc")
        .setStyle("DANGER")
        .setLabel("<=="),
]);
module.exports = { row_1, row_2, row_3, row_4, row_5 };
