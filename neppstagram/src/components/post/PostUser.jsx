import styled from "styled-components";

function PostUser() {
  return (
    <Block>
      <ImgCircle>
        <img
          src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90"
          alt="iu"
        />
      </ImgCircle>
      IU
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 0.8rem;
`;

const ImgCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  margin-right: 10px;

  border-radius: 50%;
  overflow: hidden;

  img {
    height: 150%;
  }
`;

export default PostUser;
