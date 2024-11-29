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
  if (ltr.length === 0 || typeof ltr != "string") {
    console.log("Insert a string");
  } else {
    let count = [...ltr].filter((char) => {
      if (char >= "0" && char <= "9") return char;
    });
    return count.length;
  }
}
const result = countDigits("ad2a54y79wet0sf7gb98");
console.log("result:", result);
*/

/* // Solution 2: with callback function
function countDigits(ltr, callback) {
  if (ltr.length === 0 || typeof ltr != "string")
    callback("Insert a string", null);
  let count = [...ltr].filter((char) => char >= "0" && char <= "9").length;
  callback(null, count);
}

countDigits("ad2a54y79wet0s9fgb98", (err, data) => {
  if (err) console.log("error:", err);
  else console.log("javob:", data);
});
*/

/*
// Solution 3: wish async/await multiple results
async function countDigits(ltr, callback) {
  if (ltr.length === 0 || typeof ltr != "string")
    throw new Error("Insert a string");
  else {
    let count = [...ltr].filter((char) => {
      if (char >= "0" && char <= "9") return char;
    });
    return count.length;
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

//  ------------------- C-TASK: -----------------------

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
// hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
/*
const moment = require("moment");

class Shop {
  // state
  non;
  lagmon;
  cola;

  // constructor
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  // methods
  hozirgiVaqt() {
    return moment().format("h:mm");
  }

  qoldiq() {
    const vaqt = this.hozirgiVaqt();
    console.log(
      `hozir ${vaqt}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`
    );
  }

  sotish(mahsulot, soni) {
    const vaqt = this.hozirgiVaqt();
    if (!this[mahsulot]) {
      console.log(`Error: Do'konda bu turdagi mahsulot mavjud emas`);
      return;
    }
    if (this[mahsulot] < soni) {
      console.log(`Yetarli ${mahsulot}  mavjud emas`);
    } else {
      this[mahsulot] = this[mahsulot] - soni;
      console.log(`hozir ${vaqt}da ${soni}ta ${mahsulot} sotildi.`);
    }
  }
  qabul(mahsulot, soni) {
    const vaqt = this.hozirgiVaqt();
    if (!this[mahsulot]) {
      console.log(`Error: Do'konda bu turdagi mahsulot mavjud emas`);
      return;
    }
    if (this[mahsulot] <= 0) {
      console.log(`Mahsulot soni not'gri kiritildi`);
      return;
    }
    this[mahsulot] = this[mahsulot] + soni;
    console.log(`hozir ${vaqt}da ${soni}ta ${mahsulot} mavjud`);
  }
}
const shop = new Shop(4, 5, 2);
shop.sotish("non", 3) & shop.qabul("cola", 4) & shop.qoldiq();
*/

//  ------------------- D-TASK: -----------------------

function checkContent(a, b) {
  if (a.length !== b.length) return false;

  function sorter(ele) {
    return ele.toLowerCase().split("").sort().join("");
  }

  return sorter(a) === sorter(b);
}

const result = checkContent("MITGroup", "gmtiprOu");
console.log(result);

/*  // Another solution
function checkContent(a, b) {
  if (a.length !== b.length) return false;

  a = a.toLowerCase();
  b = b.toLowerCase();

  let arr = Array.from(a);

  let obj = {};
  for (let char of b) {
    obj[char] = true;
  }

  return arr.every((ele) => obj[ele]);
}

const result = checkContent("MITGroup", "gmtiprou");
console.log(result);
*/

/* // Another solution
function checkContent(a, b) {
  if (a.length !== b.length) return false;

  let x = Array.from(a.toLowerCase());
  let y = Array.from(b.toLowerCase());

  return x.every((ele) => y.includes(ele));
}

const result = checkContent("MITGroup", "gmtiprou");
console.log(result);
*/
