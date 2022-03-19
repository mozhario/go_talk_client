import React, { Component } from "react";
import { connect, sendMsg } from "api";
import "./Chat.scss";
import Header from 'components/Chat/Header/Header';
import ChatHistory from 'components/Chat/ChatHistory/ChatHistory';
import MessageControls from 'components/Chat/MessageControls/MessageControls';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [
        // Mocked data
        {
          'username': 'Sychev',
          'text': 'ALLOU YOBA ETO TI?',
          'sent_time': '31 feb 13:37',
        },
        {
          'username': 'YOBA',
          'text': 'PSHHH PSHHH NICHEGO NE SLYSHNO; A KTO SPRASHIVAET? YOBY NET, ETO EGO MAMA, CHTO EMU PEREDAT?',
          'sent_time': '31 feb 13:38',
        },
        {
          'username': 'ugly.worm',
          'text': 'ыыб беб ъуъ',
          'sent_time': '31 feb 13:69',
        },
        {
          'username': 'piven',
          'text': 'кукарєк',
          'sent_time': '31 feb 14:20',
        },
        {
          'username': 'norm_sorokin',
          'text': 'Здравствуйте Мартин Алексеевич! Я тебя ебал гад срать на нас говна. Я тебя ебал гадить нас срать так. Я тега егал могол срать на нас говда. Я тега егад могол сдат над мого. Я тега ега мого така мого. я тага мого така водо мога. я тега пото мога подо роды мого пира тора. я мого тара пото раво года мого мара мира бора пото доро нора това кара его хора пото шоря часа вода пото мира его ура поты жора пото мира его шоры вадо ига пото дора пото боры вадо году щора пото его ура поро ено гора пото ира поты дора тора позо кара ура пого ыра нога мита побо лота дора жого тора пото мога побо рода поло шора',
          'sent_time': '31 feb 14:69',
        },
        {
          'username': '.:: SaNeK pro100 Batya 777 ::.',
          'text': 'на сервере запрещено:<br>*использование читов, распрыжек, скриптов и прочих хитростей<br>*использование спреев-обманок и спреев с эротическим содержанием<br>*использование уязвимостей карт<br>*мат в любом проявлении<br>слово “сука” хоть и литературное, но на сервере расценивается как мат<br>*оскорбления игроков<br>*использование нечитаемых ников, ников содежащие мат, цифровых ников',
          'sent_time': '20 apr 4:20',
        },
      ]
    }
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="Chat">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <MessageControls />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New text")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }
}

export default Chat;
