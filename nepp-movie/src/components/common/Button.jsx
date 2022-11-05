import styled from "styled-components";

function Button({ text, bgColor }) {
  return <DefaultButton bgColor={bgColor}>{text}</DefaultButton>;
}

Button.defaultProps = {
  bgColor: "black",
};

const DefaultButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 4px;

  background-color: ${({ bgColor }) => bgColor};

  cursor: pointer;
`;

export default Button;
