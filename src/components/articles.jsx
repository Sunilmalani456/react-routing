/* eslint-disable no-unused-vars */
import { useParams, Outlet } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Sidebar from "./sidebar";
import Loading from "./loading";

const Articles = () => {
  const { teamId } = useParams();
  const { loading, response: articles } = useTeamsArticles(teamId);

  if (loading === true) return <Loading />;

  return (
    <div className="container two-column">
      <Sidebar name={articles.map((article) => article.title)} />

      {/* Nested Route */}
      <Outlet />
    </div>
  );
};

export default Articles;
