import styled from "styled-components";
import Iu from "../../assets/images/image01.jpg";

function CarouselItem({ slide }) {
  const { id, url } = slide;
  return (
    <Block>
      <img src={Iu} alt="아이유" />
    </Block>
  );
}

const Block = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100vw;
  height: 100%;
  flex-shrink: 0; // 플렉스 컨테이너 요소의 공간이 부족할 때 아이템을 줄이는 비율

  font-size: 3rem;
  font-weight: 700;
`;

export default CarouselItem;
