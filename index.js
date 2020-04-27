const Discord = require('discord.js');
const dbManager = require('./db_manager.js');
const KaamelottReact = require('./kaamelott_reacts.js');
const MinecraftTool = require('./minecraft_tool.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

let minecraftTool = new MinecraftTool(dbManager);
let kaamelottReact = new KaamelottReact();

client.once('ready', () => {
    minecraftTool.Coordinates.sync();
});

client.on('message', async message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) {
        kaamelottReact.react(message);
    } else {
        // Handles commands (Ex : !help)
        switch (command) {
            case "save-coords":
                // Syntax of command : !save-coords <String:Label> <Number:X> <Number:Y> <Number:Z>
                minecraftTool.saveCoords(message, args);
                break;
            case "get-coords":
                // Syntax of command : !get-coords <String:Label>
                minecraftTool.getCoordsByName(message, args);
                break;
            case "get-coords-player":
                // Syntax of command : !get-coords-player <String:PlayerName>
                minecraftTool.getCoordsByPlayer(message, args);
                break;
            case "help":
                let helpText = "Commandes disponibles :\n!save-coords <Label> <X> <Y> <Z> :\n!get-coords <Label>\n!get-coords-player <PlayerName>";
                message.channel.send(helpText);
                break;
        }
    }
});

client.login(token);