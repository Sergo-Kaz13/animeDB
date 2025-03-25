"use strict";

import addFilter from "./module/addFilter.js";
import getApiData from "./module/getApiData.js";
import search from "./module/search.js";
import showAnimes from "./module/showAnimes.js";
import showFilterResult from "./module/showFilterResult.js";
import toggleGenresSelect from "./module/toggleGenresSelect.js";

const filterBtn = document.querySelector(".filterBtn");
filterBtn.addEventListener("click", addFilter);

const genresBlockBtn = document.querySelector(".genresBlockBtn");
genresBlockBtn.addEventListener("click", toggleGenresSelect);

getApiData().then((anime) => showAnimes(anime));

// ===========================================================
const filterBlock = document.querySelector("#filter");
filterBlock.addEventListener("submit", showFilterResult);

const formSearch = document.querySelector("#formSearch");
formSearch.addEventListener("submit", search);
