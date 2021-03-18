import { Extra, Message, MainMessage } from "./AuthStyles";

const ExtraComponent = ({ login, handleLoginSignup }) => {
  return (
    <>
      <Extra>
        <Message>
          {login ? (
            <span>
              New user?
              <MainMessage onClick={handleLoginSignup}>
                Click here to create Account
              </MainMessage>
            </span>
          ) : (
            <span>
              Already have an account?
              <MainMessage onClick={handleLoginSignup}>
                Click here to Login
              </MainMessage>
            </span>
          )}
        </Message>
      </Extra>
    </>
  );
};

export default ExtraComponent;
