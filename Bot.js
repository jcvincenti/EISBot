const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = config.token;
const prefix = config.prefix;
const mensajeAncla = new Discord.MessageEmbed();
mensajeAncla.setTitle("Que es esto ?");
mensajeAncla.attachFiles(['Imagenes/ancla.png']);

const mensajesDiego = [
    "Zarpado!",
    "Viva Peron!",
    "Fiesta",
    "Chango",
    "Se hizo la luz hermano",
    "Chingate",
    "Bien pedorro",
    "Papita pal loro",
    "Nos vemos en Disney",
    "Ahora te lo subo a Taringa",
    "Alto pete",
    "La mambeó",
    "Le chingan"
];

const mensajesTroche = [
    "Como hiciste esa magia ronny?",
    "Todavía estoy analizando que es una transacción",
    "Si falla una transacción, tengo que revertir todo?",
    "Programé mal toda mi vida",
    "El modelo tendria que actualizarse y luego persistirse?",
    "Terminamos de hacer el pull request nosotros?"
];

const mensajesCroce = [
    "Que están cursando ustedes?"
];

const mensajesDiaz = [
    "El video muestra un ancla y vos ahí tenes 2. No entiendo.",
    mensajeAncla
];

client.on("ready", () => {
    console.log("Estoy listo");
});

client.on("message", (message) => {
    if (message.content.includes(prefix + "Dieg")) {
        message.channel.send(mensajesDiego[Math.floor(Math.random() * mensajesDiego.length)]);
    }
    if (message.content.includes(prefix + "Troche")) {
        message.channel.send(mensajesTroche[Math.floor(Math.random() * mensajesTroche.length)]);
    }
    if (message.content.includes(prefix + "Diaz")) {
        message.channel.send(mensajesDiaz[Math.floor(Math.random() * mensajesDiaz.length)]);
    }
    if (message.content.includes(prefix + "Croce")) {
        message.channel.send(mensajesCroce[Math.floor(Math.random() * mensajesCroce.length)]);
    }
});

client.login(token)