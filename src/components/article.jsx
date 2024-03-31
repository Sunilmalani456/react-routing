/* eslint-disable no-unused-vars */
import useArticle from "../hooks/useArticle";
import { useParams } from "react-router-dom";
import Loading from "./loading";

const Article = () => {
  const { teamId, articleId } = useParams();
  const { loading, response: article } = useArticle({ teamId, articleId });

  return (
    <div className="panel">
      {loading === true ? (
        <Loading />
      ) : (
        <article className="article">
          <h1 className="header">{article.title}</h1>
          <p>{article.body}</p>
        </article>
      )}
    </div>
  );
};

export default Article;
