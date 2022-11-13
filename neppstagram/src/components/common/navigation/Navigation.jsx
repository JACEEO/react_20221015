import styled from "styled-components";
import NavigationItem from "./NavigationItem";
import { FaHome, FaSearch, FaHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const navigation = [
  {
    id: 1,
    path: "/post",
    icon: <FaHome />,
  },
  {
    id: 2,
    path: "/edit",
    icon: <FaSearch />,
  },
  {
    id: 3,
    path: "like",
    icon: <FaHeart />,
  },
  {
    id: 4,
    path: "/profile",
    icon: <CgProfile />,
  },
];

function Navigation() {
  return (
    <Block>
      {navigation.map((menu) => (
        <NavigationItem menu={menu} />
      ))}
    </Block>
  );
}

const Block = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  height: 40px;
  background-color: #fff;

  border-top: 1px solid #bbb;
`;

export default Navigation;
