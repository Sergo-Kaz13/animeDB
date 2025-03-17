"use strict";

import apiData from "./apiUrl.js";

function search(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const value = Object.fromEntries(formData.entries());

  const url = apiData("&search=" + value.search.trim().replace(/ /g, "%20"));

  console.log(url);
  e.target.reset();
}

export default search;
