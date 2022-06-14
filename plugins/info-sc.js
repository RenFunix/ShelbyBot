import fs from 'fs'
let handler = async (m, { conn }) => {
conn.reply(m.chat, `*https://chat.whatsapp.com/JMv6TBnYGCe7NngMhLdGmb*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '',
body: '',         
previewType: 0, thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: `ʟᴏᴏᴋɪɴɢ ғᴏʀ sᴄʀɪᴘᴛ?\nwa.me/6282148864989`}}})
}
handler.command = ['sc','script'] 
handler.help = ['sc']
handler.tags = ['general']
export default handler