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

  search(q, page = 1, sort = 'name') {
    return this.client.get({
      url: `${this.path}/search`,
      params: {
        q,
        page,
        sort
      }
    });
  }
}

module.exports = Contacts;
