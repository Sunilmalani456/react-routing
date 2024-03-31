/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link, useParams } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import useTeamsArticles from "../hooks/useTeamsArticles";
import useTeam from "../hooks/useTeam";
import TeamLogo from "./TeamLogo";
import Loading from "./loading";

function useTeamPageData(teamId) {
  const { response: teamNames, loading: LoadingTeamNames } = useTeamNames();
  const { response: articles, loading: LoadingArticles } =
    useTeamsArticles(teamId);
  const { response: team, loading: LoadingTeam } = useTeam(teamId);
  return {
    teamNames,
    articles,
    team,
    Loading: LoadingTeamNames || LoadingArticles || LoadingTeam,
  };
}

function Deatils({ head, body }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl sm:text-4xl font-bold">{head}</h2>
      <p className="text-2xl text-[#f4f73e] sm:text-2xl">{body}</p>
    </div>
  );
}

export const slugify = (title) => {
  // ex : "Hello World?" => "hello-world?"
  return title.toLowerCase().split(" ").join("-");
};

const TeamPage = () => {
  const { teamId } = useParams();
  const {
    teamNames,
    articles,
    team,
    Loading: loading,
  } = useTeamPageData(teamId);

  // console.log({ teamNames, articles, team, Loading });

  if (loading === true) {
    return <Loading />;
  }

  if (!teamNames.includes(teamId)) {
    return (
      <h1 className="text-center">This {teamId} does not a valid team.</h1>
    );
  }

  return (
    <div className="flex flex-col items-center pt-14">
      <TeamLogo id={teamId} />
      <h1 className="text-6xl font-bold pt-7">{team.name}</h1>
      <Link
        to={{ pathname: "/players", search: `?teamId=${teamId}` }}
        className="text-xl font-semibold pt-8"
      >
        View Roster
      </Link>
      <h2 className="text-xl font-semibold pt-8">Championships</h2>
      <div className="flex flex-wrap justify-center p-3 gap-3 pt-5">
        {team.championships.map((championship) => (
          <p className="text-xl" key={championship}>
            {championship}
          </p>
        ))}
      </div>

      <div className="w-full flex justify-around max-sm:flex-col max-sm:items-center max-sm:gap-8 py-7">
        <Deatils head="Established" body={team.established} />
        <Deatils head="Manager" body={team.manager} />
        <Deatils head="Coach" body={team.coach} />
        <Deatils head="Record" body={`${team.wins} - ${team.losses}`} />
      </div>

      <h2 className="text-2xl font-semibold pt-8">Articles</h2>
      <div className="flex flex-col items-start gap-3 py-5">
        {articles.map((article) => (
          <div key={article.id}>
            <Link
              to={`/${teamId}/articles/${slugify(article.title)}`}
              className="text-2xl"
            >
              <p>{article.title}</p>
            </Link>
            <p>{new Date(article.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
