# @chatwoot/node

A node.js client for Chatwoot APIs

Note: This is a work in progress. Interface can change before a stable release.

### How to use

1. Install the library

```
yarn add @chatwoot/node
```

or

```
npm install --save @chatwoot/node
```

2. Create a Chatwoot Client by providing the host URL and API Access Token

```js
const ChatwootClient = require('@chatwoot/node')

const config = { host: 'https://app.chatwoot.com', apiAccessToken: 'your-access-token' }
const Chatwoot = new ChatwootClient({ config })
```

Supported config params are shown below.

| Key | Default Value | Required | Description |
| -- | -- | -- | -- |
| host | https://app.chatwoot.com | False | The API Host URL, if you are using self-hosted Chatwoot, please change this value. |
| apiVersion | api/v1 | False | The version of the API, at the moment v1 is only available |
| apiAccessToken | | True | API access token to authenticate with the APIs. You can get the token from your Profile Settings |


3. Fire an API request

```js
// ...

const getContacts = async (accountId) => {
  try {
    const { data } = await Chatwoot.contacts(accountId).get()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getContacts(1);
```
