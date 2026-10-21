export class TasksCompleted {
  #complete: number;
  #incomplete: number;

  constructor() {
    this.#complete = 0;
    this.#incomplete = 0;
  }

  // getters
  get complete(): number {
    return this.#complete;
  }
  get incomplete(): number {
    return this.#incomplete;
  }

  // setters
  set complete(newComplete: number) {
    this.#complete = newComplete;
  }
  set incomplete(newIncomplete: number) {
    this.#incomplete = newIncomplete;
  }
}
