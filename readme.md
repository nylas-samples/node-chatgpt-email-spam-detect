# node-email-read

This sample will show you to easily use the Nylas Node.js SDK and the OpenAI Node.js SDK to categorize your email messages.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values:

```text
ACCESS_TOKEN = ""
CLIENT_ID = ""
CLIENT_SECRET = ""
RECIPIENT_ADDRESS = ""
OPENAI_API_KEY = ""
```

Add the above values to a new `.env` file:

```bash
$ touch .env # Then add your env variables
```

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using the `node` command:

```bash
$ node index.js
```

When your messages are successfully read, you'll get the following output in your terminal for a few emails:

```text
# date, subject, category, and message ID
[4/8/YYYY] Here's an inportant message - Yes, security. (1yz01ivndb)
[4/7/YYYY] Here's an email subject - No, newsletters. (2wwqyz01ivnmzb)
[4/6/YYYY] Another subject - No, spam. ((241ahbvvivnmzb))
```

The core of this example is the "category" in the output above. This is the category that the OpenAI API has assigned to the email message, formatted as "Yes, {category}" or "No, {category}". The "Yes" or "No" indicates whether the message is likely to be important to you.

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.
