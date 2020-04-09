import Request from "axios";

//const serverUrl = "http://localhost:5000/";
const serverUrl = "http://injoy.us-east-1.elasticbeanstalk.com";

const serverRequest = Request.create({ baseURL: serverUrl });

export const getNews = (keyWord, category) => {
  const newsApiUrl = "https://newsapi.org/v2/";
  const newsApiToken = "ed62172b723f4a598514e9a0aec3d2ae";
  const newsApiHeaders = { Accept: "application/json" };

  let url;
  const params = {
    apiKey: newsApiToken,
    pageSize: 30,
  };

  if (keyWord) {
    url = "everything";
    params.q = keyWord;
    params.language = "pt";
    params.sortBy = "popularity";
  } else {
    url = "top-headlines";
    params.q = "a";

    if (category !== "world") {
      params.country = "br";
      params.language = "pt";
    }

    if (category !== "world" && category !== "brasil") {
      params.category = category;
    }
  }

  return new Promise((resolve, reject) => {
    Request.request({
      url: url,
      baseURL: newsApiUrl,
      headers: newsApiHeaders,
      params: params,
    })
      .then((result) => {
        if (result.status === 200) {
          resolve(result.data.articles);
        }
      })
      .catch((error) => {
        reject(error);
      });
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
