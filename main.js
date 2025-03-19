"use strict";

import addFilter from "./module/addFilter.js";
import getApiData from "./module/getApiData.js";
import search from "./module/search.js";
import showAnimes from "./module/showAnimes.js";

const filterBtn = document.querySelector(".filterBtn");
filterBtn.addEventListener("click", addFilter);

getApiData().then((anime) => showAnimes(anime));

// ===========================================================

const formSearch = document.querySelector("#formSearch");
formSearch.addEventListener("submit", search);
