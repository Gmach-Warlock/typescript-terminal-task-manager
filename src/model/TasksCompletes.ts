export class TasksCompletes {
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

  incComplete() {
    this.#complete++;
  }
  decComplete() {
    this.#complete--;
  }
  incIncomplete() {
    this.#incomplete++;
  }
  decIncomplete() {
    this.#incomplete--;
  }

  logCompletes() {
    console.log(`Complete: ${this.#complete}
Incomplete: ${this.incomplete}`);
  }
}

export const tCompletes = new TasksCompletes();
