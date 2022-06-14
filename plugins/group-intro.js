let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 ᴋᴀʀᴛᴜ ɪɴᴛʀᴏ 」*
│ *ɴᴀᴍᴀ     :* 
│ *ɢᴇɴᴅᴇʀ   :* 
│ *ᴜᴍᴜʀ      :* 
│ *ʜᴏʙʙʏ    :* 
│ *ᴋᴇʟᴀs      :* 
│ *ᴀsᴀʟ         :* 
│ *ᴀɢᴀᴍᴀ    :* 
 |  *sᴛᴀᴛᴜs     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i
handler.group = true

export default handler 
