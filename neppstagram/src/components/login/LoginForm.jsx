import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postSignIn } from "../../api";
import { Button, Redbutton } from "../common/buttons";
import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSignIn(email, password).then(() => {
      navigate("/post");
    });
  };

  return (
    <>
      <Title title="Login" />
      <Form margin="20px 0" onSubmit={handleSubmit}>
        <Input
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 입력하세요"
          name="password"
          type="password"
          onChange={handleInput}
        />
        <div style={{ marginTop: 50 }}>
          <Button>Login</Button>

          <Redbutton>
            <Link to="/accounts/signin">Signin</Link>
          </Redbutton>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
