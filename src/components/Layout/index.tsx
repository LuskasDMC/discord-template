import React from 'react';

import {Grid} from './styles'
import ServerList from '../ServerList/index'
import ServerName from "../ServerName/index"
import ChatInfo from "../ChatInfo/index"
import ServerChannels from "../ServerChannels/index"
import UserConfig from "../UserConfiguration/index"
import ChannelChat from "../ChannelChat/index"
import ServerUsers from "../ServerUsers/index"
const Layout: React.FC = () => {
  return(
      <Grid>
          <ServerList/>
          <ServerName/>
          <ChatInfo/>
          <ServerChannels/>
          <UserConfig/>
          <ChannelChat/>
          <ServerUsers/>
      </Grid>
  )
}

export default Layout;