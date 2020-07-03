import styled from 'styled-components';

export const Container = styled.div`
    background-color:var(--secondary);
    grid-area:SN;
    display:flex;
    align-items:center;
    font-weight:bold;
    font-size:16px;
    padding:0px 16px;
    justify-content:space-between;
    color:var(--white);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    z-index:5;
    > i{
        cursor:pointer;
    }
`;
