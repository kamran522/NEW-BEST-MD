/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█


*/

const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen massage use " true " , 
global.READ_MASSAGE = false
//👇 enable DISABLE Girls Voice Reply , Auto Voice Reply 
global.VOICE_REPLY = false
//👇 Do you want show time on your bio use "true" want DISABLE use "false" 
global.AUTO_BIO = false
//👇 Inbox massage block PM block , 
global.INBOX_BLOCK = false
//👇 Auto react  , 
global.AUTO_REACT = false
//👇 Bad word Auto delete ( you must add bad words )  
global.ANTI_BADWORD = false
//👇 Kick And Auto Delete Group link Senders , 
global.ANTI_G_LINK = false
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = false
global.SEND_GOODBYE = false
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = false
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Desabale Bot inbox ඉන්බොක්ස් බ්ලොක් නොවී වැඩ නොකරන්නනම් 
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send ඉන්බොක්ස් වැඩනොකරන බවට මැසේජ් එක යැවිම true or false 
global.DISABLE_INBOX_MESSAGE_SEND = false
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = true
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = false
//👇 Bot On Privet
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false 
global.AUTO_SEEN_STATUS = true



/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['923323963788'] 
//👇 Your Caption ( Image Video )
global.cap = '🅚 🅐 🅜 🅘'
//👇 Your Bot Name
global.botnma =  '🅚 🅐 🅜 🅘' 
//👇 Your name
global.ownernma =  'KAMRAN HASIL' 
//👇 Sticker Author Name
global.packname =  '🅚 🅐 🅜 🅘' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/karachi,pakistan'
//👇 Removebg Api key
global.REMOVE_BG_API = 'Z4G1Pp3H95dw2eP3YeUrM5g7'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://i.imgur.com/rmCgpTY.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `default`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 DISABLE PM Block numbers
global.NO_BLOCK = ["94715166712","94719574492"]
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex","mia"]
//👇 Open ai API Put Withouth "sk-" 
global.CHATGPT_API = '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'
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['null']
//👇 Your Bot Group Link
global.GROUP_LINK = 'NULL'
/*

   🍃 OTHER 🍃

*/
global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    IMG_BLOCK : "This Word is Ban from image downloader",
    DISABLE_INBOX : "Inbox DISABLE By Bot Owner Please Only Use Groups",
    ONLY_SEX_GROUP : "Adult Video Download Only Allowed On This Group \n\n not allowed",
    DISABLE_CMD : "🚫 Commands Are DISABLE by owner",
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['923323963788'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['923323963788'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '🅚 🅐 🅜 🅘' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = [''] 
global.sp = '👽'
global.weem = '🅚 🅐 🅜 🅘'

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
