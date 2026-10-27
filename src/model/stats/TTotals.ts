export class TTotals {
  #size: number;
  #total: number;

  constructor() {
    this.#size = 0;
    this.#total = 0;
  }

  // gettters
  get size(): number {
    return this.#size;
  }
  get total(): number {
    return this.#total;
  }
  // setters
  set size(newSize: number) {
    this.#size = newSize;
  }
  set total(newTotal: number) {
    this.#total = newTotal;
  }

  incSize() {
    this.#size++;
  }
  decSize() {
    this.#size--;
  }
  incTotal() {
    this.#total++;
  }
  decTotal() {
    this.#total--;
  }

  logTotals() {
    console.log(`
Size: ${this.#size},
Total: ${this.#total}`);
  }
}

export const tTotals: TTotals = new TTotals();
