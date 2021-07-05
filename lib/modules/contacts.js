const Model = require('./model');

class Contacts extends Model {
  constructor({
    client,
    accountId
  }) {
    super({ client, path: 'contacts', accountId });
  }

  get(page = 1, sortAttr = 'name') {
    return this.client.get(`${this.path}?page=${page}&sort=${sortAttr}`);
  }

  getConversationsByContactId(contactID) {
    return this.client.get(`${this.path}/${contactID}/conversations`);
  }

  search(q, page = 1, sort = 'name') {
    return this.client.get(`${this.path}/search?q=${q}&page=${page}&sort=${sort}`);
  }

  getLabels(contactID) {
    return this.client.get(`${this.path}/${contactID}/labels`);
  }

  updateLabels(contactID, labels) {
    return this.client.post(`${this.path}/${contactID}/labels`, { labels });
  }
}

module.exports = Contacts;
