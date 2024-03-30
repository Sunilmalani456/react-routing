/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useLocation, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "./teampage";
import { useEffect, useState } from "react";

const CustomLink = ({ to, children }) => {
  const location = useLocation();

  // ex: /players/stephen-curry => stephen-curry 👇
  const playerId = location.pathname.split("/")[2];
  const match = playerId === to;
  const style = match ? { color: "var(--white)", fontWeight: 900 } : {};

  return (
    <Link
      className="flex font-bold flex-col px-1"
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
      <h3 className="pb-3 text-3xl font-bold px-1">Players</h3>
      {name.map((player, i) => (
        <CustomLink key={i} to={slugify(player)}>
          {player.toUpperCase()}
        </CustomLink>
      ))}
    </div>
  );
};

const Players = () => {
  const location = useLocation(); // mean current location
  const query = location.search; // mean current search query
  const [searchParams] = useSearchParams(query); // mean current search params
  const [team, setTeam] = useState(searchParams.get("teamId"));
  // console.log({ location, searchParams });

  useEffect(() => {
    if (location.search === "") {
      searchParams.delete("teamId");
      setTeam(null);
    } else {
      setTeam(searchParams.get("teamId"));
    }
  }, [searchParams, location.search]); // mean useStates and useEffect are both dependent on searchParams and location.search values to run again when they change 👇

  const { loading, response: name } = usePlayerNames(team);

  if (loading === true) return <div>Loading...</div>;

  return (
    <div className="flex w-full justify-center pt-7">
      <div className="w-full max-w-xl flex">
        <Sidebar name={name} />
        <div>jasgaj</div>
      </div>
    </div>
  );
};

export default Players;
