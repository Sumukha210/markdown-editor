import styled from "styled-components";
import { Button } from "../CustomButton";

const DropDownMenu = () => {
  return (
    <>
      <DropDown className="dropdown">
        <DropDownBtn>Rohit</DropDownBtn>
        <DropDownContent className="dropdown-content">
          <h6>Logout</h6>
        </DropDownContent>
      </DropDown>
    </>
  );
};

export default DropDownMenu;

const DropDownBtn = styled(Button)`
  padding: 0.6rem 2rem;

  @media screen and (max-width: 500px) {
    padding: 0.6rem 1.4rem;
    font-size: 0.9rem;
  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  h6 {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 1.1rem;
    font-weight: 500;

    &:hover {
      background-color: #ddd;
    }
  }
`;

const DropDown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropDownContent} {
    display: block;
  }

  &:hover ${DropDownBtn} {
    background-color: royalblue;
  }
`;
