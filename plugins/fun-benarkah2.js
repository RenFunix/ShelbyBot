let handler = async (m, { command, text }) => m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['Iya','Sudah pasti','Sudah pasti bisa','Tidak','Tentu tidak','Sudah pasti tidak'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['benarkah <teks>?']
handler.tags = ['kerang', 'fun']
handler.command = /^benarkah$/i

export default handler
