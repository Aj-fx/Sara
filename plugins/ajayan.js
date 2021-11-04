const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'ajayan', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/d3ew3PA.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*🧚‍♂️sᴀʀᴀ ʙᴏᴛ🧚‍♂️*
*𝗢𝘄𝗻𝗲𝗿 𝗻𝘂𝗺𝗯𝗲𝗿 wa.me/918281440156?text=Hi*


*𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗟𝗶𝗻𝗸𝗲   https://instagram.com/_ajayan_007?utm_medium=copy_link*

`}) 

}));
