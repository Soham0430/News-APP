import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Newscard from "./Newscard";
import { v4 as uuidv4 } from "uuid";
import Loading from "./Loading";
import { endpointSearch } from "../config/api"; // Import endpointSearch
import UserContext from "../Context/UserContext";

const Search = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useContext(UserContext);
  const { setsearchQuery } = useContext(UserContext);

  // Function to fetch news based on search query
  const updateNews = async () => {
    try {
      // Construct the API endpoint using endpointSearch function
      const response = await axios.get(endpointSearch(searchQuery));
      setLoading(true);
      const parsedData = response.data;
      setLoading(false);
      setArticles(parsedData.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Trigger news update when searchQuery changes
    if (searchQuery) {
      updateNews();
    }
  }, [searchQuery]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap mt-16 justify-center items-cneter">
          {articles.map((element) => {
            return (
              <Newscard
                key={uuidv4()}
                title={element.title}
                description={element.description}
                published={element.publishedAt}
                channel={element.source.name}
                alt="News image"
                publishedAt={element.publishedAt}
                imageUrl={element.image}
                urlNews={element.url}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Search;
