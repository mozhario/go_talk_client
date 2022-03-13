import React, { Component } from "react";
import "./ChatHistory.scss";

class ChatHistory extends Component {
  render() {
    const messages = this.props.chatHistory.map((msg, index) => (
      <div className="message" key={index}>
        <div className="message__header">
          <div className="message__username">{msg.username}</div>
          <div className="message__datetime">{msg.sent_time}</div>
        </div>
        <div className="message__text">{msg.text}</div>
      </div>
    ));

    return (
      <div className="chat-history">
        <div className="chat-history__bg"></div>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;
