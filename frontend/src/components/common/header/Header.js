import {StyledHeader, HeaderWrapper} from './components'
import NavBar from "../navbar/NavBar";
const Header = () => {
    return <HeaderWrapper >
        <StyledHeader>Nested Blog</StyledHeader>
        <NavBar />
    </HeaderWrapper>
}

export default Header;