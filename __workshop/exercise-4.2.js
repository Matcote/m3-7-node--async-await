const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  try {
    const response = await request({
      headers: { Accept: "application/json" },
      uri: "https://api.tronalddump.io/random/quote",
    });
    const final = JSON.parse(response);
    return final.value;
  } catch (err) {
    console.log("Error: ", err);
  }
};

getTronaldDumpQuote().then((data) => console.log(data));
