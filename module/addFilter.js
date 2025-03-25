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
