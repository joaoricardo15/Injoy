import Request from "axios";

//const serverUrl = "http://localhost:5000/";
const serverUrl = "http://injoy.us-east-1.elasticbeanstalk.com";

const serverRequest = Request.create({ baseURL: serverUrl });

export const getNews = (keyWord, category) => {
  return serverRequest.request({
    url: "/news",
    params: {
      q: keyWord,
      category,
    },
  });
};

export const getTweets = (keyWord) => {
  return serverRequest.request({
    url: "/tweets",
    params: {
      q: keyWord,
    },
  });
};

export const getMemes = (keyWord) => {
  return serverRequest.request({
    url: "/memes",
    params: {
      q: keyWord,
    },
  });
};
