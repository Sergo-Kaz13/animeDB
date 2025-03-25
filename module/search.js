"use strict";

import apiData from "./apiUrl.js";
import getApiData from "./getApiData.js";
import showAnimes from "./showAnimes.js";
import resetAnimeWindow from "./resetAnimeWindow.js";

function search(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const value = Object.fromEntries(formData.entries());
  const searchValue = "&search=" + value.search.trim().replace(/ /g, "%20");

  const url = apiData(searchValue);

  resetAnimeWindow();
  getApiData(url).then((anime) => showAnimes(anime));

  console.log(url);
  e.target.reset();
}

export default search;
