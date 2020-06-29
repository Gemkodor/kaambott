class KaamelottReact {
    constructor(options) {
        this.quotes = [
            {
                "keywords": ["scorpion", "mi-ours"],
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
            },
            {
                "keywords": ["tarte"],
                "sentence": "La seule différence concrète avec des briques, c'est que vous appelez ça des tartes."
            },
            {
                "keywords": ["boniche"],
                "sentence": "Hé ben, si un jour j’oublie que je suis boniche, vous serez gentil de me le rappeler !"
            },
            {
                "keywords": ["carottes", "chef"],
                "sentence": "Quand on veut être sûr de son coup, mon petit bonhomme, on plante des carottes, on ne joue pas les chefs d'État !"
            },
            {
                "keywords": ["tirème", "barque"],
                "sentence": "Votre frère il va attaquer un trirème avec une barque ?"
            },
            {
                "keywords": ["sortir de là"],
                "sentence": "Si ça s’trouve ? Alors pour nous sortir de là il va nous falloir un peu plus solide que du si ça s’trouve !"
            },
            {
                "keywords": ["ébouriffé", "vaporeux"],
                "sentence": "Mon père, il était pas ébouriffé, déjà, hein, il avait une coupe à la con mais c'était plutôt aplati et puis il était pas vaporeux, voilà ! Allez, au lit !"
            },
            {
                "keywords": ["démon", "pucelle"],
                "sentence": "C’est vrai ce qu’on dit, vous êtes le fils d’un démon et d’une pucelle ?"
            },
            {
                "keywords": ["faire chier"],
                "sentence": "Il commence à doucement me faire chier celui là aussi!"
            },
            {
                "keywords": ["cul"],
                "sentence": "Sortez-vous les doigts du cul !!!"
            },
            {
                "keywords": ["manger", "faim"],
                "sentence": "Oui… non… nous, on mange quand on a faim."
            },
            {
                "keywords": ["angoisse", "parler"],
                "sentence": "Non, moi j'crois qu'il faut qu’vous arrêtiez d'essayer d'dire des trucs. Ça vous fatigue, déjà, et pour les autres, vous vous rendez pas compte de c'que c'est. Moi quand vous faites ça, ça me fout une angoisse... j'pourrais vous tuer, j'crois. De chagrin, hein ! J'vous jure c'est pas bien. Il faut plus que vous parliez avec des gens."
            },
            {
                "keywords": ["glander"],
                "sentence": "Ça vous fait pas mal à la tête de glandouiller vingt-quatre heures sur vingt-quatre ?"
            },
            {
                "keywords": ["broderie"],
                "sentence": "Mais j'ai pas l'temps ! De faire de la broderie, maintenant ! J'vous dis qu'on est en train de se prendre une peignée !"
            },
            {
                "keywords": ["connard"],
                "sentence": "Un jour je vais lui fumer sa gueule à ce connard !"
            },
            {
                "keywords": ["cailloux"],
                "sentence": "Arthur ! Kaamelott, c’est zéro ! Des cailloux, des cailloux, des cailloux, ça m'énerve ! !"
            },
            {
                "keywords": ["manipulation", "manipuler", "saoûler", "saoûle", "harceler", "harcèle"],
                "sentence": "Te laisse pas faire {pseudo}. J'en sais rien, je sais pas. Fais en ce que tu veux démerde toi, te laisse pas faire, c'est un ordre."
            },
            {
                "keywords": ["bouseaux", "plèbe", "paysans"],
                "sentence": "Attention, j’ai rien contre les bouseux... D’habitude je mange pas avec, c’est tout."
            },
            {
                "keywords": ["voyage"],
                "sentence": "Le premier truc qui frappe, c’est la langue. Vous savez ce que c’est, on arrive sur place, boum… En fait, c’est quand on commence à entendre les gens parler que là… là, on se dit : je suis pas chez moi."
            },
            {
                "keywords": ["dignité"],
                "sentence": "Heureusement qu’on n'a aucune dignité… Sinon on serait bien dans la merde."
            },
            {
                "keywords": ["comment dire", "insulte"],
                "sentence": "Non, mais on peut adapter. On peut dire, euh… bon, je dis : « Avec votre dégaine… euh… Avec votre dégaine de crevette, faites gaffe à pas vous faire bouffer par un mérou. »"
            },
            {
                "keywords": ["gros tas", "obèse"],
                "sentence": "Je comprends qu'avec deux livres de viande sur l'estomac, on ne soit pas très actif dans une chambre à coucher. Ça ronfle à faire craquer le joint des murs."
            },
            {
                "keywords": ["lopette", "gouverner"],
                "sentence": "C'est justement parce que vous avez été cocollé par une lopette de jardinier que vous gouvernez comme une femme !"
            },
            {
                "keywords": ["rôde", "rôder", "tourne autour"],
                "sentence": "Non, sans blague, Seigneur {pseudo}, avec tout le respect que je vous dois, la prochaine fois que je vous revois tourner autour de la chambre du roi, je vous déglingue la tête."
            },
            {
                "keywords": ["ils ont fait quoi ?"],
                "sentence": "Ben ils m'ont dit d'aller me faire mettre. Après, ils m'ont jeté des gadins et une marmite avec un restant de soupe de poisson."
            },
            {
                "keywords": ["subreptice", "tapinois"],
                "sentence": "J’ai pénétré leur lieu d'habitation de façon subrogative […] en tapinant."
            },
            {
                "keywords": ["tileul", "adjectif"],
                "sentence": "L'adjectif qui me correspond le mieux, c'est : le plancton."
            },
            {
                "keywords": ["burgonde", "burgondes"],
                "sentence": "Vous vous rendez pas compte de ce que c'est les burgondes! Déjà c'est un miracle qu'ils soient pas tous crevés. Ils font n'importe quoi, et en plus ils sont plus qu'une poignée!"
            },
            {
                "keywords": ["grec", "culture burgonde"],
                "sentence": "La culture burgonde ? Je savais même pas qu’y en avait une… Non, moi je voulais faire grec moderne, mais y avait plus de place. Il restait que burgonde ou anglais. Aaaaanglais ! Mais c’est encore moins répandu !"
            },
            {
                "keywords": ["morue"],
                "sentence": "Ah mais vous êtes pas ma mère ! Si j'ai envie de mettre des grosses morues dans mon plumard, JE FAIS CE QUE JE VEUX !!! Soyez gentille, lâchez-moi la chemise !"
            },
            {
                "keywords": ["connasse"],
                "sentence": "Mais vous êtes une grosse morue!"
            },
            {
                "keywords": ["lit", "semaine"],
                "sentence": "Selon Karadoc, un lit n’est pas un lit s'il n’y a pas de quoi manger une semaine dedans sans en sortir."
            },
            {
                "keywords": ["fric", "poules"],
                "sentence": "Vous croyez quoi ? Que ça s'trouve dans l'cul des poules, le fric ?"
            },
            {
                "keywords": ["bélier"],
                "sentence": "Quand je vais raconter à mon oncle combien vous raquez pour vos béliers pourris, il va bien se marrer !"
            },
            {
                "keywords": ["gerber"],
                "sentence": "Mais vous êtes pas mort, espèce de connard ?"
            },
            {
                "keywords": ["notre grandeur"],
                "sentence": "Oubliez ce que je viens de dire. Le Graal, c'est de la merde."
            },
            {
                "keywords": ["glands", "péremptoire", "perpendiculaire"],
                "sentence": "Et si je vous dis que vous êtes deux glands, là, vous avez du péremptoire. C’est vous qui voyez."
            },
            {
                "keywords": ["poètes", "license poétique"],
                "sentence": "Y'a trop de clampins qui se disent poètes qui sortent la licence poétique dès qu'ils pondent trois merdes que personne comprend ."
            },
            {
                "keywords": ["répartition", "chambres", "piaule"],
                "sentence": "Est-ce que vous avez conscience que j'ai de menues responsabilités au sein de ce gouvernement qui me tiennent relativement éloigné des problèmes de répartition des piaules ?"
            },
            {
                "keywords": ["Saint Suaire", "Saint-Suaire", "jeter"],
                "sentence": "Le Saint-Suaire ? Vous avez foutu en l'air le Saint-Suaire ?"
            },
            {
                "keywords": ["religion"],
                "sentence": "La religion c'est le bordel, admettez-le ! Alors laissez-moi prier c'que j'veux tranquille. 'M'empêche pas d'la chercher, votre saloperie de Graal."
            },
            {
                "keywords": ["tous d'accord"],
                "sentence": "C’était quand la dernière fois qu’on s’est retrouvés tous d’accord sur un truc !?"
            },
            {
                "keywords": ["glandouiller", "glandouillez", "fictionnel"],
                "sentence": "Je pense que vous glandouillez bien assez comme ça dans la réalité pour qu'on puisse se permettre d'optimiser le fictionnel."
            },
            {
                "keywords": ["bouffer", "salade"],
                "sentence": "J'bouff'rais un ch'val en salade !!!"
            },
            {
                "keywords": ["prêter", "pognon", "prêt bancaire"],
                "sentence": "Je vous ai déjà dit que je prête du pognon à des taux vraiment pas dégueulasses ?"
            },
            {
                "keywords": ["unijambiste"],
                "sentence": "Attendez, ça on en a déjà parlé ! Celui de l'autre fois, il m'avait pas dit qu'il était unijambiste!"
            }
        ]
    }

    react(message) {
        let userMsg = message.content;
        this.quotes.forEach(quote => {
            quote.keywords.forEach(keyword => {
                if (userMsg.indexOf(" " + keyword + " ") !== -1) {
                    let sentence = quote.sentence.replace("{pseudo}", message.author.username);
                    message.channel.send(sentence);
                }
            });
        });
    }
}

module.exports = KaamelottReact;