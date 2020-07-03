import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    grid-area: SU;
    flex-flow: column nowrap;
    padding:10px;
    background:var(--secondary);
    overflow-y:scroll;
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
`;

export const Category = styled.p`
    font-size: 12px;
    color:var(--gray);
`
