import axios from "axios";

// const serverUrl = 'http://localhost:3000/dev/';
const serverUrl = 'https://2lyr80nvp3.execute-api.us-east-1.amazonaws.com/prod';

const serverRequest = axios.create({ baseURL: serverUrl });

export const getNews = (keyWord, category) => {
  const params = {};

  if (keyWord) {
    params.q = keyWord;
  } else {
    if (category !== "world" && category !== "brasil") {
      params.category = category;
    }
  }

  return serverRequest.request({
    url: "/news",
    params: {
      q: keyWord,
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
