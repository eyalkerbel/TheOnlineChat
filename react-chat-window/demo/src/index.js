import React, {Component} from 'react';
import {render} from 'react-dom';
import Demo from './Demo';

class App extends Component {
  render() { 
    return (
    <Demo title="OnlineChat" imgUrl='https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png' 
     mute={false} delayMassage={2} firstMassage="hello you!!" urlAPI="http://localhost:5000/GetAnswer" apiKeyNameReturning="serverMessage"
  fontStyleMessage= "Comic Sans MS ,Helvetica, Arial, sans-serif" showEmojiBar={true} darkMode={false} 
      />);
  }
}
export default App;

render(<App/>, document.querySelector('#demo'));
