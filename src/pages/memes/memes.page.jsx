import React, { useState, useEffect } from "react";
import { LinearProgress } from "@material-ui/core";
import CardMemeComponent from "./../../components/cardMeme/cardMeme.component";
import { getMemes } from "./../../services/request.service";

const PageMemes = () => {
  const [memes, setMemes] = useState([]); //mockMemes);
  const [fetching, setFetching] = useState(false);

  const updateMemes = (keyWord) => {
    setFetching(true);
    getMemes(keyWord).then((memes) => {
      setMemes(memes.data);
      setFetching(false);
    });
  };

  useEffect(() => {
    updateMemes();
  }, []);

  return (
    <div className="pageContainer">
      {fetching && (
        <div className="loadingContainer">
          <LinearProgress />
        </div>
      )}
      {memes.map((meme) => (
        <div className="cardContainer" key={meme.title}>
          <CardMemeComponent
            title={meme.title}
            description={meme.description}
            image={meme.image}
            video={meme.video}
            author={meme.author}
            authorUrl={meme.authorUrl}
            date={meme.date}
            htmlContent={meme.htmlContent}
            icon={meme.icon}
            url={meme.url}
          />
        </div>
      ))}
    </div>
  );
};

export default PageMemes;
