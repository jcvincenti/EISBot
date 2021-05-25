require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();
const mensajeAncla = new Discord.MessageEmbed();
mensajeAncla.setTitle("Que es esto ?");
mensajeAncla.attachFiles(['Imagenes/ancla.png']);

var message;

const pathImagenes = [
    "Imagenes/cluster-dignidad.jpeg",
    "Imagenes/croce-troche-diaz.png",
    "Imagenes/croce-troche-diaz-spiderman.png",
    "Imagenes/diaz-troche.jpg",
    "Imagenes/dieguito-re-loco.jpg",
    "Imagenes/ronny-drop-schema.jpeg",
    "Imagenes/ronny-group-by.jpeg"
];

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
    "Que están cursando ustedes?",
    "Queremos desaburrir en un %30 a los usuarios"
];

const mensajesDiaz = [
    "El video muestra un ancla y vos ahí tenes 2. No entiendo.",
    mensajeAncla,
    "Puede haber un recreito chiquitito?"
];

const mensajesFabi = [
    "Fernando García estás desmuteado"
];

const mensajesAndi = [
    "Esa tiene linda vocecita",
    "Es feita la gordi, paso"
];

client.login(process.env.TOKEN)

client.on("message", (msg) => {
    message = msg;
    switch(true) {
        case _messageMatches("Dieg"):
            _sendMessage(mensajesDiego);
            break;
        case _messageMatches("Troche"):
            _sendMessage(mensajesTroche);
            break;
        case _messageMatches("Diaz"):
            _sendMessage(mensajesDiaz);
            break;
        case _messageMatches("Croce"):
            _sendMessage(mensajesCroce);
            break;
        case _messageMatches("Fabi"):
            _sendMessage(mensajesFabi);
            break;
        case _messageMatches("And"):
            _sendMessage(mensajesAndi);
            break;
        case _messageMatches("Juan") || _messageMatches("Fede") || _messageMatches("Gaston"):
            message.channel.send("Rajá de acá puto, todavía no tengo mensaje");
            break;
        case _messageMatches("Meme"):
            message.channel.send(getMeme());
            break;
    }
});

function getMeme() {
    let imagen = pathImagenes[Math.floor(Math.random() * pathImagenes.length)];
    let msg = new Discord.MessageEmbed();
    return msg.attachFiles([imagen]);
}

function _sendMessage(messages) {
    message.channel.send(messages[Math.floor(Math.random() * messages.length)]);
}

function _messageMatches(content) {
    return message.content.includes(process.env.PREFIX + content);
}
