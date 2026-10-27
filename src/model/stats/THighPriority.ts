export class THighPriority {
  #highPriority: number;
  constructor() {
    this.#highPriority = 0;
  }

  get highPriority() {
    return this.#highPriority;
  }

  set highPriority(newHighPriority: number) {
    this.#highPriority = newHighPriority;
  }

  incHighPriority() {
    this.#highPriority++;
  }
  decHighPriority() {
    this.#highPriority--;
  }

  logHighPriority() {
    console.log(`High Priority: ${this.#highPriority}`);
  }
}

export const tHighPriority: THighPriority = new THighPriority();
