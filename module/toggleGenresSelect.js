function toggleGenresSelect() {
  const genresSelectBlock = document.querySelector(".genresSelectBlock");
  genresSelectBlock.classList.toggle("genresSelectBlockShow");

  const genresSelect = document.querySelector(".genresSelect");
  const hBlock = genresSelect.clientHeight;
  const root = document.documentElement;

  root.style.setProperty("--h", hBlock + "px");

  const rotateGenresBtn = document.querySelector(".genresBlockBtn");
  rotateGenresBtn.classList.toggle("rotateBtn");
}

export default toggleGenresSelect;
