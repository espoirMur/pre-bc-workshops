import Item from './item';

class Phone extends Item {
  constructor(name, price, description, screenSize) {
    super(name, price, description);

    this.screenSize = screenSize;
  }

  setScreenSize(screenSize) {
    this.screenSize = screenSize;
  }

  getScreenSize() {
    return this.screenSize;
  }

  setPrice(price) {
    const sizeInNumber = parseFloat(this.getScreenSize());
    this.price = price * sizeInNumber * 0.25;
  }
}

export default Phone;