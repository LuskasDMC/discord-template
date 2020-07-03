import styled from 'styled-components';

interface IServerIcon{
    hasMention?:boolean;
    hasMessage?: boolean;
    isHome?:boolean;
    qty?:number;
}

export const Container = styled.div`
    flex-flow: column nowrap;
    grid-area: SL;
    display:flex;
    align-items:center;
    background-color:var(--tertiary);
    overflow-y: scroll;
    max-height:100vh;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ServerIcon = styled.div<IServerIcon>`
    cursor:pointer;
    margin:5px 0px;
    flex-shrink:0;
    background:${props => props.isHome ? "var(--discord)" :  "var(--primary)"};
    border-radius:${props => props.isHome ?  "10px" : "50px"};
    width:48px;
    height:48px;
    position:relative;
    &:hover{
        border-radius:10px;
        background:var(--discord);
    }
    &::before {
        content:'';
        width:9px;
        height:9px;
        background:var(--white);
        position:absolute;
        border-radius:50px;
        top:50%;
        left:-17px;
        display:${props => props.hasMessage ? "block" : "none"};
        transform: translate(0,-50%)
    }
    &::after{
        content:"${props => props.qty}";
        width:16px;
        height:16px;
        font-size:9px;
        color:var(--white);
        line-height:1.7;
        border:5px solid var(--tertiary);
        font-weight:bold;
        text-align:center;
        background:var(--notification);
        position:absolute;
        border-radius:50px;
        bottom:-7px;
        right:-7px;
        display:${props => props.hasMention ? "block" : "none"};
    }
    &:active {
        top:2px;
    }
`
export const Separator = styled.div`
    height: 2px;
    width: 32px;
    background:var(--quinary);
    flex-shrink:0;
`