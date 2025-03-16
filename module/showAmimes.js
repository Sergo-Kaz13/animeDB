function showAmimes(animes) {
  const { data, meta } = animes;
  // const {_id, title, image, episodes, ranking} = data;

  const mainContent = document.querySelector(".mainContent");

  data.map(({ _id, title, image, episodes, ranking }) => {
    const blockAnimeItem = document.createElement("div");
    blockAnimeItem.classList.add("blockAnimeItem");
    blockAnimeItem.id = _id;

    const animeImg = document.createElement("img");
    animeImg.classList.add("animeImg");
    animeImg.src = image;
    blockAnimeItem.appendChild(animeImg);

    const animeInfoBlock = document.createElement("div");
    animeInfoBlock.classList.add("animeInfoBlock");

    const animeTitle = document.createElement("h4");
    animeTitle.classList.add("animeTitle");
    animeTitle.textContent = title;
    animeInfoBlock.appendChild(animeTitle);

    const animeRanking = document.createElement("div");
    animeRanking.classList.add("animeRanking");
    animeRanking.textContent = "ranking:" + " " + ranking;
    animeInfoBlock.appendChild(animeRanking);

    const animeEpisodes = document.createElement("div");
    animeEpisodes.classList.add("animeEpisodes");
    animeEpisodes.textContent = "episodes:" + " " + episodes;
    animeInfoBlock.appendChild(animeEpisodes);

    blockAnimeItem.appendChild(animeInfoBlock);

    mainContent.appendChild(blockAnimeItem);
  });

  console.log(["animeItems"], animeItems);
}

export default showAmimes;
