import styled from "styled-components";

export const CustomInputText = ({
  register,
  regProps,
  name,
  errors,
  placeholder,
  type,
}) => {
  return (
    <InputGroup>
      <InputText
        type={type ? type : "text"}
        name={name}
        ref={register(regProps)}
        placeholder={placeholder ? placeholder : `Enter the ${name}`}
      />
      <ErrorMsg>{errors[name] ? errors[name].message : ""}</ErrorMsg>
    </InputGroup>
  );
};

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

export const ErrorMsg = styled.h5`
  color: red;
  text-transform: capitalize;
`;

const InputText = styled.input`
  display: block;
  width: 100%;
  height: 6.5vh;
  margin-bottom: 0.5rem;
  padding-left: 10px;
  border: none;
  outline: none;
  border: 1px solid silver;
  font-size: 1rem;

  &::placeholder {
    color: gray;
  }
`;
