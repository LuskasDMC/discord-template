import React from 'react';

import { Container, Avatar, Content, Date } from './styles';

interface IProps {
    user?:string;
    date?:string;
    content:string;
}

const Message: React.FC<IProps> = (props) => {
  return( 
    <Container>
        <Avatar/>
        <Content>
            <strong>{props.user}</strong><Date>{props.date}</Date><br/>
            {props.content}
        </Content>
    </Container>
  )
}

export default Message;