import Images from "./js/models/Images";
import Carousel from "./js/models/Carousel";
import { renderImages, renderImageBubbles } from "./js/views/imagesView";
import { setCarouselImage } from "./js/views/carouselView";
import DOMElements from "./js/views/DOMSelectors";
import "./styles/style.sass";

// Global state
const state = {}

const imagesControler = async () => {
  state.images = new Images();
  await state.images.fetchImages();
  renderImages(state.images.result);
  renderImageBubbles(state.images.result);
  carouselControler();
}

const carouselControler = () => {
  const carouselLength = state.images.result.length;
  state.carousel = new Carousel(carouselLength);
  setCarouselImage(state.carousel.currentCarouselIndex);
}

window.addEventListener("DOMContentLoaded", imagesControler);

DOMElements.nextSlide.addEventListener("click", () => {
  state.carousel.nextCarouselImage();
  setCarouselImage(state.carousel.currentCarouselIndex);
});

DOMElements.previousSlide.addEventListener("click", () => {
  state.carousel.previousCarouselImage();
  setCarouselImage(state.carousel.currentCarouselIndex);
});

DOMElements.bubblesContainer.addEventListener("click", (e) => {
  // Set image by clicking on bubbles
  const bubbleData = e.target.dataset.bubble;
  if(bubbleData) { 
    state.carousel.setImageByBubbleIndex(parseFloat(bubbleData));
    setCarouselImage(state.carousel.currentCarouselIndex);
  }
})