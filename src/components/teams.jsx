/* eslint-disable no-unused-vars */
import useTeamNames from "../hooks/useTeamNames";
import Sidebar from "./sidebar";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";

const Teams = () => {
  const { loading, response: teamNames } = useTeamNames();

  if (loading === true) return <div>Loading...</div>;

  return (
    <div className="container two-column">
      <Sidebar name={teamNames} />

      {/* Nested Route */}
      <Outlet />
    </div>
  );
};

export default Teams;
