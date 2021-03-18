import { useRef, useState } from "react";
import MaxContainer from "../../styles/MaxContainer";
import { Container, SubmitBtn } from "./AuthStyles";
import ExtraComponent from "./Extra";
import { useForm } from "react-hook-form";
import { emailProps, nameProps, passwordProps } from "./config";
import { CustomInputText } from "./CustomInputText";

const AuthForm = () => {
  const [login, setLogin] = useState(true);
  const { reset, register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const handleLoginSignup = () => {
    setLogin(prev => !prev);
    reset();
  };

  const onSubmit = (data, e) => {
    console.log(data);
  };

  return (
    <MaxContainer>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!login && (
            <CustomInputText
              name="name"
              register={register}
              regProps={nameProps}
              errors={errors}
            />
          )}

          <CustomInputText
            name="email"
            register={register}
            regProps={emailProps}
            errors={errors}
          />

          <CustomInputText
            name="password"
            register={register}
            regProps={passwordProps}
            errors={errors}
            type="password"
          />

          {!login && (
            <CustomInputText
              name="confirm__password"
              register={register}
              regProps={{
                ...passwordProps,
                validate: value =>
                  value === password.current || "The passwords do not match",
              }}
              errors={errors}
              type="password"
              placeholder="Confirm password"
            />
          )}

          <SubmitBtn type="submit">{login ? "Login" : "Signup"}</SubmitBtn>
        </form>

        <ExtraComponent login={login} handleLoginSignup={handleLoginSignup} />
      </Container>
    </MaxContainer>
  );
};

export default AuthForm;
