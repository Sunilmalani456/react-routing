/* eslint-disable no-unused-vars */
import { useParams, Outlet } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Sidebar from "./sidebar";

const Articles = () => {
  const { teamId } = useParams();
  const { loading, response: articles } = useTeamsArticles(teamId);

  if (loading === true) return <div>Loading...</div>;

  return (
    <div className="container two-column">
      <Sidebar name={articles.map((article) => article.title)} />

      {/* Nested Route */}
      <Outlet />
    </div>
  );
};

export default Articles;
