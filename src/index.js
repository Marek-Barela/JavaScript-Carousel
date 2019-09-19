import Images from "./js/models/Images";
import { renderImages } from "./js/views/imagesView";
import "./styles/style.sass";

// Global state
const state = {}

const imagesControler = async () => {
  state.images = new Images();
  await state.images.fetchImages();
  renderImages(state.images.result);
}

window.addEventListener("DOMContentLoaded", imagesControler)