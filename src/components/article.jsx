/* eslint-disable no-unused-vars */
import useArticle from "../hooks/useArticle";
import { useParams, Navigate } from "react-router-dom";
import Loading from "./loading";

const Article = () => {
  const { teamId, articleId } = useParams();
  const { loading, response: article } = useArticle({ teamId, articleId });

  let body;

  if (loading === true) {
    body = <Loading />;
  } else if (article === null) {
    body = <Navigate to={`/${teamId}/articles`} />;
  } else {
    body = (
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    );
  }

  return <div className="panel">{body}</div>;
};

export default Article;
