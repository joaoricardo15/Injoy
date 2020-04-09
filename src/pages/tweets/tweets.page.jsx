import React, { useState, useEffect } from "react";
import { Input, LinearProgress, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import CardTweetComponent from "./../../components/cardTweet/cardTweet.component";
import { getTweets } from "./../../services/request.service";

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]); //mockTweets);

  const [fetching, setFetching] = useState(false);
  const [searchValue, setSearchValue] = useState("corona");

  const updateTweets = (keyWord) => {
    setFetching(true);
    getTweets(keyWord).then((tweets) => {
      setTweets(tweets.data);
      setFetching(false);
    });
  };

  const onInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearch = (event) => {
    if (event.key === "Enter") {
      updateTweets(searchValue);
    }
  };

  useEffect(() => {
    updateTweets(searchValue);
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

      {tweets.map((tweet) => (
        <div className="cardContainer" key={tweet.created_at}>
          <CardTweetComponent
            userName={tweet.user.name}
            userAccountName={tweet.user.screen_name}
            userProfileImage={tweet.user.profile_image_url}
            userBio={tweet.user.description}
            userLocation={tweet.place || tweet.user.location}
            userFollowers={tweet.user.followers_count}
            userFavorites={tweet.user.favourites_count}
            text={tweet.text}
            retweets={tweet.retweet_count}
            favorites={tweet.favorite_count}
            image={tweet.entities.media && tweet.entities.media[0].media_url}
            date={tweet.created_at}
            url={
              tweet.entities.urls.length > 0
                ? tweet.entities.urls[0].url
                : tweet.entities.media
                ? tweet.entities.media[0].url
                : null
            }
          />
        </div>
      ))}
    </div>
  );
};

export default TweetsPage;
