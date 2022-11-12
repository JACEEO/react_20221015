import { useEffect, useState } from "react";
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

  const [isEmpty, setIsEmpty] = useState(true);
  const disabled = isEmpty || inputs.password !== inputs.confirmPass;

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

  return (
    <>
      <Title title="Signin" />
      <Form margin="20px 0">
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
          name="password"
          onChange={handleInput}
        />
        <Input
          placeholder="비밀번호를 확인해주세요"
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
