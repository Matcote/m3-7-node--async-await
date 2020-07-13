const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const response = await request({
      uri: "https://geek-jokes.sameerkumar.website/api?format=json",
    });
    const final = JSON.parse(response);
    return final.joke;
  } catch (err) {
    console.log("Error: ", err);
  }
};

getGeekJoke().then((data) => console.log(data));
