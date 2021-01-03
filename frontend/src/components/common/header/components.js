import styled from "styled-components";

export const StyledHeader = styled.div`
    color: red;
    font-size: 50px;
    height: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 20vh;
    box-sizing: border-box;
    background-color: ${props=>props.background || 'none'};
    border-bottom: 2px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`