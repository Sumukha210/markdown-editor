import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE__FILENAME, CHANGE__INPUTDATA } from "../../Redux/InputData";
import { Container, Content } from "./HomeStyles";
import MaxContainer from "../../styles/MaxContainer";
import TextAreaComponent from "./TextArea";
import MarkdownComponent from "./MarkDownArea";
import useAlert from "../CustomHooks/useAlert";
import ButtonContainer from "./ButtonContainer";

const Home = () => {
  const { inputData } = useSelector(({ inputData }) => inputData);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState(inputData);
  const [, setShowAlert, Alert] = useAlert();
  const isAuthenticated = false;

  const handleTextArea = e => {
    const currentValue = e.target.value;
    setInputVal(currentValue);
    dispatch(CHANGE__INPUTDATA(currentValue));
    dispatch(CHANGE__FILENAME(currentValue));
  };

  const handleSave = () => {
    if (isAuthenticated) {
      console.log("you are file is saved");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <MaxContainer>
      <Alert danger message="Please login to save file" />
      <Container>
        <ButtonContainer handleSave={handleSave} />
        <Content>
          <TextAreaComponent
            inputVal={inputVal}
            handleTextArea={handleTextArea}
          />

          <MarkdownComponent inputVal={inputVal} />
        </Content>
      </Container>
    </MaxContainer>
  );
};

export default Home;
