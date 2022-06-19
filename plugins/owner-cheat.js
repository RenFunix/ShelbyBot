const rewards = {
    exp: 99999999,
    money: 99999999,
    potion: 999,
    mythic: 999,
    legendary: 999
}

const cooldown = 10
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `You have already claimed this cheat rewards, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    conn.sendButton(m.chat,'*––––––『 CHEAT REWARD 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Menu', '.menu']],m)
    user.lastmonthly = new Date * 1
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(cheat)$/i
handler.owner = true

handler.cooldown = cooldown

export default handler
