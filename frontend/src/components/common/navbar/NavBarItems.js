import { useMemo } from "react";
import NavBarItem from "./NavBarItem";
import { useAuth } from "../../../hooks";
import { NavBarItemWrapper } from "./components";

const NavBarItems = () => {
  const { logOut, data } = useAuth();

  const renderNavbarItems = useMemo(() => {
    return (
      <>
        <NavBarItem linkTo="/index">Home</NavBarItem>
        <NavBarItem linkTo="/blogs">Blogs</NavBarItem>
        {["administrator", "publisher"].includes(
          data?.getCurrentUser?.role?.name
        ) && <NavBarItem linkTo="/create-blog">Create Blog</NavBarItem>}
        {["administrator"].includes(data?.getCurrentUser?.role?.name) && (
          <NavBarItem linkTo="/users">Users</NavBarItem>
        )}
        <NavBarItem linkTo="/profile">
          {`${data?.getCurrentUser?.username || ""}'s`} Profile
        </NavBarItem>
        <NavBarItemWrapper onClick={(e) => logOut()}>Log Out</NavBarItemWrapper>
      </>
    );
  }, [data]);

  return renderNavbarItems;
};

export default NavBarItems;
