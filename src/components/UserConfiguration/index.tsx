import React from 'react';

import { Container, UserProfile, UserID, Tools } from './styles';

const UserConfiguration: React.FC = () => {
  return (
      <Container>
            <UserProfile>
                
            </UserProfile>
            <UserID>
                <span>Chaos Code</span><br/>
                <span>#6666</span>
            </UserID>
            <Tools>
                <i className="fas fa-microphone"/>
                <i className="fas fa-headset"/>
                <i className="fas fa-cog"/>
            </Tools>
      </Container>
  );
}

export default UserConfiguration;