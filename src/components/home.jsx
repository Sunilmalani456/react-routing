/* eslint-disable no-unused-vars */
import TeamLogo from "./TeamLogo";
import { Link } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import Loading from "./loading";

const Home = () => {
  const { loading, response } = useTeamNames();

  return (
    <div className="container">
      <h1 className="large-header">Hash History Basketball League</h1>
      <h3 className="header text-center">Select a team</h3>
      <div className="home-grid">
        {loading ? (
          <Loading />
        ) : (
          response.map((id) => (
            <Link key={id} to={`/${id}`}>
              <TeamLogo id={id} width="125px" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
