import styled from "styled-components";
import InputBox from "../../movie/InputBox";

import { BiLogInCircle } from "react-icons/bi";
import Button from "../../common/Button";

function Login() {
  return (
    <LoginFormBox>
      <LoginForm>
        <h3>Login</h3>
        <InputWrapper>
          <InputBox type="email" placeholder="이메일을 입력하세요.">
            <BiLogInCircle />
          </InputBox>
          <InputBox type="password" placeholder="비밀번호를 입력하세요." />
        </InputWrapper>
        <Button text="Login" />
      </LoginForm>
      {/* ctrl + d */}
    </LoginFormBox>
  );
}

const LoginFormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  h3 {
    margin-bottom: 40px;

    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 50px 10px;
  border: 2px solid black;
  border-radius: 4px;

  text-align: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

export default Login;
