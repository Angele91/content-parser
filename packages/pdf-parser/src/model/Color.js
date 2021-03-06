class Color {
  get intValue() {
    return (this.red << 16) + (this.green << 8) + this.blue; // eslint-disable-line no-bitwise
  }

  get hexString() {
    return `#${((1 << 24) + this.intValue).toString(16).slice(1)}`; // eslint-disable-line no-bitwise
  }

  get rgbString() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  constructor(rawObj = {}) {
    this.red = rawObj['0'] || 0;
    this.green = rawObj['1'] || 0;
    this.blue = rawObj['2'] || 0;
    Object.freeze(this);
  }

  toRaw() {
    return {
      0: this.red,
      1: this.green,
      2: this.blue,
    };
  }
}

export default Color;
