import styled from "styled-components";

export const CustomButton = ({ IconName, name, btnFun }) => {
  const handleClick = () => (btnFun ? btnFun() : null);

  return (
    <Button onClick={handleClick}>
      {IconName ? <IconName /> : []}
      <span>{name && name}</span>
    </Button>
  );
};

export const Button = styled.button`
  background-color: mediumslateblue;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.7em 1.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  outline: none;
  text-transform: capitalize;
  transition: background-color 0.5s ease-in-out;

  svg {
    font-size: 1.4rem;
    margin-right: 5px;
  }

  @media screen and (max-width: 500px) {
    padding: 0.6rem 1.4rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: blueviolet;
  }
`;
