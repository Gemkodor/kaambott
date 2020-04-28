# KaamBott

### Description

FR :
KaamBott est un bot Discord comportant plusieurs fonctionnalités n'ayant absolument rien à voir entre elles :
- Selon certains mots clés que vous écrirez dans vos conversations, KaamBott affichera une réplique de Kaamelott. Totalement inutile, donc indispensable.
- Si vous êtes un grand joueur de Minecraft, vous pourrez enregistrer vos coordonnées préférées et les afficher quand vous en aurez besoin. Un mémo intelligent en quelque sorte.

EN :
KaamBott is a Discord bot that have several functionalities, with absolutely no connection between them.
- According to certains keywords that you will type in your conversations, KaamBott will display a quote from Kaamelott (A french comedy). Yes, this is useless, therefore essential
- If you are a big player of Minecraft, you will be able to save your coordinates and display them when you will need them.

### Requirements

- NodeJS v12.16.2 (tested on this version, this may work on previous versions)
- A discord server with an application with a bot. To add a bot to your discord server, follow this guide : https://discordjs.guide/

### How to install

1. Clone this Git repository
2. Type npm install inside the project directory.
3. Create a script called config.json in the directory and add the following content in it :

>{
>    "prefix": "!",
>    "token": "YOUR-TOKEN-GOES-HERE"
>}

> Don't forget to replace YOUR-TOKEN-GOES-HERE by your token

4. Run your script with the following command :

> node index.js

### Commandes du bot

> !save-coords <String:Label> <Number:X> <Number:Y> <Number:Z>
Save coordinates (X, Y, Z) with a label.

> !get-coords <String:Label|PlayerName>
Display coordinates corresponding to the label passed in parameters, or display all the coordinates saved by the player name passed in parameters.

> !delete-coords <String:Label>
Delete the coordinates saved under the name passed in parameters.

> !timer <Number:Minutes>
Launch a timer for the number of minutes passed in parameters, and display a message in the channel at the end of this timer.