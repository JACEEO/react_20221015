import styled, { keyframes } from "styled-components";

function Modal({ header, content, setModalOn }) {
  return (
    <Block>
      <Header>{header} </Header>
      <Content>{content}</Content>
      <BtnClose onClick={() => setModalOn(false)}>Close</BtnClose>
    </Block>
  );
}
const slideOut = keyframes`
    from{
        transform: translateY(20px);
    }
`;

const fadeIn = keyframes`
    
    from{
        opacity: 0;
    }
`;
const Block = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 4px;

  background-color: #ffffff;
  position: absolute;

  animation: ${slideOut} 1s, ${fadeIn} 1s;
`;

const Header = styled.h3`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const Content = styled.p`
  padding: 10px;
`;

const BtnClose = styled.button`
  border: none;
  outline: none;

  padding: 10px 20px;
  border-radius: 4px;

  background: #ccc;
  font-weight: 700;

  color: #fff;

  position: absolute;
  right: 10px;
  bottom: 10px;

  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #bbb;
  }
`;

export default Modal;
