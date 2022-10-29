import styled from "styled-components";
import AccordianItem from "./AccordianItem";

const menuList = [
  {
    id: 1,
    name: "react",
    content:
      "Maxime iste debitis adipisci, ratione, officiis vero pariatur veniam animi vel doloribus odit, consequatur harum obcaecati ad unde et fugit sequi illum?",
  },
  {
    id: 2,
    name: "accordian",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    name: "react ui",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet.",
  },
];

function Accordian() {
  return (
    <Block>
      <h1>Accordian</h1>
      <ul>
        {menuList.map((menu) => (
          <AccordianItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </Block>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 20px;
  background: #f7f7f7;

  ul {
    border: 3px solid #ddd;
    border-radius: 8px;
    width: 500px;
  }
`;

export default Accordian;
