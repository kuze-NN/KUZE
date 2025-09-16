const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "imagine",
    aliases: ["img", "gen", "im"],
    version: "1.2",
    author: "MR᭄﹅ MAHABUB﹅ メꪜ",
    countDown: 5,
    role: 0,
    description: "Generate image from prompt using Mahabub imagine API",
    category: "ai",
    guide: "{p}imagine <prompt>\nOr reply to a message containing the prompt."
  },

  onStart: async ({ api, event, args, message }) => {
    const msgID = event.messageID || event.messageReply?.messageID;
    const react = (emoji) => {
      try { api.setMessageReaction(emoji, msgID, () => {}, true); } catch {}
    };

    try {
      let prompt = args.join(" ").trim() || event.messageReply?.body?.trim();
      if (!prompt) return message.reply("❌ Use: /imagine <prompt>");

      const cacheDir = path.join(__dirname, "cache");
      fs.ensureDirSync(cacheDir);

      react("⏳");

      const { data, headers } = await axios.get(
        "https://mahabub-imagine-api.vercel.app/api/gen",
        { params: { prompt }, responseType: "arraybuffer", timeout: 60000 }
      );

      const contentType = (headers["content-type"] || "").toLowerCase();
      let filePath;

      if (contentType.includes("application/json")) {
        let json;
        try {
          json = JSON.parse(Buffer.from(data).toString("utf8"));
        } catch {
          return message.reply("❌ API returned invalid JSON.");
        }

        let imageData =
          json?.image ||
          json?.image_url ||
          json?.data ||
          json?.image_data ||
          json?.result ||
          (typeof json === "string" && json);

        if (!imageData) {
          react("❌");
          return message.reply("❌ API returned JSON but no image found.");
        }

        if (imageData.startsWith("data:image")) {
          filePath = path.join(cacheDir, `imagine_${Date.now()}.png`);
          fs.writeFileSync(filePath, Buffer.from(imageData.split(",")[1], "base64"));
        } else {
          const down = await axios.get(imageData, {
            responseType: "arraybuffer",
            timeout: 60000
          });
          const ext = (down.headers["content-type"] || "").includes("png") ? "png" : "jpg";
          filePath = path.join(cacheDir, `imagine_${Date.now()}.${ext}`);
          fs.writeFileSync(filePath, down.data);
        }
      } else if (contentType.startsWith("image/")) {
        const ext = contentType.split("/")[1].split(";")[0] || "png";
        filePath = path.join(cacheDir, `imagine_${Date.now()}.${ext}`);
        fs.writeFileSync(filePath, data);
      } else {
        const txt = Buffer.from(data).toString("utf8");
        const url = txt.match(/https?:\/\/\S+/)?.[0];
        if (!url) return message.reply("❌ API returned unsupported response.");

        const down = await axios.get(url, { responseType: "arraybuffer", timeout: 60000 });
        const ext = (down.headers["content-type"] || "").includes("png") ? "png" : "jpg";
        filePath = path.join(cacheDir, `imagine_${Date.now()}.${ext}`);
        fs.writeFileSync(filePath, down.data);
      }

      react("✅");
      await message.reply({
        body: `✅ Generated: ${prompt}`,
        attachment: fs.createReadStream(filePath)
      });

      // cleanup after send
      setTimeout(() => fs.unlink(filePath).catch(() => {}), 5000);

    } catch (err) {
      console.error("imagine.js error:", err?.message || err);
      react("❌");
      message.reply("❌ Failed to generate image.");
    }
  }
};
