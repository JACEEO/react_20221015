import { Link, useLocation } from "react-router-dom";

const navList = [
  {
    id: 1,
    name: "home",
    url: "",
  },
  {
    id: 2,
    name: "about",
    url: "about",
  },
];

function Header() {
  const { pathname } = useLocation();
  const url = pathname.split("/")[1];
  console.log(url);
  return (
    <div>
      <ul>
        {navList.map((menu) => (
          <li style={{ background: url === menu.url && "#ddd" }}>
            <Link to={menu.url}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
