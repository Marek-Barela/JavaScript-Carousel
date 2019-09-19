import DOMElements from "./DOMSelectors";

export const createImage = image => {
  const { id, url } = image;
  const markup = `<img class="carousel-container__image" src=${url} id=${id} alt="" />`;

  DOMElements.carouselContainer.insertAdjacentHTML("beforeend", markup);
}

export const renderImages = images => {
  return images.forEach(createImage)
}