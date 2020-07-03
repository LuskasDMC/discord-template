import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SC;
  flex-flow:column nowrap;
  display:flex;
  align-items:stretch;
  background:var(--secondary);
  padding:20px 10px;
  > div {
    display:flex;
    justify-content:space-between;
    color:var(--symbol);
    font-size:12px;
    padding-bottom:15px;
    & i {
      cursor:pointer;
    }
  }
`;



