import React from 'react';

import { Container, Separator } from './styles';

const ChatInfo: React.FC = () => {
  return (
    <Container>
      <i className="fas fa-hashtag"/>
      chat-free
      <Separator/>
      <span>
        Channel open for talking
      </span>
    </Container>
  )
}

export default ChatInfo;