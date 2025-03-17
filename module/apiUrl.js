// 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc'

function apiData(
  searchData = "",
  genres = "", //&genres=
  sortBy = "ranking",
  sortOrder = "asc"
) {
  return `https://anime-db.p.rapidapi.com/anime?page=1&size=10${searchData}${genres}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
}

export default apiData;
