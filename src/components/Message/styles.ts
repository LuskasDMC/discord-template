import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    height:50px;
    align-items:center;
    &:hover {
        background: var(--quinary);
    }
`;

export const Avatar = styled.div`
    cursor:pointer;
    width:40px;
    height:40px;
    background-color:var(--secondary);
    border-radius:50px;
    margin-right:15px;
`
export const Content = styled.div`
    color:var(--white);
    > strong:hover { 
        cursor:pointer;
        text-decoration:underline;
    }
`

export const Date = styled.span`
    color:var(--senary);
    font-size: 13px;
    margin-left:10px;
`