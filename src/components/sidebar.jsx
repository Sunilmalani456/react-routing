/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { slugify } from "./teampage";

const CustomLink = ({ to, children }) => {
  const location = useLocation();

  // ex: /players/stephen-curry => stephen-curry 👇
  // const playerId = location.pathname.split("/")[2]; // previous
  const split = location.pathname.split("/"); // new for articles page
  const match = split[split.length - 1] === to;
  const style = match ? { color: "var(--white)", fontWeight: 900 } : {};

  return (
    <Link
      className="flex font-bold flex-col px-1 truncate"
      style={{ ...style }}
      to={{
        pathname: to,
        search: location.search,
      }}
    >
      {children}
    </Link>
  );
};

const Sidebar = ({ name }) => {
  return (
    <div className="sidebar">
      {name.map((player, i) => (
        <CustomLink key={i} to={slugify(player)}>
          {player.toUpperCase()}
        </CustomLink>
      ))}
    </div>
  );
};

export default Sidebar;
