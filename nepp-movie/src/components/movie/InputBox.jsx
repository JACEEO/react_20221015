import styled from "styled-components";

function InputBox({ type, children, placeholder }) {
  return (
    <BarBlock>
      <SearchInput type={type} placeholder={placeholder} />
      {children}
    </BarBlock>
  );
}

InputBox.defaultProps = {
  type: "text",
};

const BarBlock = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 300px;
  min-width: 140px;

  padding: 5px;
  border: 1px solid black;

  border-radius: 4px;

  & + & {
    margin-top: 10px;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
export default InputBox;
