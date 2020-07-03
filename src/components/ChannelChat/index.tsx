import React from 'react';

import { Container, Messages,InputContainer, Input } from './styles';
import Message from "../Message/index"

const DEFAULT_MESSAGE = {
  user: "Anonymous",
  date: "06/06/6666",
  content: "errat hoc systema, ratio errorem ego sum"
}

const messageGenerator = () => {
  let messages = []

  for(let i = 0; i < 20; i++){
    messages.push(<Message {...DEFAULT_MESSAGE}/>)
  }

  return messages
}


const ChannelChat: React.FC = () => {
  return (
      <Container>
          <Messages>
            {messageGenerator().map(el=> el)}
          </Messages>
          <InputContainer>
            <Input type="text" placeholder="Write here."/>
          </InputContainer>
      </Container>
  );
}

export default ChannelChat;