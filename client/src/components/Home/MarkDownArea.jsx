import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const MarkdownComponent = ({ inputVal }) => {
  return (
    <>
      <MarkdownContainer>
        {inputVal.length ? (
          <ReactMarkdown>{inputVal}</ReactMarkdown>
        ) : (
          <Preview>Markdown Previewer</Preview>
        )}
      </MarkdownContainer>
    </>
  );
};

export default MarkdownComponent;

const Preview = styled.h2`
  text-align: center;
  color: silver;
  font-weight: 300;
`;

const MarkdownContainer = styled.div`
  padding: 1rem;
  overflow-x: auto;
`;
