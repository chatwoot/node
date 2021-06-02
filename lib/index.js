const buildClient = require('./client/build');
const Contacts = require('./modules/contacts');
const Conversations = require('./modules/conversations');

class ChatwootClient {
  constructor({ config: { host, apiVersion, apiAccessToken } }) {
    this.client = buildClient({
      config: {
        host, apiVersion, apiAccessToken
      }
    });
    this.contacts = this.getInstance(Contacts);
    this.conversations = this.getInstance(Conversations);
  }

  getInstance(Model) {
    return (accountId) => new Model({ accountId, client: this.client });
  }
}

module.exports = ChatwootClient;
