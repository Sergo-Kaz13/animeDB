function showAmimes(animes) {
  const { data } = animes;
  const mainContent = document.querySelector(".mainContent");

  data.map(({ _id, title, image, episodes, ranking, link }) => {
    const blockAnimeItem = document.createElement("a");
    blockAnimeItem.setAttribute("href", link);
    blockAnimeItem.setAttribute("target", "_black");
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
}

export default showAmimes;
