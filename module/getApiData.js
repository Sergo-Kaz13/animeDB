const getApiData = async (url) => {
  if (!url) {
    url =
      "https://anime-db.p.rapidapi.com/anime?page=1&size=10&sortBy=ranking&sortOrder=asc";
  }

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "234a7702edmshc0f60d766b8f92ap1f63f3jsn3dc8851993a2",
      "x-rapidapi-host": "anime-db.p.rapidapi.com",
    },
  };

  console.log(["url"], url);

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }

  // const response = await fetch("./data.json");
  // return await response.json();
};

export default getApiData;
