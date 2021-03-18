import React from "react";
import styled from "styled-components";
import MaxWidthContainer from "../../styles/MaxContainer";

function Info() {
  return (
    <MaxWidthContainer>
      <Container>
        <IFrame
          src="/md.pdf"
          type="application/pdf"
          title="title"
          scrolling="auto"
        />
      </Container>
    </MaxWidthContainer>
  );
}

export default Info;

const Container = styled.div`
  width: 100%;
  height: 88vh;
  margin-top: 1rem;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;
