import DOMElements from "./DOMSelectors";

export const createImage = image => {
  const { id, url } = image;
  const markup = `<img class="carousel__image" src=${url} id=${id} alt="" />`;

  DOMElements.carousel.insertAdjacentHTML("beforeend", markup);
}

export const renderImages = images => {
  return images.forEach(createImage)
}