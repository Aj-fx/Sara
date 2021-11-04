const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'group', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/VJuPuTP.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*😈SARA😈*
*𝕆𝕨𝕟𝕖𝕣 𝕟𝕦𝕞𝕓𝕖𝕣 wa.me/918078391406?text=Hi*
*Group Linke   https://chat.whatsapp.com/D3AtxKioDPdJkoBqVHtDRT*

`}) 

}));
