/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import TeamLogo from "./TeamLogo";

const Team = () => {
  const { teamId } = useParams();
  const { loading, response: team } = useTeam(teamId);

  if (loading === true) return <div>Loading...</div>;

  if (!team) return null;

  return (
    <div className="panel">
      <div style={{ width: "100%" }}>
        <TeamLogo id={team.id} className="center" />
        <h className="medium-header center">{team.name}</h>
        <ul className="info-list row">
          <li>
            EST. <div>{team.established}</div>
          </li>
          <li>
            Manager <div>{team.manager}</div>
          </li>
          <li>
            Coach <div>{team.coach}</div>
          </li>
        </ul>

        <Link className="center btn-main" to={`/${teamId}`}>
          {team.name} Team Page
        </Link>
      </div>
    </div>
  );
};

export default Team;
