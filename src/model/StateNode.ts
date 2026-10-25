import type { StateObject } from "../types/interfaces.js";

export class StateNode {
  #data: object;
  #previous: StateNode | null;
  #next: StateNode | null;

  constructor(state: StateObject) {
    this.#data = state;
    this.#previous = null;
    this.#next = null;
  }

  // getters
  get data(): object {
    return this.#data;
  }

  get previous(): StateNode | null {
    return this.#previous;
  }

  get next(): StateNode | null {
    return this.#next;
  }

  // setters
  set currentState(newState: object) {
    this.#data = newState;
  }

  set previous(newPrevious: StateNode) {
    this.#previous = newPrevious;
  }

  set next(newNext: StateNode) {
    this.#next = newNext;
  }
}
