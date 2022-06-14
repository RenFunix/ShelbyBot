import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `ʜɪ, ᴀᴋᴜʟᴀʜ sʜᴇʟʙʏ🥶. ᴏʀᴀɴɢ ᴘᴀʟɪɴɢ ᴋᴜʟʟ ᴅᴀɴ ᴘᴀʟɪɴɢ ᴅɪɴɢɪɴ ᴅɪ ᴅᴜɴɪᴀ🥶. ʙᴏᴛ ʙᴇʟɪᴀᴜ ɪɴɪ ᴅɪʙᴜᴀᴛ ᴏʟᴇʜ ɴɢᴀғ ʀᴇɴғᴜɴɪx🥶,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ🥶\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://chat.whatsapp.com/JMv6TBnYGCe7NngMhLdGmb', 'ɢᴄ ʙᴏᴛ', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nᴀᴛᴍɪɴ ɴɢᴇɴᴛᴏᴛ🥶`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler