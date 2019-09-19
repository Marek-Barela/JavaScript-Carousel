import Images from "./js/models/Images";
import { renderImages, renderImageBubbles } from "./js/views/imagesView";
import DOMElements from "./js/views/DOMSelectors";
import "./styles/style.sass";

// Global state
const state = {}

const imagesControler = async () => {
  state.images = new Images();
  await state.images.fetchImages();
  renderImages(state.images.result);
  renderImageBubbles(state.images.result);
}

const carouselControler = () => {
  console.log("work")
}

window.addEventListener("DOMContentLoaded", imagesControler);

DOMElements.nextSlide.addEventListener("click", carouselControler);
DOMElements.previousSlide.addEventListener("click", carouselControler);