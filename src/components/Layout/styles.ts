import styled from 'styled-components';

export const Grid = styled.div`
    display:grid;
    grid-template-columns: 71px 240px calc(100vw - 551px) 240px;
    grid-template-rows: 46px calc(100vh - 99px)  53px;
    grid-template-areas: 'SL SN CI CI'
                         'SL SC CC SU'
                         'SL UC CC SU';
    height:100vh;
    width:100vw;    
`;
