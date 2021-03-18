import styled from "styled-components";
import { AiFillFolderOpen } from "react-icons/ai";
import { CustomButton } from "../Common/CustomButton";
import { useState } from "react";

const UploadFileBtn = () => {
  const [file, setFile] = useState(null);

  const handleChange = e => {};

  return (
    <>
      <UploadBtnWrapper>
        <CustomButton name="open file" IconName={AiFillFolderOpen} />
        <InputFile type="file" name="fileUpload" onChange={handleChange} />
      </UploadBtnWrapper>
    </>
  );
};

export default UploadFileBtn;

const UploadBtnWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-left: 10px;
`;

const InputFile = styled.input`
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`;
