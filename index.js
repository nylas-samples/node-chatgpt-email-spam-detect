// Import your dependencies
import dotenv from "dotenv/config.js";
import Nylas from "nylas";

// Configure your Nylas client
Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
const nylas = Nylas.with(process.env.ACCESS_TOKEN);

// Read your messages
try {
  const messages = await nylas.messages;
  const messageList = await messages.list({ limit: 5 });

  messageList.map((message) => {
    const date = new Date(message.date).toLocaleDateString();

    console.log(`[${date}] ${message.subject}`);
  });
} catch (err) {
  console.error("Error:\n", err);
}
