"use strict";

import showAmimes from "./module/showAmimes.js";

// const url =
//   "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "234a7702edmshc0f60d766b8f92ap1f63f3jsn3dc8851993a2",
//     "x-rapidapi-host": "anime-db.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.json();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

const response = await fetch("./data.json");
const result = await response.json();
console.log(["result"], result);

showAmimes(result);
