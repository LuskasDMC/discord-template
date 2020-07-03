import React from 'react';

import { Container, Avatar } from './styles';

const CardUser: React.FC<{userName:string}> = (props) => {
  return (
      <Container>
          <Avatar/>
          {props.userName}
      </Container>
  );
}

export default CardUser;