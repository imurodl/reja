// ------------ A-TASK --------------

/* // Core function
function countLetter(ltr, word) {
  let a = 0;

  for (let i = 0; i < word.length; i++) {
    if (ltr === word[i]) a++;
  }
  return console.log(a);
}

countLetter("6", "irogjore6opgfo6opfdg6");
*/

/* // async/await solution
async function countLetter(ltr, word) {
  if (typeof ltr !== "string" || ltr.length !== 1) {
    throw new Error("First argument must be a single letter");
  }
  if (typeof word !== "string") {
    throw new Error("Second argument must be a string");
  } else {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (ltr.toLowerCase() === word[i].toLowerCase()) count++;
    }
    return count;
  }
}

async function run() {
  try {
    let result = await countLetter("m", "Mathematics");
    console.log("result:", result);

    result = await countLetter("6", "mathematics");
    console.log("result:", result);

    result = await countLetter("4", "35748349785");
    console.log("result:", result);
  } catch (err) {
    console.log("error:", err.message);
  }
}

run();
*/

//  ------------------- B-TASK: -----------------------

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb4") 7ni return qiladi.

/* // Solution 1: core logic
function countDigits(ltr) {
  if (ltr.length === 0 || typeof ltr == "number") {
    console.log("Insert a string");
  } else {
    let count = 0;
    for (let i = 0; i < ltr.length; i++) {
      for (let l = 0; l <= 9; l++) {
        if (l == ltr[i]) count++;
      }
    }
    return count;
  }
}
const result = countDigits("ad2a54y79wet0sfgb98");
console.log("result:", result);
*/

/* // Solution 2: with callback function
function countDigits(ltr, callback) {
  if (ltr.length === 0 || typeof ltr == "number")
    callback("Insert a string", null);
  else {
    let count = 0;
    for (let i = 0; i < ltr.length; i++) {
      for (let l = 0; l <= 9; l++) {
        if (l == ltr[i]) count++;
      }
    }
    callback(null, count);
  }
}

countDigits("ad2a54y79wet0sfgb98", (err, data) => {
  if (err) console.log("error:", err);
  else console.log("javob:", data);
});
*/

/* // Solution 3: wish async/await multiple results
async function countDigits(ltr, callback) {
  if (ltr.length === 0 || typeof ltr == "number")
    throw new Error("Insert a string");
  else {
    let count = 0;
    for (let i = 0; i < ltr.length; i++) {
      for (let l = 0; l <= 9; l++) {
        if (l == ltr[i]) count++;
      }
    }
    return count;
  }
}

async function countResult() {
  try {
    let result1 = await countDigits("ad2a54y79wet0sfgb98");
    console.log("result:", result1);

    result1 = await countDigits("");
    console.log("result:", result1);

    result1 = await countDigits(1213214342);
    console.log("result:", result1);
  } catch (err) {
    console.log("error:", err.message);
  }
}

countResult();
*/
