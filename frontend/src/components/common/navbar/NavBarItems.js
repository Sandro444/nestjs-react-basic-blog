import NavBarItem from "./NavBarItem";
import {useAuth} from '../../../hooks/common/auth/useAuth'
import { NavBarItemWrapper } from "./components";

const NavBarItems = () => {
    const {logOut} = useAuth()
    return <>
        <NavBarItem linkTo="/index">Home</NavBarItem>
        <NavBarItem linkTo="/blogs">Blogs</NavBarItem>
        <NavBarItemWrapper  onClick={e=>logOut()}>
            Log Out
        </NavBarItemWrapper>
    </>
}

export default NavBarItems