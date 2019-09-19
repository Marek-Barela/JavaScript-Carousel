import DOMElements from "./DOMSelectors";

export const setCarouselImage = (carouselIndex) => {
  const baseTransformLength = -100;
  const position = baseTransformLength * carouselIndex;
  DOMElements.carousel.style.transform = `translateX(${position}%)`;
};