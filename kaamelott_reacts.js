class KaamelottReact {
    constructor(options) {
        this.quotes = [
            {
                "keywords": ["scorpion"],
                "sentence": "J’ai rêvé qu’il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière !"
            },
            {
                "keywords": ["compote"],
                "sentence": "Faut pas respirer la compote, ça fait tousser"
            },
            {
                "keywords": ["colibris", "en tant que tel"],
                "sentence": "Donc, pour résumer, je suis souvent victime des colibris, sous-entendu des types qu’oublient toujours tout, euh, non… Bref, tout ça pour dire, que je voudrais bien qu’on me considère en tant que tel."
            },
            {
                "keywords": ["graine"],
                "sentence": "JE NE MANGE PAS DE GRAINES !"
            },
            {
                "keywords": ["jambon", "gras"],
                "sentence": "La joie de vivre est le jambon !"
            }
        ]
    }

    react(message) {
        let userMsg = message.content;
        this.quotes.forEach(quote => {
            quote.keywords.forEach(keyword => {
                if (userMsg.indexOf(keyword) !== -1) {
                    message.channel.send(quote.sentence);
                }
            });
        });
    }
}

module.exports = KaamelottReact;