import addFilter from "./addFilter.js";
import apiData from "./apiUrl.js";
import getApiData from "./getApiData.js";
import resetAnimeWindow from "./resetAnimeWindow.js";
import showAnimes from "./showAnimes.js";

function showFilterResult(e) {
  e.preventDefault();

  const genres = {
    boysLove: "Boys Love",
    hentai: "Hentai",
    awardWinning: "Award Winning",
    suspense: "Suspense",
    sports: "Sports",
    comedy: "Comedy",
    sliceOfLive: "Slice of Life",
    erotica: "Erotica",
    horror: "Horror",
    ecchi: "Ecchi",
    gourmet: "Gourmet",
    girlsLove: "Girls Love",
    sciFi: "Sci-Fi",
    action: "Action",
    avantGarde: "Avant Garde",
    supernatural: "Supernatural",
    fantasy: "Fantasy",
    drama: "Drama",
    mystery: "Mystery",
    adventure: "Adventure",
    romance: "Romance",
  };

  const formData = new FormData(e.target);
  const value = Object.fromEntries(formData.entries());

  const { sortBy, sortOrder } = value;
  let genresCheck = "";

  for (const key in value) {
    if (key in genres) {
      if (genresCheck.length > 0) {
        genresCheck += "%2C" + genres[key];
      } else {
        genresCheck += "&genres=" + genres[key];
      }
    }
  }

  genresCheck = genresCheck.replace(/ /g, "%20");

  const url = apiData("", genresCheck, sortBy, sortOrder);

  resetAnimeWindow();
  getApiData(url).then((anime) => showAnimes(anime));

  addFilter();
  // e.target.reset();
}

export default showFilterResult;
