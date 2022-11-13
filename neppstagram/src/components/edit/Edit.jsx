import { useState } from "react";
import { postEdit } from "../../api";
import UploadImage from "./UploasdImage";

function Edit() {
  const [inputs, setInputs] = useState({
    body: "",
    images: {},
  });

  const onChangeImages = (files) => {
    setInputs({
      ...inputs,
      images: files,
    });
  };
  const handleInput = (e) => {
    setInputs({
      ...inputs,
      body: e.target.value,
    });
  };
  const handleSubmit = () => {
    const form = new FormData();
    for (let i = 0; i < inputs.images.lenghth; i++) {
      form.append("images", inputs.images[i]);
    }

    form.append("body", inputs.body);

    postEdit(inputs.body, form).then((res) => console.log(res));
  };

  return (
    <div>
      <UploadImage onChangeImages={onChangeImages} />
      <input type="text" onChange={handleInput} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}
export default Edit;
