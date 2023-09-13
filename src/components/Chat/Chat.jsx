import React, { Component } from "react";
import { connect } from "api";
import "./Chat.scss";
import Header from 'components/Chat/Header/Header';
import ChatHistory from 'components/Chat/ChatHistory/ChatHistory';
import MessageControls from 'components/Chat/MessageControls/MessageControls';
import FakeCloseButton from 'components/FakeCloseButton/FakeCloseButton';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.chatRef = React.createRef()

    this.state = {
      chatHistory: [
        // Mocked data
        {
          'username': 'Віртуальна Сопля',
          'text': 'Оксанааааа!',
          'sent_time': '31 feb 13:37',
        },
        {
          'username': 'Злий Репер Зеник',
          'text': 'Блять дайте мі салямі, кусок як кінський хуй!',
          'sent_time': '31 feb 13:38',
        },
        {
          'username': 'А продавщиця каже',
          'text': 'Гівно то не купуй! Якесь їбане чмо поклало ГМО! То є отрава, сука! Бля здохнеш в тяжких муках!',
          'sent_time': '31 feb 13:69',
        },
        {
          'username': 'Василь Симоненко',
          'text': 'Ти знаєш що ти людина?<br>Ти знаєш про це чи ні?<br>Усмішка твоя - єдина,<br>Мука твоя - єдина,<br>Очі твої - одні.',
          'sent_time': '31 feb 14:69',
        },
      ]
    }
  }

  render() {
    return (
      <div className="Chat" ref={this.chatRef}>
        <Header />
        <FakeCloseButton elementRef={ref => (this.chatRef = ref)}/>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <MessageControls />
      </div>
    );
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New text: " + msg.data)
      var messageData = JSON.parse(msg.data)
      var messageItem = {
        'username': messageData.username,
        'text': messageData.text,
        'sent_time': '31 feb 14:69',
      }
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, messageData]
      }))
    });
  }
}

export default Chat;
