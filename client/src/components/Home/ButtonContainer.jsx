import styled from "styled-components";
import { CustomButton } from "../Common/CustomButton";
import { FaSave } from "react-icons/fa";
import UploadFileBtn from "./UploadFileBtn";

const ButtonContainer = ({ handleSave }) => {
  return (
    <Container>
      <CustomButton name="save" btnFun={handleSave} IconName={FaSave} />

      <UploadFileBtn />
    </Container>
  );
};

export default ButtonContainer;

const Container = styled.div`
  display: flex;
`;
