import React from 'react';
import Linkify from 'react-linkify';


const TextMessage = (props) => {

  let contentClassList = [
    'sc-message--text',
    (props.darkMode? 'dark' : 'notdark')
  ];
  return <div className={contentClassList.join(' ')}>{
    <Linkify properties={{ target: '_blank' }}>{props.data.text}</Linkify>
  }</div>;
};

export default TextMessage;
