import styled from 'styled-components';

export const Container = styled.div`
  background: var(--quaternary);
  padding:0px 10px;
  height: 52px;
  display:flex;
  align-items:center;
  grid-area: UC;
`;

export const UserProfile = styled.div`
    width:32px;
    height:32px;
    border-radius:50px;
    background:var(--white);
    position:relative;
    &::after{
        content:"-";
        width:10px;
        height:10px;
        border-radius:5px;
        text-align:center;
        line-height:.45;
        font-weight:bold;
        font-size:20px;
        color:var(--quaternary);
        background-color:var(--notification);
        position:absolute;
        bottom:0px;
        right:0px;
        z-index:10;
    }
`
export const UserID = styled.div`
    width:120px;
    padding-left:10px;
    color:var(--gray);
    & span:nth-child(1) {
        color:var(--white);
        font-weight:bold;
    }
    
`

export const Tools = styled.div`
    width:60px;
    display:flex;
    justify-content:space-between;
    & i {
        cursor:pointer;
        color:var(--senary);
        &:hover {
            color:var(--white);
        }
    }
`
