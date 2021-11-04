const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'ajayan', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*🧚‍♂️𝗦𝗔𝗥𝗔 𝗕𝗢𝗧🧚‍♂️*
*ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/918281440156?text=Hi*


*ɪɴsᴛᴀ ʟɪɴᴋ  https://instagram.com/_ajayan_007?utm_medium=copy_link*

`}) 

}));
