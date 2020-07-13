const request = require("request-promise");

// getDadJoke
const getDadJoke = async () => {
  try {
    const response = await request({
      headers: { Accept: "application/json" },
      uri: "https://icanhazdadjoke.com/",
    });
    const final = JSON.parse(response);
    return final.joke;
  } catch (err) {
    console.log("Error: ", err);
  }
};
// 4.1
getDadJoke().then((data) => console.log(data));
