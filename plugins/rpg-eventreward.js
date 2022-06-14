const rewards = {
    exp: 500000,
    money: 800000,
    potion: 50,
    mythic: 20,
    legendary: 10
}

const cooldown = 10
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `You have already claimed this event rewards, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    conn.sendButton(m.chat,'*––––––『 EVENT REWARD 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Menu', '.menu']],m)
    user.lastmonthly = new Date * 1
}
handler.help = ['eventreward']
handler.tags = ['rpg']
handler.command = /^(eventreward)$/i

handler.cooldown = cooldown

export default handler
