/* eslint-disable no-unused-vars */
import useArticle from "../hooks/useArticle";
import { useParams } from "react-router-dom";

const Article = () => {
  const { teamId, articleId } = useParams();
  const { loading, response: article } = useArticle({ teamId, articleId });

  if (loading === true) return <div>Loading...</div>;

  return (
    <div className="panel">
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
};

export default Article;
