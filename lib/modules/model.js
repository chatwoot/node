class Model {
  constructor({
    client,
    path,
    accountScoped = true,
    accountId
  }) {
    this.client = client;
    this.path = accountScoped ? `/accounts/${accountId}/${path}` : `/${path}`;
  }

  get() {
    return this.client.get(this.path);
  }

  show(id) {
    return this.client.get(`${this.path}/${id}`);
  }

  create(data) {
    return this.client.post(this.path, data);
  }

  update(id, data) {
    return this.client.patch(`${this.path}/${id}`, data);
  }

  delete(id) {
    return this.client.delete(`${this.path}/${id}`);
  }
}

module.exports = Model;
