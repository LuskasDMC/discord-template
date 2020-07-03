import React from 'react';

import { Container } from './styles';

interface IProps{
    title:string;
    id:number;
    isSelected:boolean;
    handleClick: (index:number) => () => void;
}

const ChannelCard: React.FC<IProps> = (props) => {
  return (
      <Container onClick={props.handleClick(props.id)} isSelected={props.isSelected}>
          <span>
            <i className="fas fa-hashtag fa-lg"/>
            {props.title}
          </span>
          <span>
            <i className="fas fa-user-plus"/>
            <i className="fas fa-cog"/>
          </span>
      </Container>
  );
}

export default ChannelCard;