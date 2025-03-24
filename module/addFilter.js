function addFilter() {
  const filterWindow = document.querySelector("#filter");
  filterWindow.classList.toggle("showFilter");

  const genresSelectBlock = document.querySelector(".genresSelectBlock");
  console.log(["genresSelect"], genresSelectBlock);

  if (genresSelectBlock.classList.contains("genresSelectBlockShow")) {
    genresSelectBlock.classList.remove("genresSelectBlockShow");
    document.querySelector(".genresBlockBtn").classList.remove("rotateBtn");
  }
}

export default addFilter;

// genres

// [{"_id":"Boys Love"},{"_id":"Hentai"},{"_id":"Award Winning"},{"_id":"Suspense"},{"_id":"Sports"},{"_id":"Comedy"},{"_id":"Slice of Life"},{"_id":"Erotica"},{"_id":"Horror"},{"_id":"Ecchi"},{"_id":"Gourmet"},{"_id":"Girls Love"},{"_id":"Sci-Fi"},{"_id":"Action"},{"_id":"Avant Garde"},{"_id":"Supernatural"},{"_id":"Fantasy"},{"_id":"Drama"},{"_id":"Mystery"},{"_id":"Adventure"},{"_id":"Romance"}]
