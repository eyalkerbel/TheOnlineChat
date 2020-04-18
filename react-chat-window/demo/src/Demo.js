import React, {Component} from 'react';
import {render} from 'react-dom';
import {Launcher} from '../../src';
import messageHistory from './messageHistory';
import TestArea from './TestArea';
import Header from './Header';
import Footer from './Footer';
import monsterImgUrl from './../assets/monster.png';
import './../assets/styles';
import axios from 'axios';


class Demo extends Component {



  constructor(props) {
    super(props);
    this.state = {
      messageList:  [{type: 'text', author: 'them', data: { text:props.firstMassage}}],
      newMessagesCount: 0,
      isOpen: false,
      isSent:false,
      currentMassage: '',

    };
  }


  componentDidUpdate() {
    if(this.state.isSent) {
        this.setState({isSent:false})
      this.handleNewUserMessage(this.state.currentMassage);
    }
  }

  _onMessageWasSent(message) {
    console.log(message);
    this.setState({
      messageList: [...this.state.messageList, message],
      isSent:true,
      currentMassage:message
    });
  }
  _onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);
    this.setState({
      messageList: [...this.state.messageList, {
        type: 'file', author: 'me',
        data: {
          url: objectURL,
          fileName: fileList[0].name
        }
      }]
    });
  }


  handleNewUserMessage = (newMessage) => {
    console.log("handleUserActivate");
    const pp = "serverMessage"
    axios.request({
            method: 'POST',
            url: this.props.urlAPI,
            data: {
              message: newMessage
            }
          }).then(async (res) => { 
            await delay(this.props.delayMassage*1000);           
            this._sendMessage(res.data[this.props.apiKeyNameReturning]);
          }).catch((err)=>    console.log("unsucessfull",err));


          function delay(ms) {
            return new Promise((resolve) => {
               setTimeout(resolve, ms);
            });
         }
         
  }
  
  

  _sendMessage(text) {
  //  if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
      this.setState({
        newMessagesCount: newMessagesCount,
        isSent:false,
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      });
   // }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    });
  }

  render() {
    return <div>
      <Launcher
        agentProfile={{
          teamName: this.props.title,
          imageUrl: this.props.imgUrl
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        onFilesSelected={this._onFilesSelected.bind(this)}
        messageList={this.state.messageList}
        newMessagesCount={this.state.newMessagesCount}
        handleClick={this._handleClick.bind(this)}
        isOpen={this.state.isOpen}
        showEmoji={this.props.showEmojiBar}
        color={this.props.bacgroundScreenColor}
        backgroundColorHeader={this.props.backgroundColorHeader}
        mute={this.props.mute}
        fontStyleMessage={this.props.fontStyleMessage}
        darkMode={this.props.darkMode}
        Icon ={this.props.Icon}
      />
    </div>;
  }
}
export default Demo;
//render(<Demo/>, document.querySelector('#demo'));
