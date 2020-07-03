import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  color:var(--white);
  font-size: 15px; 
  padding:5px 5px;
  border-radius:5px;
  cursor:pointer;
  &:hover {
      background:var(--quinary)
  }
`;

export const Avatar = styled.div`
    width:32px;
    height:32px;
    background:var(--primary);
    border-radius:50px;
    margin-right:10px;
`
