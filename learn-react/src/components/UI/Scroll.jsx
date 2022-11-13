import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { todoState, undoneCount } from "../../state/todos";

function Scroll() {
  const [todos, setTodos] = useRecoilState(todoState);
  console.log(todos);

  const count = useRecoilValue(undoneCount);
  console.log(count);

  const [scrollAmount, setScrollAmount] = useState(0);
  const [firstTop, setFirstTop] = useState(0);
  const [imgTop, setImgTop] = useState(0);

  const handleScroll = () => {
    setScrollAmount(window.scrollY);
    setFirstTop(firstRef.current.getBoundingClientRect().top);
    setImgTop(imgTop.current.getBoundingClientRect().top);
  };

  const imgRef = useRef(null);
  const firstRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <h1>Scroll</h1>
      <ImgBox imgTop={imgTop} ref={imgRef} />
      <p
        style={{
          marginTop: 100,
          transform: `translateX(calc(${firstTop}px))`,
        }}
        ref={firstRef}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis
        quisquam odio. Dolorum sed molestias laboriosam dolores! Vero magni
        doloremque minima cumque! Consectetur error enim natus, delectus
        veritatis deleniti harum consequatur corporis exercitationem provident
        pariatur quidem deserunt vel nisi atque quibusdam sit omnis facilis
        sequi, modi saepe ipsum alias? Quia.
      </p>
      <p
        style={{
          marginTop: 50,
          transform: `translateX(calc(${-firstTop}px))`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        minima perferendis optio architecto accusantium ex iste repudiandae eius
        natus repellendus in magni, quis corporis accusamus, dolor pariatur est
        quam, rerum temporibus tempore. Reiciendis nostrum quis alias soluta
        fugiat est iure accusamus, doloribus aspernatur commodi a placeat eaque
        ut voluptates dolor!
      </p>
    </div>
  );
}

const ImgBox = styled.div`
  margin-top: 600px;
  height: 600px;
  background-color: #eee;
  background: url(${require("../../assets/images/image02.jpg")}) top / cover
    no-repeat;

  ${({ imgTop }) => css`
    background-position: center ${imgTop < 600 ? 0 : imgTop - 600}px;
  `}
`;

export default Scroll;
