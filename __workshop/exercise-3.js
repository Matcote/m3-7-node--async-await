// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });

  // 2. returns the double of the num
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const times2 = await doublesLater(num);
    const times4 = await doublesLater(times2);
    const times8 = await doublesLater(times4);
    return times2 + times4 + times8;
  } catch (err) {
    console.log("Error: ", err);
  }
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
