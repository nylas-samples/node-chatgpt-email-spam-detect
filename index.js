// Import your dependencies
import "dotenv/config.js";
import Nylas from "nylas";
import { Configuration, OpenAIApi } from "openai";

// Configure your Nylas client
Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
const nylas = Nylas.with(process.env.ACCESS_TOKEN);

// Configure your OpenAI client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Get messages from Nylas
const getMessageList = async () => {
  try {
    const messageList = await nylas.messages.list({ limit: 10 });

    console.log(`Found ${messageList.length} messages in your inbox...`);

    return messageList;
  } catch (err) {
    console.error("Error:\n", err);
  }
};

// Pass in a message list and get a list of classified messages
const classifyMessages = async (messageList) => {
  return Promise.all(
    messageList.map(async (message) => {
      const { id, date, subject } = message;
      const formattedDate = new Date(date).toLocaleDateString();
      const messageLabel = await classifyMessage(message);

      return { id, formattedDate, subject, messageLabel };
    })
  );
};

// Pass a message to GPT
// Get a string value for whether the user should read and why
const classifyMessage = async ({ from, subject, snippet }) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You're an email assistant and you help me figure out which emails are something I should read and which are not worth my time. 
        The following are categories I want to avoid: spam, newsletters, sales messages, junk.
        Answer with "Yes" or "No", then a comma followed by a one-word category to demonstrate your reason.
        Is the following message something I should read?
        From: ${from}
        Subject: ${subject}
        Snippet: ${snippet}`,
      },
    ],
  });

  return response.data.choices[0].message.content;
};

// Run the script
const messageList = await getMessageList();
const classifiedMessages = await classifyMessages(messageList);

// Log the results
classifiedMessages.forEach(({ formattedDate, subject, messageLabel, id }) =>
  console.log(`[${formattedDate}] ${subject} - ${messageLabel} (${id})`)
);
