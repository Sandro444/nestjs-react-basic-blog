import styled from 'styled-components'

export const NavBarWrapper = styled.nav`
    width: 50%;
    display:flex;
    justify-content: center;
    margin: 0 auto;
    align-self: flex-end;
    height: fit-content;
    box-sizing: border-box;
`

export const NavBarItemWrapper = styled.div`
    display: inline-block;
    width: 60px;
    height: fit-content;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
    color: red;
    cursor: pointer;
    &:hover {
        background-color: blue;
        color: white;
    }
`