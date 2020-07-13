// nothing here yet...
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke = async (type) => {
  try {
    if (type === "dad") {
      return await getDadJoke();
    } else if (type === "tronald") {
      return await getTronaldDumpQuote();
    } else if (type === "geek") {
      return await getGeekJoke();
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};
module.exports = { handleJoke };
