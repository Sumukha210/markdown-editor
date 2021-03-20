import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  box-shadow: 0 0 5px silver;
  margin: 1rem auto;
  padding: 3rem 2rem;

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: mediumslateblue;
  color: white;
  padding: 0.8em 1.8em;
  border: none;
  outline: none;
  transition: background-color 0.7s ease-in-out;

  &:hover {
    background-color: blueviolet;
  }
`;

export const Extra = styled.div`
  margin: 1rem 0;
`;

export const Message = styled.h4`
  font-size: 0.9rem;
`;

export const MainMessage = styled.span`
  color: mediumslateblue;
  margin-left: 5px;
  font-size: 1rem;
  cursor: pointer;
`;
