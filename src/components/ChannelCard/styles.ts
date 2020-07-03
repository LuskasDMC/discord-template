import styled from 'styled-components';

export const Container = styled.div<{isSelected:boolean}>`
    background:${props => props.isSelected ? "rgba(24, 22, 25, 0.5)" : "var(--secondary)"};
    padding: 0px 5px;
    border-radius:5px;
    height: 32px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    &:hover{
        & span:nth-child(1) {
            color:var(--white);
        }
    }
    & i {
        cursor:pointer;
        color:var(--symbol);
    }
    & span:nth-child(1) {
        font-size:15px;
        cursor:pointer;
        color:${props => props.isSelected ? "var(--white)" : "var(--symbol)"};
        & i {
            margin-right:7px;
        }
    }
    & span:nth-child(2) {
        & i:nth-child(1){
            margin-right:6px;
        }
    }

`;
