import React, { Component } from 'react';
import Message from './Messages';

class MessageList extends Component {

  componentDidUpdate(_prevProps, _prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }
  
  render () {
    const backgroundColor = this.props.darkMode?  "black" :this.props.backgroundColorHeader;

    const scmessagelist =  {
      
      height: "80%",
      overflowY: 'auto',
      backgroundColor:backgroundColor,
      backgroundSize: "100%",
      paddingTop: "40px",
      paddingButton: "40px",
      paddingLeft: "0px",
      paddingRight: "0px",
      fontFamily: this.props.fontStyleMessage
    };
    
    return (
      <div style={scmessagelist} ref={el => this.scrollList = el}>
        {this.props.messages.map((message, i) => {
          return <Message message={message} key={i} fontStyleMessage={this.props.fontStyleMessage} darkMode={this.props.darkMode} Icon={this.props.Icon}
/>;
        })}
      </div>);
  }
}

export default MessageList;
