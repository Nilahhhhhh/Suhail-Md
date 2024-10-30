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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_20_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODksXG4gICAgICAgIDgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICAyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcxLFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEMWZMNUtDNEh1VzFxeG5VSjJ0Z2l2MUJpbnRlcERaUGwwbFVzNFYzYzFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNjY0Mjk3MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE1RDQzMDY2MUVCNUNGREZCQ0U0QUJFNkYxQzNGMTg4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDI4NzIwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxaTJBbUNhdlM5R1FzWW1KY1h4dHhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM5NzEyM2Y0LTdjZTEtNGYxYS05MDQ5LTU3NDkzMzUwYzI3MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDg5LFxuICAgICAgMTMyLFxuICAgICAgMTk3LFxuICAgICAgNjMsXG4gICAgICA0MixcbiAgICAgIDY1LFxuICAgICAgMjQ3LFxuICAgICAgMTgzLFxuICAgICAgNCxcbiAgICAgIDM0LFxuICAgICAgMjA4LFxuICAgICAgNjgsXG4gICAgICAxNTAsXG4gICAgICA4NixcbiAgICAgIDExMixcbiAgICAgIDEsXG4gICAgICA4NCxcbiAgICAgIDI1LFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDkyLFxuICAgICAgNSxcbiAgICAgIDU0LFxuICAgICAgMTE4LFxuICAgICAgMjAxLFxuICAgICAgODUsXG4gICAgICAyOSxcbiAgICAgIDIwMCxcbiAgICAgIDYyLFxuICAgICAgMTgyLFxuICAgICAgOTEsXG4gICAgICAyMjksXG4gICAgICA0MixcbiAgICAgIDExOCxcbiAgICAgIDIyMyxcbiAgICAgIDUwLFxuICAgICAgMTc4LFxuICAgICAgMTU4LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldSSk40QTIxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY2NDI5NzMxOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMjQ1NzQyMDIzMDc5MzoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQM3B3TTBERU4yc2lMa0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjByc3Jjd0hrZWJvR2llenovOXNkRTJXK2RYd1lUc092NXNRSGxHV2JmR1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWNoUGhIU3hKL0tkVDJUemQyMmd6M0JSeWhMOXBUSlNUdmtRY1phZEY1Z1NYTHpwdHhyNDFTWWg1WXRnZG01eitCNHhuSmE4Mm9zSm81eVhGSUhTQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTFVVVXdJbm81cS9NbmJkT0tqU2lYekVKY1JXVTd2dEgzaUlBMWhCbC8rd0IydlFhQUJYS1JLR1R2WXM5ZnZiODZNRVB6aCtsbVRGZmxtT0J3YmlaaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NjQyOTczMToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAyODcyMDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBTENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFMQy5qc29uIjogIntcImtleURhdGFcIjpcIkJYaEJWT1NYRkJQVnlNRjlzL1k1YkV0N3BiY2ZQeDJlU1ZLQ3FmZWNjRmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTY3ODQ5MjEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwMjQ5ODE3MTkzXCJ9Igp9"


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
