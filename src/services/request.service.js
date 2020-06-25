import Request from "axios";

//const serverUrl = "http://localhost:5000/";
const serverUrl = "https://qtyhhoy6tg.execute-api.us-east-1.amazonaws.com/prod";

const serverRequest = Request.create({ baseURL: serverUrl });

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
