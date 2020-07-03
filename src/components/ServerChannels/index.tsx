import React, { useState } from 'react';

import { Container } from './styles';
import ChannelCard from "../ChannelCard/index"

const CARD_TITLE = [
  "chat-free",
  "work",
  "games",
  "friends",
  "family"
]

const ServerChannels: React.FC = () => {
  const [cardSelected,setCardSelected] = useState(-1)

  function handleClickCard(index:number){
    return () => {
      setCardSelected(index)
    }
  }

  return (
    <Container>
        <div><span>CANAIS DE TEXTO</span><i className="fas fa-plus"/></div>
        {CARD_TITLE.map((el,index)=>{
          const isSelected = cardSelected == index
          return (
            <>
              <ChannelCard 
                key={index} 
                title={el} 
                id={index}
                isSelected={isSelected} 
                handleClick={handleClickCard}
              />
            </>
          )
        })}
    </Container>  
  );
}

export default ServerChannels;