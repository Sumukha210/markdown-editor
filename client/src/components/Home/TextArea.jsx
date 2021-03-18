import React from "react";
import styled from "styled-components";

const TextAreaComponent = ({ inputVal, handleTextArea }) => {
  return (
    <>
      <TextAreaContainer>
        <TextArea value={inputVal} onChange={handleTextArea} />
      </TextAreaContainer>
    </>
  );
};

export default TextAreaComponent;

const TextAreaContainer = styled.div`
  flex: 1;
`;

const TextArea = styled.textarea`
  height: 50vh;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: 0 0 2px silver;
  border: 1px solid lightgray;
  padding: 1rem;

  &:focus {
    box-shadow: 0px 0px 10px silver;
  }

  @media screen and (max-width: 600px) {
    height: 40vh;
  }
`;
