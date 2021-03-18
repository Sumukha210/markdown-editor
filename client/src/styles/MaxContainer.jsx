import styled from "styled-components";

const MaxContainer = ({ children }) => {
  return <Container className="maxContainer">{children}</Container>;
};

export default MaxContainer;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;
