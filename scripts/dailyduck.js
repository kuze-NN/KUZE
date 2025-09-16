module.exports = {
    config: {
        name: "dailyduck",
        aliases: ["d-duck"],
        version: "1.0",
        author: "Hassan",
        role: 0,
        description: "Get your daily money from the duck",
        category: "game"
    },
    onStart: function ({ api, event }) {
        const dailyMoney = Math.floor(Math.random() * 100000) + 1; // Generating a random amount of daily money

        api.sendMessage(`Quack! You got ${dailyMoney} coins from the duck Now. Quack! 🦆`, event.threadID); // Sending the message with the daily money amount
    }
};
