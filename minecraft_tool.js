const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class MinecraftTool {
    constructor(dbManager) {
        this.sequelize = dbManager.sequelize;
        this.createModels();
    }

    createModels() {
        this.Coordinates = this.sequelize.define('minecraft_coordinates', {
            label: {
                type: Sequelize.STRING,
                unique: true
            },
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
                if (e.name === "SequelizeUniqueConstraintError") {
                    return message.reply('Ce nom existe déjà');
                }
                return message.reply('Une erreur est survenue lors de l\'ajout des coordonnées');
            }
        }
    }

    /**
     * Method to get a set of coordinates by label or by player name
     * Syntax of command : !get-coords <String:Label>
     * @param {*} message 
     * @param {*} args 
     */
    async getCoords(message, args) {
        if (args.length < 1) {
            return message.reply('Le nombre de paramètres est incorrect');
        } else {
            const labelOrPlayerName = args[0];
            const listOfCoords = await this.Coordinates.findAll({ 
                where: { 
                    [Op.or]: [
                        { label: labelOrPlayerName },
                        { player: labelOrPlayerName }
                    ]
                } 
            });

            if (listOfCoords.length > 0) {
                const listOfCoordsString = listOfCoords.map(coords => coords.label + " => [ " + coords.x + ", " + coords.y + ", " + coords.z + "]").join('\n') 
                return message.reply(listOfCoordsString);
            } else {
                return message.reply('Les coordonnées n\'ont pas été trouvées');
            }
        }
    }

    async deleteCoords(message, args) {
        if (args.length < 1) {
            return message.reply('Le nombre de paramètres est incorrect');
        } else {
            const label = args[0];
            const rowCount = await this.Coordinates.destroy({
                where: {
                    [Op.and]: [
                        { label: label },
                        { player: message.author.username }
                    ]
                }
            });

            if (!rowCount) {
                return message.reply('Ces coordonnées n\'existent pas. Destruction annulée');
            } 
            return message.reply('Les coordonnées ont été effacées.');
        }
    }
}

module.exports = MinecraftTool;