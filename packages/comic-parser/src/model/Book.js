import Item from './Item';

class Book {
  constructor(rawBook = {}) {
    this.items = (rawBook.items || []).map(rawObj => new Item(rawObj));
    Object.freeze(this);
  }

  toRaw() {
    return {
      items: this.items.map(item => item.toRaw()),
    };
  }
}

export default Book;
