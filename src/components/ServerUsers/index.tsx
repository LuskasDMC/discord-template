import React from 'react';

import { Container,Category } from './styles';
import CardUser from "../CardUser/index"

const userGenerator = () => {
    let users = []

    for(let i = 1; i < 20; i++){
        users.push(<CardUser userName={`Anonymous${i}`}/>)
    }
    
    return users
}

const ServerUsers: React.FC = () => {
  return (
      <Container>
          <Category>AVAILABLE - 2</Category>
          <CardUser userName="Anonymous"/>
          <CardUser userName="Anonymous"/>
          <Category>OFFLINE - {userGenerator().length}</Category>
          {userGenerator().map(el=>el)}
      </Container>
  );
}

export default ServerUsers;