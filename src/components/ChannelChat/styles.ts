import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CC;
    background: var(--primary);
`;

export const Messages = styled.div`
    height:calc(100% - 70px);
    overflow-y: scroll;
    padding-left:15px;
    &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: inset 0 0 5px var(--quaternary); 
    }
    &::-webkit-scrollbar-thumb {
        background: var(--tertiary); 
        border-radius: 10px;
    }
`

export const InputContainer = styled.div`
    height:70px;
    display:flex;
    align-items:center;
    justify-content:center;
    &::before {
        content:"@";
        position:relative;
        font-size:23px;
        color:var(--symbol);
        padding:0px 0px;
        left:0px;
        height:34px;
        line-height:1.3;
        padding-right:20px;
        padding-left:20px;
        border-radius:7px 0px 0px 7px;
        background:var(--chat-input);
    }
`

export const Input = styled.input`
    outline:none;
    border:none;
    border-radius:0px 7px 7px 0px;
    font-size:19px;
    background:var(--chat-input);
    width:85%;
    height:34px;
`
