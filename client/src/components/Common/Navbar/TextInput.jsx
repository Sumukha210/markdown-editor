import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CHANGE__FILENAME } from "../../../Redux/InputData";

const TextInput = () => {
  const fileName = useSelector(({ inputData: { fileName } }) => fileName);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fileName.length <= 15 && setInputVal(fileName);
  }, [fileName]);

  const handleChange = e => {
    const currentVal = e.target.value;
    if (currentVal.length <= 15) {
      setInputVal(currentVal);
      dispatch(CHANGE__FILENAME(currentVal));
    }
  };

  return (
    <InputText
      className="textInput"
      type="text"
      value={inputVal}
      onChange={handleChange}
    />
  );
};

export default TextInput;

const InputText = styled.input`
  border: none !important;
  outline: none !important;
  height: 6vh;
  width: 30%;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 5px silver;
  font-size: 1.1rem;
  padding-left: 5px;

  @media screen and (max-width: 800px) {
    position: absolute;
    top: 10vh;
    width: 90%;
  }

  &:focus {
    box-shadow: 0px 0px 10px silver;
  }
`;
