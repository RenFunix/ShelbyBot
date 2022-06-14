import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴀɢᴇ ʜᴇʀᴇ !",
	rows: [
	    {title: "ʀᴀɴᴅᴏᴍ ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "ᴏ ʟ ᴅ",
	rows: [
	    {title: "30 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "ʏ ᴏ ᴜ ɴ ɢ",
	rows: [
	    {title: "20 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 ʏᴇᴀʀs", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `│›ᴘʟᴇᴀsᴇ sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴀɢᴇ ᴀᴛ ᴛʜᴇ ʙᴏᴛᴛᴏᴍ ʙᴜᴛᴛᴏɴ...`,
  footer: `┗ *ʏᴏᴜʀ ɴᴀᴍᴇ:* ${conn.getName(m.sender)}\n<❔> ᴡᴀɴᴛ ᴀ ᴄᴏsᴛᴜᴍᴇ ɴᴀᴍᴇ? ᴛʏᴘᴇ *${usedPrefix + command} ʏᴏᴜʀɴᴀᴍᴇ.ᴀɢᴇ*`,
  title: "▢- - - - - ʀᴇɢɪsᴛᴇʀ - - - - -",
  buttonText: "ᴄʟɪᴄᴋ ʜᴇʀᴇ !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] ᴋᴀᴍᴜ sᴜᴅᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ\nᴍᴀᴜ ᴅᴀғᴛᴀʀ ᴜʟᴀɴɢ? *${usedPrefix}ᴜɴʀᴇɢ <sᴇʀɪᴀʟ ɴᴜᴍʙᴇʀ>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'ɴᴀᴍᴀ ᴛɪᴅᴀᴋ ʙᴏʟᴇʜ ᴋᴏsᴏɴɢ (ᴀʟᴘʜᴀɴᴜᴍᴇʀɪᴄ)'
  if (!age) throw 'ᴜᴍᴜʀ ᴛɪᴅᴀᴋ ʙᴏʟᴇʜ ᴋᴏsᴏɴɢ (ᴀɴɢᴋᴀ)'
  age = parseInt(age)
  if (age > 30) throw 'ɴᴊɪʀ ᴛᴜᴀ'
  if (age < 5) throw 'ɴᴊɪʀ ʙᴏᴄɪʟ'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
┏─• *ᴜsᴇʀs*
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟʟ
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
┗────···

ᴅᴀᴛᴀ ᴜsᴇʀ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ ᴅɪᴅᴀᴛᴀʙᴀsᴇ ʙᴏᴛ, ᴅɪᴊᴀᴍɪɴ ᴀᴍᴀɴ ᴛᴀɴᴘᴀ ᴛᴇʀsʜᴀʀᴇ (. ❛ ᴗ ❛.)
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'- - - - - ʀᴇɢɪsᴛᴇʀ - - - - -',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/4a7e5f18efaadec18a7a0.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler