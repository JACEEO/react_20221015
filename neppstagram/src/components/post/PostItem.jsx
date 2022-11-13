import styled from "styled-components";
import PostImgBox from "./PostImgBox";
import PostUser from "./PostUser";

function PostItem() {
  return (
    <Block>
      <PostUser />
      <PostImgBox />
      <ContentBox> Lorem ipsum dolor sit amet.</ContentBox>
    </Block>
  );
}

const Block = styled.div`

&+&{
  border-top: 1px solid #bbb;

}
`;

const ContentBox = styled.div`
  padding: 5px;
  font-size: 0.8rem;
`

export default PostItem;
