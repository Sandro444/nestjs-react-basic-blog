import {Link} from "react-router-dom"

import { NavBarItemWrapper } from "./components";

const NavBarItem = (props) => {
    return <Link to={props.linkTo}>
        <NavBarItemWrapper>
            {props.children}
        </NavBarItemWrapper>
    </Link>
}

export default NavBarItem