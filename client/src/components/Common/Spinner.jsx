import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return (
    <Container>
      <LoadingSpinner></LoadingSpinner>
    </Container>
  );
};

export default Spinner;

const SpinnerAnimation = keyframes`
 to {
      transform: rotate(360deg);
    }
`;

const LoadingSpinner = styled.button`
  height: 50px;
  width: 50px;
  background: #e5e5e5;
  border-radius: 50%;
  border-top: 4px solid mediumslateblue;
  border-right: 4px solid transparent;
  border-bottom: none;
  border-left: none;
  animation: ${SpinnerAnimation} 700ms linear infinite;
`;

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
