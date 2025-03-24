"use strict";

import addFilter from "./module/addFilter.js";
import getApiData from "./module/getApiData.js";
import search from "./module/search.js";
import showAnimes from "./module/showAnimes.js";

const filterBtn = document.querySelector(".filterBtn");
filterBtn.addEventListener("click", addFilter);

const genresBlockBtn = document.querySelector(".genresBlockBtn");
genresBlockBtn.addEventListener("click", (e) => {
  const genresSelectBlock = document.querySelector(".genresSelectBlock");
  genresSelectBlock.classList.toggle("genresSelectBlockShow");

  const genresSelect = document.querySelector(".genresSelect");
  const hBlock = genresSelect.clientHeight;
  const root = document.documentElement;

  root.style.setProperty("--h", hBlock + "px");

  const rotateGenresBtn = document.querySelector(".genresBlockBtn");
  rotateGenresBtn.classList.toggle("rotateBtn");
});

getApiData().then((anime) => showAnimes(anime));

// ===========================================================

const formSearch = document.querySelector("#formSearch");
formSearch.addEventListener("submit", search);
