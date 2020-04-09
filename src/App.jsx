import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NewsPage from "./pages/news/news.page";
import PageMemes from "./pages/memes/memes.page";
import TweetsPage from "./pages/tweets/tweets.page";
import "./App.css";

const App = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, tabValue) => {
    setTab(tabValue);
  };

  const handleChangeIndex = (tabValue) => {
    setTab(tabValue);
  };

  return (
    <div className="container">
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={tab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab label="Notícias" />
            <Tab label="Tweets" />
            <Tab label="Memes" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={tab}
          style={{ alignItems: "center" }}
          onChangeIndex={handleChangeIndex}
        >
          <div style={tab !== 0 ? { display: "none" } : {}}>
            <NewsPage />
          </div>
          <div style={tab !== 1 ? { display: "none" } : {}}>
            <TweetsPage />
          </div>
          <div style={tab !== 2 ? { display: "none" } : {}}>
            <PageMemes />
          </div>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default App;
