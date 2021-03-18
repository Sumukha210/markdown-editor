import { CustomButton } from "../CustomButton";
import { Nav, NavContainer, RightContainer, NavBrand } from "./NavStyles";
import TextInput from "./TextInput";
import { ImInfo, ImBookmarks } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import MaxContainer from "../../../styles/MaxContainer";
import NavLink from "./NavLink";
import { useHistory, useLocation } from "react-router";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const isAuthenticated = false;
  const history = useHistory();
  const { pathname } = useLocation();
  const handleLogin = () => history.push("/authForm");

  return (
    <Nav className="nav">
      <MaxContainer>
        <NavContainer className="navContainer">
          <NavBrand onClick={() => history.push("/")}>MDE</NavBrand>
          {pathname === "/" && <TextInput />}
          <RightContainer className="rightContainer">
            {LinkInfo.map(({ IconName, path, name }) => (
              <NavLink key={path} IconName={IconName} path={path} name={name} />
            ))}

            {isAuthenticated ? (
              <DropDownMenu />
            ) : (
              <CustomButton name="Login" btnFun={handleLogin} />
            )}
          </RightContainer>
        </NavContainer>
      </MaxContainer>
    </Nav>
  );
};

export default Navbar;

const LinkInfo = [
  {
    IconName: AiFillHome,
    path: "/",
    name: "home",
  },
  {
    IconName: ImInfo,
    path: "/info",
    name: "info",
  },
  {
    IconName: ImBookmarks,
    path: "/collection",
    name: "Collections",
  },
];
