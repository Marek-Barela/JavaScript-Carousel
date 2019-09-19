const INITIAL_CAROUSEL_INDEX = 0;

class Carousel {
  constructor(carouselLength) {
    this.currentCarouselIndex = INITIAL_CAROUSEL_INDEX;
    this.carouselLength = carouselLength;
  }

  nextCarouselImage() {
    if(this.currentCarouselIndex >= this.carouselLength - 1) {
      this.currentCarouselIndex = 0
    } else {
      this.currentCarouselIndex += 1
    }
  }

  previousCarouselImage() {
    if(this.currentCarouselIndex <= 0) {
      this.currentCarouselIndex = this.carouselLength - 1
    } else {
      this.currentCarouselIndex -= 1
    }
  }
}

export default Carousel