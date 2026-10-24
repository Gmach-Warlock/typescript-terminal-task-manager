export class TasksCompletes {
  #complete: number;
  #incomplete: number;
  #completed: number;

  constructor() {
    this.#complete = 0;
    this.#incomplete = 0;
    this.#completed = 0;
  }

  // getters
  get complete(): number {
    return this.#complete;
  }
  get incomplete(): number {
    return this.#incomplete;
  }
  get completed(): number {
    return this.#completed;
  }
  // setters
  set complete(newComplete: number) {
    this.#complete = newComplete;
  }
  set incomplete(newIncomplete: number) {
    this.#complete = newIncomplete;
  }
  set completed(newCompleted: number) {
    this.#completed = newCompleted;
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
Incomplete: ${this.incomplete}
Completed: ${this.#completed}`);
  }
}

export const tCompletes = new TasksCompletes();
