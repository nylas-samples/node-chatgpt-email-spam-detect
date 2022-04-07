# node-email-send

This sample will show you to easily read your email with the Nylas Node.js SDK.

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

When your message is successfully sent, you'll get the following output in your terminal for a few emails:

```text
[4/7/YYYY] Here's an email subject
[4/6/YYYY] Another subject
```

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.
