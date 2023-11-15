import React from "react";
import img_backgroundLines from "../../assets/images/background-lines.svg";
import { Link } from "react-router-dom";
import { useArticles } from "../../context/ArticleContext";

const NewsPage = () => {
  const { articles } = useArticles();

  return (
    <>
      <section className="contact-page-showcase">
        <img src={img_backgroundLines} className="bg-lines" alt="wavy lines" />
        <div className="nav-links">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/news">News</Link>
        </div>
        <h1>News & Articles</h1>
      </section>
      <section className="container article-news-section mt-5">
        <div className="article-wrapper">
          {articles.map((article) => (
            <div key={article.id} className="article-column">
              <div className="image-wrapper">
                <Link to={`/newsdetails/${article.id}`}>
                  <img
                    src={article.imageUrl}
                    alt={`Beskrivning av ${article.title}`}
                    className="news-images"
                  />
                </Link>
              </div>
              <p className="grid-item">{article.category}</p>
              <h3 className="grid-item">{article.title}</h3>
              <p className="grid-item">{article.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsPage;
