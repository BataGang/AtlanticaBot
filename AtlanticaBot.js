Const Discord = require('discord.js');

var Client = new Discord.Client()
var prefix = ("/")

Client.login('NTIyMTI3NzE0Mzg0MjE2MDg0.DvGdww.b-dGmifpogRVrtxNLJSaU_SzBOI')

Client.on('message', function (message){
	if (message.content === prefix + 'ip'){
		message.channel.send("**OUPS!! les serveur est en développement pour le moment! réessayez plus tard !**")
		console.log("ip demandée")
}
});

Client.on('message', function (message){
    if (message.content === prefix + 'staff'){
        message.channel.send("Voici le staff du serveur :
        	Owner : Alouledz
        	Co-Owner : LPBchouchDz69YT, Julop777? Lologame360
        	Administrateur : AtomeGaby
        	Gérant Staff : FrozenNoy
        	Développeur : BataGang
        	Guide : Cactussirène14, Xenos_18, Dixlilas
        	Gérant Builder : Opelax50
        	pack maker : MotMotLol123
        	Builder : Bowangle, Fatilek_minecraft, Sweetchloe75, dadodasyra
        	Animateur : Porteclem76")

        			