import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'ɴᴏᴛ ɪɴ ɢʀᴏᴜᴘ ᴍᴇᴛᴀᴅᴀᴛᴀ.'
    if (!('participants' in groupMetadata)) throw 'ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛs ɴᴏᴛ ʀᴇɢɪsᴛᴇʀ.'
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'ʙᴏᴛ ɪs ɴᴏᴛ ᴀᴠᴀɪʟᴀʙʟᴇ ɪɴ ᴛʜᴀᴛ ɢʀᴏᴜᴘ.'
    if (!me.admin) throw 'ᴍᴀᴋᴇ ʙᴏᴛ ᴀs ᴀᴅᴍɪɴ ғɪʀsᴛ.'
    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkgroup <jid>']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i
handler.group = true


export default handler