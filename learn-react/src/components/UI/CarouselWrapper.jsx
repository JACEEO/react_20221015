import { useState } from "react";
import styled from "styled-components";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight } from "react-icons/tfi";
import { useCallback } from "react";

function CarouselWrapper({ children }) {
  const [currIdx, setCurrIdx] = useState(0);
  const changeIdx = useCallback(
    (operator) => {
      if (currIdx + operator === -1 || currIdx + operator === 3) return;
      setCurrIdx(currIdx + operator);
    },
    [currIdx]
  );

  return (
    <Block currIdx={currIdx}>
      <IconBox style={{ left: 20 }} onClick={() => changeIdx(-1)}>
        <TfiAngleDoubleLeft color="#fff" />
      </IconBox>
      <ul>{children}</ul>
      <IconBox style={{ right: 20 }} onClick={() => changeIdx(+1)}>
        <TfiAngleDoubleRight color="#fff" />
      </IconBox>
    </Block>
  );
}

const IconBox = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;

  z-index: 100;

  cursor: pointer;
`;
const Block = styled.div`
  width: 100vw;
  height: 300px;

  position: relative;

  border: 3px solid purple;
  overflow: hidden;

  ul {
    display: flex;
    height: 100%;
    transition: 400ms;
    transform: translateX(${({ currIdx }) => currIdx * -100}vw);
  }
`;

export default CarouselWrapper;
