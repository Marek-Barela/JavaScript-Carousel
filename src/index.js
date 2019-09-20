import Images from "./js/models/Images";
import Carousel from "./js/models/Carousel";
import { renderImages } from "./js/views/imagesView";
import { renderCarouselBubbles, handleCarouselChange } from "./js/views/carouselView";
import DOMElements from "./js/views/DOMSelectors";
import "./styles/style.sass";

// Global state
const state = {};

const imagesControler = async () => {
  state.images = new Images();
  await state.images.fetchImages();
  renderImages(state.images.result);
  carouselControler();
};

const carouselControler = () => {
  const carouselLength = state.images.result.length;
  state.carousel = new Carousel(carouselLength);
  renderCarouselBubbles(state.images.result);
  handleCarouselChange(state.carousel.currentCarouselIndex);
};

DOMElements.nextSlide.addEventListener("click", () => {
  state.carousel.nextCarouselImage();
  handleCarouselChange(state.carousel.currentCarouselIndex);
});

DOMElements.previousSlide.addEventListener("click", () => {
  state.carousel.previousCarouselImage();
  handleCarouselChange(state.carousel.currentCarouselIndex);
});

DOMElements.bubblesContainer.addEventListener("click", e => {
  // Set image by clicking on specific bubble
  const bubbleData = e.target.dataset.bubble;
  if (bubbleData) {
    state.carousel.setImageByBubbleIndex(parseFloat(bubbleData));
    handleCarouselChange(state.carousel.currentCarouselIndex);
  }
});

window.addEventListener("DOMContentLoaded", imagesControler);
