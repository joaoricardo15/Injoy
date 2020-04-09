import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import NewsPage from "./pages/news/news.page";
import PageMemes from "./pages/memes/memes.page";
import TweetsPage from "./pages/tweets/tweets.page";
import "./App.css";

const App = () => {
  const [installation, setInstallation] = useState(null);
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, tabValue) => {
    setTab(tabValue);
  };

  const handleChangeIndex = (tabValue) => {
    setTab(tabValue);
  };

  const showInstalattionPainel = (event) => {
    event.preventDefault();
    setInstallation({ event, installButton: true });
  };

  const installApp = () => {
    installation.event.prompt();
    installation.event.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") setInstallation(null);
    });
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) =>
      showInstalattionPainel(e)
    );
  }, []);

  return (
    <div className="container">
      <div>
        {installation && (
          <div
            style={{ display: "flex", justifyContent: "flex-end", padding: 10 }}
          >
            <Button
              color="primary"
              variant="outlined"
              startIcon={<GetAppIcon />}
              onClick={installApp}
            >
              Instalar
            </Button>
          </div>
        )}
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
