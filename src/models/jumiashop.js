import Phone from './phone';
import Order from './order';

const iPhone = new Phone('iPhone', 1000, 'Great phone', '5.5');
const nexus = new Phone('Nexus', 1000, 'Nice phone', '4.5');
const tecno = new Phone('Tecno', 20, 'Average phone', '6');

const customer = 5697694576;
const items = [iPhone, nexus, tecno];

const order = new Order(customer, items);
const summary = order.getOrderSummary();
console.log(summary);

// order.addItem(iPhone);
// order.addItem(nexus);
// order.addItem(tecno);

// const items = [iPhone, nexus, tecno];
// order.addItems(items);
