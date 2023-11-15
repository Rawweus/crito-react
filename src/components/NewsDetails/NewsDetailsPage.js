import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useArticles } from "../../context/ArticleContext";

const NewsDetailsPage = () => {
  const { id } = useParams(); // Hämta id från URL:en
  const { getArticle } = useArticles(); // Hämta getArticle-funktionen från din kontext
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleResponse = await getArticle(id);
        console.log(articleResponse);
        setArticle(articleResponse);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticle();
  }, [id, getArticle]);

  if (!article) {
    console.log(id);
    return <div>Loading...</div>;
  }

  return (
    <div className="article-info">
      <h2>{article.title}</h2>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.content}</p>
      <p>Author: {article.author}</p>
      <p>Published: {article.published}</p>
      <p>Category: {article.category}</p>
    </div>
  );
};

export default NewsDetailsPage;
