import React, { useEffect, useState } from "react";
import axios from "axios";
import Newscard from "./Newscard";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Loading from "./Loading";

import { endpointPath } from "../config/api";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const { newscategory, country } = props;
  const [loading, setLoading] = useState(true);

  
  const category = newscategory;


  const updatenews = async () => {
    try {
      const response = await axios.get(endpointPath(country, category));
      setLoading(true);
      const parsedData = response.data;
      setLoading(false);

      setArticles(parsedData.articles);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);
  return (
    <>
   
     {loading ? (
        <Loading />
      ) : (
    <div className="flex flex-wrap  mt-16 bg-gray-700 justify-center items-cneter" > 
      {articles.map((element) => {
        return (
          
          <Newscard key={uuidv4()}
            title={element.title}
            description={element.description}
            published={element.publishedAt}
            channel={element.source.name}
            alt="News image"
            publishedAt={element.publishedAt}
            imageUrl={element.image }
            urlNews={element.url}
          />
        );
      })}
      </div>
      )}</>
  );
};
News.defaultProps = {
  country: "us",
  newscategory: "general",
};

News.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
};

export default News;
