class Item {
  constructor(name, price, description) {
    this.setName(name);
    this.setPrice(price);
    this.setDescription(description);
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setPrice(price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }
}

export default Item;
