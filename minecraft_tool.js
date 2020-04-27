const Sequelize = require('sequelize');

class MinecraftTool {
    constructor(dbManager) {
        this.sequelize = dbManager.sequelize;
        this.createModels();
    }

    createModels() {
        this.Coordinates = this.sequelize.define('minecraft_coordinates', {
            label: Sequelize.STRING,
            player: Sequelize.STRING,
            x: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            y: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            z: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            }
        });
    }

    /**
     * Method to save new set of coordinates
     * Syntax of command : !save-coords <String:Label> <Number:X> <Number:Y> <Number:Z>
     * @param {*} message 
     * @param {*} args 
     */
    async saveCoords(message, args) {
        if (args.length < 4) {
            return message.reply("Le nombre de paramètres est incorrect");
        } else {
            const playerName = message.author.username;
            const coordsLabel = args[0];
            const coordsX = args[1];
            const coordsY = args[2];
            const coordsZ = args[3];

            if (typeof(coordsLabel) !== "string") {
                return message.reply("Le label doit être une chaine de caractères valide.");
            } else if (isNaN(coordsX) || isNaN(coordsY) || isNaN(coordsZ)) {
                return message.reply("Les valeurs x, y et z doivent être des nombres valides");
            }

            // Saving instance of model in database
            try {
                const coords = await this.Coordinates.create({
                    label: coordsLabel,
                    player: playerName,
                    x: coordsX,
                    y: coordsY,
                    z: coordsZ
                });
                return message.reply(`Les coords ${coords.label} ont été ajoutés !`);
            } catch (e) {
                return message.reply('Une erreur est survenue lors de l\'ajout des coordonnées');
            }
        }
    }

    /**
     * Method to get a set of coordinates by label
     * Syntax of command : !get-coords <String:Label>
     * @param {*} message 
     * @param {*} args 
     */
    async getCoordsByName(message, args) {
        if (args.length < 1) {
            return message.reply('Le nombre de paramètres est incorrect');
        } else {
            const coordsLabel = args[0];
            const coords = await this.Coordinates.findOne({ where: { label: coordsLabel } });

            if (coords) {
                return message.reply(coords.label + ' se trouve en : [' + coords.get('x') + ', ' + coords.get('y') + ', ' + coords.get('z') + ']');
            } else {
                return message.reply('Les coordonnées n\'ont pas été trouvées');
            }
        }
    }

    /**
     * Method to get the list of coordinates for a specific player
     * Syntax of command : !get-coords-player <String:PlayerName>
     * @param {*} message 
     * @param {*} args 
     */
    async getCoordsByPlayer(message, args) {
        if (args.length < 1) {
            return message.reply('Le nombre de paramètres est incorrect');
        } else {
            const playerName = args[0];
            const listOfCoords = await this.Coordinates.findAll({ where: { player: playerName } });
            const listOfCoordsString = listOfCoords.map(coords => coords.label + " => [ " + coords.x + ", " + coords.y + ", " + coords.z + "]").join('\n') || "Aucune coordonnées enregistrées";
            return message.reply("Les coordonnées de " + playerName + " :\n" + listOfCoordsString);
        }
    }
}

module.exports = MinecraftTool;