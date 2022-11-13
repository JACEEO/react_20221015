import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../api";
import { Button, Redbutton } from "../common/buttons";
import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";

function SigninForm() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const { username, password, email, confirmPass } = inputs;
  const [isEmpty, setIsEmpty] = useState(true);
  const disabled = isEmpty || password !== confirmPass;
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    for (let value of Object.values(inputs)) {
      if (value.length < 1) {
        setIsEmpty(true);
        return;
      }
    }
    setIsEmpty(false);
  }, [inputs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    postSignUp(username, email, password).then(() => {
      alert("회원가입에 성공하였습니다");
      navigate("/accounts/login");
    });
  };

  return (
    <>
      <Title title="Signin" />
      <Form margin="20px 0" onSubmit={handleSubmit}>
        <Input
          placeholder="이름을 입력하세요"
          name="username"
          onChange={handleInput}
        />
        <Input
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          type="password"
          name="password"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 확인해주세요"
          type="password"
          name="confirmPass"
          onChange={handleInput}
        />

        <div style={{ marginTop: 50 }}>
          <Redbutton style={{ marginTop: "5px" }} disabled={disabled}>
            Signin
          </Redbutton>
        </div>
      </Form>
    </>
  );
}

export default SigninForm;
