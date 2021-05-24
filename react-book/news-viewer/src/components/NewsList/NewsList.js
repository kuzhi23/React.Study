import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewItem from "../NewsItem/NewItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [article, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(category);
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0c2f9d5ec335428daeef05dcc55fc10a`
        );
        console.log(response.data.articles);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중 ....</NewsListBlock>;
  }

  if (!article) {
    return null;
  }

  return (
    <NewsListBlock>
      {article.map((article) => {
        return <NewItem key={article.url} article={article} />;
      })}
    </NewsListBlock>
  );
};

export default NewsList;
