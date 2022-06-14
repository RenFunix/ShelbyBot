let handler = async (m, { command, text }) => m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['Iya','Bisa','Tentu saja bisa','Tentu bisa','Sudah pasti','Sudah pasti bisa','Tidak','Tidak bisa','Tentu tidak','tentu tidak bisa','Sudah pasti tidak'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['bisakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.command = /^bisakah$/i

export default handler
