import React, { useEffect, useState } from "react";
import styled from "styled-components";

const useAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  const Alert = ({ message, ...rest }) => {
    return (
      <AlertBox show={showAlert ? true : false} {...rest}>
        <Container>
          <Message>{message && message}</Message>
        </Container>
      </AlertBox>
    );
  };

  return [showAlert, setShowAlert, Alert];
};

export default useAlert;

const AlertBox = styled.div`
  background-color: ${props => (props.danger === true ? "red" : " #38c86d")};
  box-shadow: 0 0 10px silver;
  position: absolute;
  top: ${props => (props.show === true ? "10vh" : "-100vh")};
  left: 0;
  right: 0;
  width: 90vw;
  margin: auto;
  transition: all 1s ease-in-out;
  z-index: 10;

  @media screen and (min-width: 800px) {
    width: 600px;
  }
`;

const Container = styled.div`
  padding: 1.5rem 1rem;
`;

const Message = styled.div`
  text-align: center;
  color: white;
  font-size: 1rem;
  font-weight: 700;
`;
