import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NewsPage from "./pages/news/news.page";
import PageMemes from "./pages/memes/memes.page";
import TweetsPage from "./pages/tweets/tweets.page";
import CardInstallComponent from "./components/cardInstall/cardInstall.component";
import "./App.css";

const App = () => {
  const [tab, setTab] = useState(null);

  const handleTabChange = (event, tabValue) => {
    setTab(tabValue);
  };

  const handleChangeIndex = tabValue => {
    setTab(tabValue);
  };

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };

  const config = {
    //width: "100%",
    height: 200,
    //opened: true,
    floating: true,
    botDelay: 300,
    userDelay: 300,
    //hideHeader: true,
    //userAvatar:
    speechSynthesis: { enable: true, lang: "pt" },
    style: {
      //top: 20,
      //right: 20
      //position: "fixed"
      margin: 20
    }
  };

  const steps = [
    {
      id: "askName",
      message: "Como é o seu nome?",
      trigger: "waitForName"
    },
    {
      id: "waitForName",
      user: true,
      trigger: "doubt"
    },
    {
      id: "doubt",
      message: "Eaee cupinxa {previousValue}, o que você deseja ver?",
      trigger: "tabOptions"
    },
    {
      id: "tabOptions",
      options: [
        {
          value: "news",
          label: "notícias",
          trigger: () => setTab(0)
        },
        {
          value: "tweets",
          label: "tweets",
          trigger: () => setTab(1)
        },
        {
          value: "memes",
          label: "memes",
          trigger: () => setTab(2)
        }
      ]
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true
    }
  ];

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config} opened={tab === null} />
      </ThemeProvider>
      {tab !== null && (
        <>
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
          <CardInstallComponent />
        </>
      )}
    </div>
  );
};

export default App;
