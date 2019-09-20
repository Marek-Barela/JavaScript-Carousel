import DOMElements from "./DOMSelectors";

const setCarouselImage = carouselIndex => {
  const baseTransformLength = -100;
  const position = baseTransformLength * carouselIndex;
  DOMElements.carousel.style.transform = `translateX(${position}%)`;
};

const createBubble = (image, index) => {
  const markup = `<div class="bubbles-container__bubble" data-bubble=${index}></div>`;

  DOMElements.bubblesContainer.insertAdjacentHTML("beforeend", markup);
};

export const renderCarouselBubbles = images => {
  return images.forEach(createBubble);
};

const setActiveBubble = carouselIndex => {
  const bubbles = DOMElements.bubbles;

  [...bubbles].forEach(bubble => {
    const bubbleIndex = parseFloat(bubble.dataset.bubble);
    if (bubbleIndex === carouselIndex) {
      bubble.classList.add("bubbles-container__bubble--active");
    } else {
      bubble.className = "bubbles-container__bubble";
    }
  });
};

export const handleCarouselChange = carouselIndex => {
  setCarouselImage(carouselIndex);
  setActiveBubble(carouselIndex);
};
