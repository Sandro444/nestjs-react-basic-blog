import NavBarItem from "./NavBarItem";
import {useAuth} from '../../../hooks/common/auth/useAuth'
import { NavBarItemWrapper } from "./components";

const NavBarItems = () => {
    const {logOut, data} = useAuth()
    return <>
        <NavBarItem linkTo="/index">Home</NavBarItem>
        <NavBarItem linkTo="/blogs">Blogs</NavBarItem>
        <NavBarItem linkTo="/profile"> {`${data?.getCurrentUser?.username || ''}'s`} Profile</NavBarItem>
        <NavBarItemWrapper  onClick={e=>logOut()}>
            Log Out
        </NavBarItemWrapper>
    </>
}

export default NavBarItems