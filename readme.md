# node-chatgpt-email-spam-detect

This sample will show you to easily use the Nylas Node.js SDK and the OpenAI Node.js SDK to categorize your email messages.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values (visit the Nylas dashboard at dashboard.nylas.com):

```text
CLIENT_ID = "" # You can get this from the Nylas dashboard
CLIENT_SECRET = "" #  You can get this from the Nylas dashboard
ACCESS_TOKEN = "" # You can get this by authing a user account (e.g. via the Nylas dashboard)
RECIPIENT_ADDRESS = "" # The auth user account's email address
OPENAI_API_KEY = "" # You can get this from the OpenAI dashboard
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

## Expand on this example

- Give the prompt the option to be "unsure"
- Let the user "train" the prompt by storing an allow/block list to add to the prompt
- Expose the results in a graphical email client
- Use the results to categorize emails in Gmail/Outlook/Exchange
- Expand on the list of categories to triage
