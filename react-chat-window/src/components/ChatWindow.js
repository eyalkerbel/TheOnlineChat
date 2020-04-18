import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';


class ChatWindow extends Component {
  constructor(props) {
    super(props);
  }

  onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  }

  onFilesSelected(filesList) {
    this.props.onFilesSelected(filesList);
  }

  render() {
    let messageList = this.props.messageList || [];
    let classList = [
      'sc-chat-window',
      (this.props.isOpen ? 'openedi' : 'closed'),
      (this.props.darkMode? 'dark' : 'notdark')
    ];
const additonalClass ={
    fontFamily: this.props.fontStyleMessage
  };
    
    return (
      <div className={classList.join(' ')}>
        <Header style={additonalClass}
          teamName={this.props.agentProfile.teamName}
          imageUrl={this.props.agentProfile.imageUrl}
          onClose={this.props.onClose}
          fontStyleMessage={this.props.fontStyleMessage}
          backgroundColorHeader={this.props.backgroundColorHeader}
          darkMode={this.props.darkMode}

        />
        <MessageList style={additonalClass}
          messages={messageList}
          imageUrl={this.props.agentProfile.imageUrl}
          color={this.props.color}
          fontStyleMessage={this.props.fontStyleMessage}
          darkMode={this.props.darkMode}
          Icon={this.props.Icon}
        />
        <UserInput style={additonalClass}
          onSubmit={this.onUserInputSubmit.bind(this)}
          onFilesSelected={this.onFilesSelected.bind(this)}
          showEmoji={this.props.showEmoji}
        />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  agentProfile: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func,
  onUserInputSubmit: PropTypes.func.isRequired,
  showEmoji: PropTypes.bool
};

export default ChatWindow;
