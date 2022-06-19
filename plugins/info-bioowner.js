let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ ᴏᴡɴᴇʀ ʙɪᴏ ]───────*
*💌 ɴᴀᴍᴇ* : ʜᴜᴛᴀᴏ-ᴍᴅ
*✉️ ʀᴇᴀʟɴᴀᴍᴇ* : ᴀɴᴅɪ
*♂️ ɢᴇɴᴅᴇʀ* : ʙᴏʏs
*🕋 ʀᴇʟɪɪɢɪᴏɴ* : ɪsʟᴀᴍs
*⏰ ᴅᴀᴛᴇ ᴏғ ʙɪʀᴛʜ* : 31 ᴊᴜʟʏ 2002
*🎨 ᴀɢᴇ* : 19
*🧮 ᴄʟᴀss* : ᴅᴄᴏᴅɪɴɢ ɢʀᴀᴅᴜᴀᴛᴇ
*🧩 ʜᴏʙʙʏ* : ᴄᴏᴅɪɴɢ sᴇʀᴠᴇʀs
*💬 ᴍʏ ɴᴀᴛᴜʀᴇ* : ᴄᴏʟᴅ ʟɪᴋᴇ ᴛʜᴏᴍᴀs sʜᴇʟʙʏ🥶
*🗺️ ᴍʏ ᴘʟᴀᴄᴇ* : sᴀᴍᴀʀɪɴᴅᴀ, ɪɴᴅᴏɴᴇsɪᴀɴ
*❤️ ɪ ʟɪᴋᴇ* : ʙʟᴀᴄᴋ ᴘᴇᴏᴘʟᴇ 
*💔 ʜᴀᴛᴇ* : ᴄʜɪɴᴇsᴇ 

*───────[ sᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ ]───────*
*📷 ɪɴsᴛᴀɢʀᴀᴍ* : @renfunix
*🇫  ғᴀᴄᴇʙᴏᴏᴋ* : Ndiie
*🏮 ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ* : Ren Funix
*🐈 ɢɪᴛʜᴜʙ:* RenFunix

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
