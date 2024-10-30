const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://dashboard.render.com/web/new"                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "https://github.com/Nilahhhhhh/Suhail-Md/edit/main/config.js"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "gmt+1";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349066429731";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_12_10_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5LFxuICAgICAgICAxODksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU4LFxuICAgICAgICA4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYxLFxuICAgICAgICA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZk04RkQwOE9oLzg3bFJDQ2hIdVIxL2RuR0V0ZXN6bkZhbGU4UVlSMUhSTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDY2NDI5NzMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyQ0Y0OTVENzEyQkU0NDJBQzNDRjIxRjVDMzc5RTFDMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzAyMzk5NjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieE93ZU16OU1RMUM2UWx6ZWRpck9QZ1wiLFxuICBcInBob25lSWRcIjogXCJhY2I5ZjE5MC05OGNkLTRjMjQtODIxZi04YmU1YjM5ZGRkYTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICA2LFxuICAgICAgMjExLFxuICAgICAgMTU0LFxuICAgICAgMTkwLFxuICAgICAgMTg3LFxuICAgICAgMTUzLFxuICAgICAgMTUxLFxuICAgICAgMjAxLFxuICAgICAgMTYzLFxuICAgICAgMTgxLFxuICAgICAgMTY0LFxuICAgICAgMTg2LFxuICAgICAgNTAsXG4gICAgICAxNjQsXG4gICAgICAzNixcbiAgICAgIDUyLFxuICAgICAgMTE5LFxuICAgICAgMjcsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMjIzLFxuICAgICAgMjAyLFxuICAgICAgMTU3LFxuICAgICAgMjMsXG4gICAgICAzMixcbiAgICAgIDk4LFxuICAgICAgMjYsXG4gICAgICAzLFxuICAgICAgMTE5LFxuICAgICAgODYsXG4gICAgICAxNTcsXG4gICAgICAyMjIsXG4gICAgICAyMzEsXG4gICAgICAyMzQsXG4gICAgICA5LFxuICAgICAgNzYsXG4gICAgICA3NCxcbiAgICAgIDE1NSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFS01BOTlNMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NjQyOTczMToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzI0NTc0MjAyMzA3OTM6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHJwd00wREVOTzdoYmtHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwcnNyY3dIa2Vib0dpZXp6LzlzZEUyVytkWHdZVHNPdjVzUUhsR1diZkdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBkTFpGYi9QRldaalF3MTM4YVUrMG5OR2NnTnRBWEtTMUk2Qzk2RG9wV0xpOXZyTS9GSWY0WlNNNWdKZ0FvcFJJWVpGV2p3QWJ5VmpEa1krc3pwV0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjllaVIzOWlZSlFCQ2RsT1pzS21jR0JRQjc3RlhKcEFjanhWM0hzRGNkcHQ4cStsTnR6cXZFODczYUpzeW5TM05wTXRYcXdJbDJTNWIwNHM3TjArbWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjY0Mjk3MzE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMjM5OTU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGI5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIYjkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFUGRJZ0xSTk90eldvMVNKc2ZlZWhVelQyamVwOVh5WEJJS1M4NHVhcUtnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk2Nzg0OTIxMCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzMwMjM2MTg0MDUxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "A_17MD", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "Powered by Suhail.md" , // 『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Enny",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "false",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "false",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "false",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "false",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "false";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
