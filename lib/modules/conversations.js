const Model = require('./model');

class Conversations extends Model {
  constructor({
    client,
    accountId
  }) {
    super({ client, path: 'conversations', accountId });
  }

  get({
    inboxId, status, assigneeType, page, labels, teamId
  }) {
    return this.client.get(this.path, {
      params: {
        inbox_id: inboxId,
        team_id: teamId,
        status,
        assignee_type: assigneeType,
        page,
        labels
      }
    });
  }

  search({ q, page }) {
    return this.client.get(`${this.path}/search`, {
      params: { q, page }
    });
  }

  toggleStatus(conversationId, status) {
    return this.client.post(`${this.path}/${conversationId}/toggle_status`, {
      status
    });
  }

  assignAgent(conversationId, agentId) {
    return this.client.post(
      `${this.path}/${conversationId}/assignments?assignee_id=${agentId}`,
      {}
    );
  }

  assignTeam(conversationId, teamId) {
    const params = { team_id: teamId };
    return this.client.post(`${this.path}/${conversationId}/assignments`, params);
  }

  sendMessage(conversationId, content, message_type = 'incoming') {
    const params = {
      content: content,
      message_type: message_type,
      private: false,
      content_attributes: {}
    };
    return this.client.post(`${this.path}/${conversationId}/messages`, params);
  }

  markMessageRead(conversationId) {
    return this.client.post(`${this.path}/${conversationId}/update_last_seen`);
  }

  toggleTyping(conversationId, status = 'on') {
    return this.client.post(`${this.path}/${conversationId}/toggle_typing_status`, {
      typing_status: status
    });
  }

  mute(conversationId) {
    return this.client.post(`${this.path}/${conversationId}/mute`);
  }

  unmute(conversationId) {
    return this.client.post(`${this.path}/${conversationId}/unmute`);
  }

  sendEmailTranscript(conversationId, email) {
    return this.client.post(`${this.path}/${conversationId}/transcript`, { email });
  }

  getLabels(conversationId) {
    return this.client.get(`${this.path}/${conversationId}/labels`);
  }

  updateLabels(conversationId, labels) {
    return this.client.post(`${this.path}/${conversationId}/labels`, { labels });
  }
}

module.exports = Conversations;
