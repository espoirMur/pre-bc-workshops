class Order {
  constructor(customer, items = []) {
    this.setItems(items);
  }

  static getItems() {
    return this.items;
  }

  setItems(items) {
    this.items = items;
  }

  addItem(item) {
    this.items.push(item);
  }

  addItems(items) {
    // items.forEach(item => this.items.push(item));
    this.items = [...this.items, ...items];
  }

  getOrderSummary() {
    const starter = {
      items: [], totalPrice: 0,
    };

    const orderSummary = this.items.reduce((summary, item) => {
      summary.items.push({
        name: item.name, price: item.price,
      });

      summary.totalPrice += item.price;

      return summary;
    }, starter);

    return orderSummary;
  }
}

export default Order;
