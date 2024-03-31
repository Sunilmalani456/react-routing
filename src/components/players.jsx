/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import Sidebar from "./sidebar";

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
      <div className="w-full max-w-2xl flex">
        <Sidebar name={name} />
        <div className="w-full flex flex-col items-center px-4">
          {/* Nested Route */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Players;
