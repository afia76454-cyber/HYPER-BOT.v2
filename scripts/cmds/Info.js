module.exports = {
  config: {
    name: "info",
    version: "2.2",
    author: " (Arafat)",
    shortDescription: "Display user info.",
    longDescription: "Stylized Ariyan bot info with uptime.",
    category: "INFO",
    guide: {
      en: "[user]",
    },
  },

  onStart: async function ({ api, event }) {
    // Uptime formatter
    const sec = process.uptime();
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = Math.floor(sec % 60);
    const botUptime = `${hrs}𝗁 ${mins}𝗆 ${secs}𝗌`;

    // Stylized message
    const messageBody = `
.          ┌────★────┐
🙈           HYPER BOT                  
           └────★────┘

👤  ͟𝗨͟𝘀͟𝗲͟𝗿͟ ͟𝗜͟𝗻͟𝗳͟𝗼͟
┌──────────────────┐
│   ◓𝖭͟𝖺͟𝗆͟𝖾͟ : Rafsan                     
│   ◒ 𝖠͟𝗀͟𝖾͟ ; 𝟣7+          
│   ☯︎𝖫͟𝗈͟𝖼͟𝖺͟𝗍͟𝗂͟𝗈͟𝗇͟ ; Mirpur Dhaka♪
│   ◒ 𝖠͟𝖻͟𝗈͟𝗎͟𝗍͟ : 𝐁𝐨𝐭 &              
│    𝐉𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭  𝐋𝐨𝐯𝐞𝐫𝖨 
│    𝐀𝐥𝐰𝐚𝐲𝐬 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐀𝐛𝐨𝐮𝐭 𝐀𝐥𝐥(💌)
└──────────────────┘

🤖 𝗕𝗼𝘁 𝗗𝗲𝘁𝗮𝗶𝗹𝘀:
┌──────────────────┐
│   ◓𝐍𝐚𝐦𝐞 : Hyper Bot
│   ◒ 𝐎𝐖𝐍𝐄𝐑 : Rafsan
│   ✿︎ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧   : 7.0
│   ♡︎ 𝗨𝗽𝘁𝗶𝗺𝗲 : ${botUptime}    
└──────────────────┘

〽️ 𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝐁𝐨𝐭✨!
`;

    // Send only text message
    api.sendMessage(messageBody, event.threadID, event.messageID);
  }
};
