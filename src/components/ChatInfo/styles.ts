import styled from 'styled-components';

export const Container = styled.div`
    background: var(--primary);
    grid-area:CI;  
    display:flex;
    align-items:center;
    color:var(--white);
    height:46px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    z-index:10;
    padding:0px 17px;
    > span {
        color:var(--gray);
    }
    > i {
        color:var(--symbol);
        margin-right:7px;
    }
`;

export const Separator = styled.div`
    height:24px;
    width:1px;
    margin:0px 13px;
    background:#42454B;

`
