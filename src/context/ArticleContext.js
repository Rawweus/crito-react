import { createContext, useContext, useState, useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

const ArticleContext = createContext();

export const useArticles = () => useContext(ArticleContext);

export const ArticleProvider = ({ children }) => {
  const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Hämtar alla artiklar när komponenten laddas
    const getArticles = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setArticles(data);
    };

    getArticles();
  }, []);

  const getArticle = useCallback(
    async (id) => {
      try {
        const response = await fetch(`${apiUrl}/${id}`);
        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning av artikel");
        }
        const data = await response.json();
        console.log("API-svar:", data);
        return data;
      } catch (error) {
        console.error("Fel vid hämtning av artikel:", error);
      }
    },
    [apiUrl]
  );

  const value = useMemo(
    () => ({
      articles,
      getArticle,
    }),
    [articles, getArticle]
  );

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};
