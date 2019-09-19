import DOMElements from "./DOMSelectors";

const createImage = image => {
  const { id, url } = image;
  const markup = `<img class="carousel__image" src=${url} id=${id} alt="" />`;

  DOMElements.carousel.insertAdjacentHTML("beforeend", markup);
}

export const renderImages = images => {
  return images.forEach(createImage)
}

const createBubble = (image, index) => {
  const markup = `<div class="bubbles-container__bubble" data-bubble=${index}></div>`;

  DOMElements.bubblesContainer.insertAdjacentHTML("beforeend", markup);
}

export const renderImageBubbles = images => {
  return images.forEach(createBubble)
}