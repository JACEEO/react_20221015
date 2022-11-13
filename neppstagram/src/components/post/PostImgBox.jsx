import styled from "styled-components";

function PostImgBox() {
  return (
    <Block>
      <ImgList>
        <li>
          <img
            src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90"
            alt="iu"
          ></img>
        </li>
      </ImgList>
    </Block>
  );
}



const Block = styled.div`
  height: 200px;
  overflow: hidden;
`;

const ImgList = styled.ul`
  display: flex;

  li {
    height: 100%;
    img {
      height: 100%;
    }
  }
`;

export default PostImgBox;
