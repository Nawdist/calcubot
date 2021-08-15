import { Message, MessageActionRow, MessageButton } from "discord.js";

//You are free to change the labels, but changine the customId

const row_1 = new MessageActionRow().addComponents([
    new MessageButton()
        .setLabel("1")
        .setStyle("PRIMARY")
        .setCustomId("1_calc"),  //The _calc serves as a way for the message collector
        new MessageButton()      //to filter through all other interactions you might
        .setStyle("PRIMARY")     //implement and only watch for these ones
        .setCustomId("2_calc")      
        .setLabel("2"),
        new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("3_calc")   //To change what the button writes in the message,
        .setLabel("3"),          //only change the first character of each button's customId
        new MessageButton()       
        .setStyle("PRIMARY")     
        .setCustomId("+_calc")
        .setStyle("SUCCESS")
        .setLabel("+"),          ////Again, changing labels will not have any impact
])
const row_2 = new MessageActionRow().addComponents([
    new MessageButton()
        .setLabel("4")
        .setStyle("PRIMARY")
        .setCustomId("4_calc"),
        new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("5_calc")
        .setLabel("5"),
        new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("6_calc")
        .setLabel("6"), 
        new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("/_calc")
        .setStyle("SUCCESS")
        .setLabel("/"),
])
const row_3 = new MessageActionRow().addComponents([
    new MessageButton()
        .setLabel("7")
        .setStyle("PRIMARY")
        .setCustomId("7_calc"),
        new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("8_calc")
        .setLabel("8"),
        new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("9_calc")
        .setLabel("9"),
        new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("*_calc")
        .setStyle("SUCCESS")
        .setLabel("*"),
])
const row_4 = new MessageActionRow().addComponents([
    new MessageButton()
        .setLabel(".")
        .setStyle("PRIMARY")
        .setCustomId("._calc"),
        new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("0_calc")
        .setLabel("0"),
        new MessageButton()
        .setStyle("SUCCESS")
        .setCustomId("=_calc")
        .setLabel("="),
        new MessageButton()
        .setStyle("PRIMARY")
        .setCustomId("-_calc")
        .setStyle("SUCCESS")
        .setLabel("-"),
])
const row_5 = new MessageActionRow().addComponents([
    new MessageButton()
        .setLabel("(")
        .setStyle("SUCCESS")
        .setCustomId("(_calc"),
        new MessageButton()
        .setStyle("SUCCESS")
        .setCustomId(")_calc")
        .setLabel(")"),
        new MessageButton()
        .setStyle("DANGER")
        .setCustomId("c_calc")
        .setLabel("C"),
        new MessageButton()
        .setCustomId("e_calc")
        .setStyle("DANGER")
        .setLabel("<=="),
])


export = {row_1, row_2, row_3, row_4, row_5}