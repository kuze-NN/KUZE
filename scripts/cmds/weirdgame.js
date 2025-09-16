const facts = [
  { fact: "মানুষের শরীরে ২০৬টি হাড় থাকে।", answer: true },
  { fact: "পৃথিবী সূর্যের চারপাশে ঘুরে।", answer: true },
  { fact: "সূর্য একটি নক্ষত্র।", answer: true },
  { fact: "গোল্ডফিশের মেমোরি মাত্র ৩ সেকেন্ড।", answer: false },
  { fact: "প্লুটো এখন আর গ্রহ নয়।", answer: true },
  { fact: "তেলাপোকা মাথা ছাড়া এক সপ্তাহ বাঁচতে পারে।", answer: true },
  { fact: "পৃথিবীতে ৮টি গ্রহ আছে।", answer: true },
  { fact: "মানুষ রান্না করা একমাত্র প্রাণী।", answer: true },
  { fact: "চাঁদ পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ।", answer: true },
  { fact: "আমাজন পৃথিবীর সবচেয়ে বড় বন।", answer: true },
  { fact: "বাঘের দাগ প্রতিটি আলাদা।", answer: true },
  { fact: "ভাইরাস জীবন্ত প্রাণী।", answer: false },
  { fact: "চাঁদ লাল রঙের।", answer: false },
  { fact: "নীল তিমি বিশ্বের সবচেয়ে বড় প্রাণী।", answer: true },
  { fact: "মহাকাশে কোনো বায়ু নেই।", answer: true },
  { fact: "পাখি ডিম পাড়ে।", answer: true },
  { fact: "সাপের পা আছে।", answer: false },
  { fact: "মানুষের সবচেয়ে বড় অঙ্গ হলো ত্বক।", answer: true },
  { fact: "মানুষ দিনে গড়ে ২০,০০০ বার শ্বাস নেয়।", answer: true },
  { fact: "পৃথিবীর কেন্দ্র গরম।", answer: true },
  { fact: "সব প্রাণী অক্সিজেন নেয়।", answer: false },
  { fact: "মানুষের রক্ত সবসময় লাল।", answer: true },
  { fact: "ভূমি চ্যাপ্টা।", answer: false },
  { fact: "মানুষ ঘুমালে স্বপ্ন দেখে।", answer: true },
  { fact: "সূর্য পশ্চিম দিক থেকে উঠে।", answer: false },
  { fact: "হাসি শরীরের চাপ কমায়।", answer: true },
  { fact: "পাখি সবসময় উড়তে পারে।", answer: false },
  { fact: "সমুদ্রের জল লবণাক্ত।", answer: true },
  { fact: "মানুষের মস্তিষ্ক নতুন কিছু শিখতে পারে।", answer: true },
  { fact: "চাঁদ পৃথিবীর চারপাশে ঘুরে।", answer: true },
  { fact: "ভূমি সবসময় একই আবহাওয়া থাকে।", answer: false },
  { fact: "মানুষের দাঁত জীবনে একবারই জন্মে।", answer: false },
  { fact: "মানুষ শ্বাস নিতে অক্সিজেন ব্যবহার করে।", answer: true },
  { fact: "সব প্রাণী ঘুমায়।", answer: false },
  { fact: "মানুষের শরীর ৭০% পানি।", answer: true },
  { fact: "চোখের রঙ জন্মের সময় স্থায়ী হয়।", answer: false },
  { fact: "ভাইরাস কেবল জীবন্ত কোষে বৃদ্ধি পায়।", answer: true },
  { fact: "মানুষ সবসময় একইরকম দেখতে।", answer: false },
  { fact: "মানুষের হাড় জন্মের পর সংখ্যা বাড়ে।", answer: true },
  { fact: "মানুষ প্রতি বছর একবার জন্মায়।", answer: true },
  { fact: "সূর্য মহাকাশে একটি গ্রহ।", answer: false },
  { fact: "ভালোবাসা শুধু মানুষের অনুভূতি।", answer: false },
  { fact: "মানুষের মস্তিষ্ক দিনে প্রায় ২০ ওয়াট শক্তি ব্যবহার করে।", answer: true },
  { fact: "গাছ খাবার তৈরি করে সালোকসংশ্লেষণের মাধ্যমে।", answer: true },
  { fact: "সব গাছ সবসময় সবুজ থাকে।", answer: false },
  { fact: "মানুষের ত্বক শরীরের সবচেয়ে বড় অঙ্গ।", answer: true },
  { fact: "চাঁদ সবসময় পৃথিবীর একই দিক দেখায়।", answer: true },
  { fact: "মানুষ ঘুম না খেয়েও বাঁচতে পারে।", answer: false },
  { fact: "মানুষের হৃৎপিণ্ড দিনে প্রায় ১ লাখ বার স্পন্দিত হয়।", answer: true },
  { fact: "মানুষের দেহে পেশী থাকে।", answer: true },
  { fact: "পৃথিবীর আবহাওয়া সবসময় একই থাকে না।", answer: true },
  { fact: "মানুষের চোখে রঙ দেখা যায়।", answer: true },
  { fact: "মানুষের হাড় ধীরে ধীরে শক্ত হয়।", answer: true }
];

module.exports = {
  config: {
    name: "weirdgame",
    aliases: ["wg"],
    version: "6.0",
    author: "starboy + ChatGPT Fix",
    shortDescription: "True/False game with balance",
    longDescription: "True বা False উত্তর দিয়ে কয়েন জিতুন।",
    category: "game"
  },

  onStart: async function ({ message, event, commandName }) {
    const factObj = facts[Math.floor(Math.random() * facts.length)];
    const msg = `🧐 প্রশ্ন:\n${factObj.fact}\n\n👉 উত্তর দিন: "true"/"false" ("t"/"f" accepted)`;

    message.reply(msg, (err, info) => {
      if (!info) return;
      global.GoatBot.onReply.set(info.messageID, {
        commandName,
        messageID: info.messageID,
        senderID: event.senderID,
        correctAnswer: factObj.answer
      });
    });
  },

  onReply: async function ({ message, event, Reply, usersData }) {
    if (!Reply || event.senderID !== Reply.senderID) return;

    let answer = (event.body || "").trim().toLowerCase();
    if (answer === "t") answer = "true";
    if (answer === "f") answer = "false";

    if (!["true", "false"].includes(answer)) {
      return message.reply('⚠ উত্তর দিন "true" বা "false" লিখে।');
    }

    const userId = event.senderID;
    let userData = await usersData.get(userId);
    if (!userData) userData = { money: 0, data: {} };

    const isCorrect = (answer === "true") === Reply.correctAnswer;

    if (isCorrect) {
      userData.money += 15000;
      await usersData.set(userId, userData);
      await message.reply(`✅ সঠিক! তুমি 15000 coins জিতেছো 🎉\n💰 মোট balance: ${userData.money}`);
    } else {
      await message.reply(`❌ ভুল!\nসঠিক উত্তর: ${Reply.correctAnswer ? "True" : "False"}\n💰 তোমার balance: ${userData.money}`);
    }

    try {
      await message.unsend(Reply.messageID);
    } catch (e) {}
    global.GoatBot.onReply.delete(Reply.messageID);
  }
};
