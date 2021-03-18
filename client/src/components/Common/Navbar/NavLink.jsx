import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CustomLink = ({ IconName, path, name }) => {
  return (
    <Link
      activeClassName="true"
      to={path ? path : "/"}
      exact
      className="navLink">
      <IconName />
      <span>{name}</span>
    </Link>
  );
};

export default CustomLink;

const Link = styled(NavLink)`
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &.true {
    color: mediumslateblue;
  }

  svg {
    margin-right: 5px;
  }

  @media screen and (min-width: 600px) {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 20px;
  }

  @media screen and (max-width: 600px) {
    border: none;
    margin-right: 5px;

    span {
      display: none;
    }

    svg {
      font-size: 1.3rem;
    }
  }
`;
