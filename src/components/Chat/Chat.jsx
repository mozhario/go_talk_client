import React, { Component } from "react";
import { fetchMessages } from "chat/api/api";
import { connect } from "chat/api/websocket";
import "./Chat.scss";
import Header from 'components/Chat/Header/Header';
import ChatHistory from 'components/Chat/ChatHistory/ChatHistory';
import MessageControls from 'components/Chat/MessageControls/MessageControls';
import FakeCloseButton from 'components/FakeCloseButton/FakeCloseButton';
import Entrance from 'components/Chat/Entrance';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = { username: null };

    this.chatRef = React.createRef()

    this.state = {
      chatHistory: [
        // Mocked data
        {
          "type": "user_message",
          'username': 'Віртуальна Сопля',
          'text': 'Оксанааааа!',
          'sent_time': '31 feb 13:37',
        },
        {
          "type": "user_message",
          'username': 'Злий Репер Зеник',
          'text': 'Блять дайте мі салямі, кусок як кінський хуй!',
          'sent_time': '31 feb 13:38',
        },
        {
          "type": "user_message",
          'username': 'А продавщиця каже',
          'text': 'Гівно то не купуй! Якесь їбане чмо поклало ГМО! То є отрава, сука! Бля здохнеш в тяжких муках!',
          'sent_time': '31 feb 13:69',
        },
        {
          "type": "user_message",
          'username': 'Василь Симоненко',
          'text': 'Ти знаєш що ти людина?\nТи знаєш про це чи ні?\nУсмішка твоя - єдина,\nМука твоя - єдина,\nОчі твої - одні.',
          'sent_time': '31 feb 14:69',
        },
      ]
    }
  }

  handleUsernameSubmit = (username) => {
    console.log(`username: ${username}`);
    this.setState({ username });
  }

  render() {
    return (
      <div className="Chat" ref={this.chatRef}>
        {this.state.username ? (
          <div>
            <Header />
            <FakeCloseButton elementRef={ref => (this.chatRef = ref)}/>
            <ChatHistory chatHistory={this.state.chatHistory} />
            <MessageControls username={this.state.username} />
          </div>
        ) : (
          <Entrance onUsernameSubmit={this.handleUsernameSubmit} />
        )}
      </div>
    );
  }

  componentDidMount() {
    fetchMessages()
    .then(data => {
      console.log(data)
      this.setState({
        chatHistory: data
      });
    });

    connect((msg) => {
      console.log("New text: " + msg.data)
      var messageData = JSON.parse(msg.data)
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, messageData]
      }))
    });
  }
}

export default Chat;
