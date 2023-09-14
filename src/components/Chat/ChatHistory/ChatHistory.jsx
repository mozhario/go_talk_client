import React, { Component } from "react";
import "./ChatHistory.scss";
import { MESSAGE_TYPES } from "chat/constants";
import { formatSentTime } from "chat/utils";


class ChatHistory extends Component {
  render() {
    const messages = this.props.chatHistory.map((msg) => {
      if (msg.type === MESSAGE_TYPES.SYSTEM_MESSAGE) {
        return <SystemMessage msg={msg} />;
      }
      return <UserMessage msg={msg} />;
      // throw new Error(`Unknown message type: ${msg.type} ¯\_(ツ)_/¯`);
    });

    return (
      <div>

        <div className="chat-history">
          <div className="chat-history__bg"></div>
            {messages}
          <div>
            
          </div>
        </div>
      </div>
    );
  }
}

class UserMessage extends Component {
  render() {
    const { msg } = this.props;

    return (
      <div className="message" key={msg.id}>
        <div className="message__header">
          <div className="message__username">{msg.username}</div>
          <div className="message__datetime">{formatSentTime(msg.sent_time)}</div>
        </div>
        <div className="message__text">{msg.text}</div>
      </div>
    );
  }
}

class SystemMessage extends Component {
  render() {
    const { msg } = this.props;

    return (
      <div className="message system-message" key={msg.id}>
        <div className="message__text">{msg.text}</div>
      </div>
    );
  }
}

export default ChatHistory;
