// 21. Event loop & Calback functions

// console.log("Jacj Ma maslahatlari");

// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "o'zingizga ishlashni boshlang", // 30-40
//   "siz kuchli bo'lgan narsani qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling", // 60
// ];

/*
function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (20 < a && a <= 30) callback(null, list[1]);
  else if (30 < a && a <= 40) callback(null, list[2]);
  else if (40 < a && a <= 50) callback(null, list[3]);
  else if (50 < a && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("passed here 0");

maslahatBering(90, (err, data) => {
  if (err) console.log("ERROR:", err);
  else console.log("javob:", data);
});

console.log("passed here 1");
*/

// 22. Asynchronous functions

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (20 < a && a <= 30) return list[1];
//   else if (30 < a && a <= 40) return list[2];
//   else if (40 < a && a <= 50) return list[3];
//   else if (50 < a && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// call via async/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(71);
//   console.log(javob);
//   javob = await maslahatBering(42);
//   console.log(javob);
// }
// run();

// => bu yerda callback hell hosil bo'ladi va bundan qutulish uchun await ni ishlatamiz.

// maslahatBering(25)
//   .then((data) => {
//     maslahatBering(35)
//       .then((data) => {
//         maslahatBering(40)
//           .then((data) => {
//             console.log("javob:", data);
//           })
//           .catch((err) => {
//             console.log("ERROR:", err);
//           });
//         console.log("javob:", data);
//       })
//       .catch((err) => {
//         console.log("ERROR:", err);
//       });
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// A-TASK

function countLetter(ltr, word) {
  let a = 0;

  for (let i = 0; i < word.length; i++) {
    if (ltr === word[i]) a++;
  }
  return console.log(a);
}

countLetter("e", "engineering");
