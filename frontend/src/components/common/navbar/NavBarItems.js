import NavBarItem from "./NavBarItem";
import { useAuth } from "../../../hooks";
import { NavBarItemWrapper } from "./components";

const NavBarItems = () => {
  const { logOut, data } = useAuth();

  return (
    <>
      <NavBarItem linkTo="/index">Home</NavBarItem>
      <NavBarItem linkTo="/blogs">Blogs</NavBarItem>
      {["administrator", "publisher"].includes(
        data?.getCurrentUser?.role?.name
      ) && <NavBarItem linkTo="/create-blog">Create Blog</NavBarItem>}
      <NavBarItem linkTo="/profile">
        {`${data?.getCurrentUser?.username || ""}'s`} Profile
      </NavBarItem>
      <NavBarItemWrapper onClick={(e) => logOut()}>Log Out</NavBarItemWrapper>
    </>
  );
};

export default NavBarItems;
