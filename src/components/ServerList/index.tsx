import React from 'react';

import hackIcon from '../../assets/hacker-icon.png'
import { Container, ServerIcon, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerIcon isHome hasMention onMouseOver={()=>console.log('kkk')}>
            <img src={hackIcon} width="100%" height="100%" alt=""/>
          </ServerIcon>
          <Separator/>
          <ServerIcon  />
          <ServerIcon hasMessage/>
          <ServerIcon hasMention qty={4}/>
          <ServerIcon/>
          <ServerIcon/>
          <ServerIcon/>
          <ServerIcon/>
          <ServerIcon/>
          <ServerIcon hasMention qty={10}/>
          <ServerIcon/>
          <ServerIcon/>
          <ServerIcon hasMention hasMessage qty={32}/>
          <ServerIcon/>
          <ServerIcon/>
          <ServerIcon/>
          <ServerIcon/>
      </Container>
  )
}

export default ServerList;