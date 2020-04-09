import React, { useState, useEffect } from "react";
import { Input, LinearProgress, Chip, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import CloseIcon from "@material-ui/icons/Close";
import CardNewsComponent from "./../../components/cardNews/cardNews.component";
import { getNews } from "./../../services/request.service";

const NewsPage = () => {
  const [news, setNews] = useState([]); //mockNews);

  const [fetching, setFetching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("brasil");

  const updateNews = (keyWord, category) => {
    setFetching(true);
    getNews(keyWord, category).then((news) => {
      setNews(news);
      setFetching(false);
    });
  };

  const onInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearch = (event) => {
    if (event.key === "Enter") {
      setCategory(null);
      updateNews(searchValue);
    }
  };

  const onFilter = (category) => {
    setCategory(category);
    updateNews(null, category);
  };

  useEffect(() => {
    updateNews(null, category);
  }, []);

  return (
    <div className="pageContainer">
      {fetching && (
        <div className="loadingContainer">
          <LinearProgress />
        </div>
      )}
      <header className="headerContainer">
        <SearchIcon />
        <Input
          value={searchValue}
          className="searchBarContainer"
          placeholder="Pesquise aqui"
          onChange={onInputChange}
          onKeyPress={onSearch}
        />
        {searchValue !== "" && (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => setSearchValue("")}
          >
            <CloseIcon />
          </IconButton>
        )}
      </header>
      <div
        style={{ alignItems: "flex-start", marginTop: 10, marginBottom: 10 }}
      >
        <Chip
          style={{ marginRight: 10, marginBottom: 5 }}
          variant={category === "brasil" ? "default" : "outlined"}
          size="small"
          color="primary"
          icon={<PublicOutlinedIcon />}
          label="Brasil"
          onClick={() => onFilter("brasil")}
          clickable
        />
        <Chip
          style={{ marginRight: 10, marginBottom: 5 }}
          variant={category === "world" ? "default" : "outlined"}
          size="small"
          color="primary"
          icon={<PublicOutlinedIcon />}
          label="Mundo"
          onClick={() => onFilter("world")}
          clickable
        />
        <Chip
          style={{ marginRight: 10, marginBottom: 5 }}
          variant={category === "general" ? "default" : "outlined"}
          size="small"
          color="primary"
          icon={<PublicOutlinedIcon />}
          label="Geral"
          onClick={() => onFilter("general")}
          clickable
        />
        <Chip
          style={{ marginRight: 10, marginBottom: 5 }}
          variant={category === "entertainment" ? "default" : "outlined"}
          size="small"
          color="primary"
          icon={<PublicOutlinedIcon />}
          label="Entreterimento"
          onClick={() => onFilter("entertainment")}
          clickable
        />
        <Chip
          style={{ marginRight: 10, marginBottom: 5 }}
          variant={category === "health" ? "default" : "outlined"}
          size="small"
          color="primary"
          icon={<PublicOutlinedIcon />}
          label="Saúde"
          onClick={() => onFilter("health")}
          clickable
        />
        <Chip
          style={{ marginRight: 10, marginBottom: 5 }}
          variant={category === "science" ? "default" : "outlined"}
          size="small"
          color="primary"
          icon={<PublicOutlinedIcon />}
          label="Ciência"
          onClick={() => onFilter("science")}
          clickable
        />
        <Chip
          style={{ marginRight: 10, marginBottom: 5 }}
          variant={category === "sports" ? "default" : "outlined"}
          size="small"
          color="primary"
          icon={<PublicOutlinedIcon />}
          label="Esportes"
          onClick={() => onFilter("sports")}
          clickable
        />
        <Chip
          style={{ marginRight: 10, marginBottom: 5 }}
          variant={category === "technology" ? "default" : "outlined"}
          size="small"
          color="primary"
          icon={<PublicOutlinedIcon />}
          label="Tecnologia"
          onClick={() => onFilter("technology")}
          clickable
        />
      </div>
      {news.map(
        (news, index) =>
          news.urlToImage && (
            <div className="cardContainer" key={index}>
              <CardNewsComponent
                title={news.title}
                description={news.description}
                content={news.content}
                author={news.source.name}
                date={news.publishedAt}
                imageSource={news.urlToImage}
                url={news.url}
              />
            </div>
          )
      )}
    </div>
  );
};

export default NewsPage;
