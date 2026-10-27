import type { StateObject } from "../types/interfaces.js";

export class TNode {
  #data: StateObject;
  #next: TNode | null;
  #prev: TNode | null;

  constructor(data: StateObject) {
    this.#data = data;
    this.#next = null;
    this.#prev = null;
  }

  get data() {
    return this.#data;
  }
  get next() {
    return this.#next;
  }
  get prev() {
    return this.#prev;
  }
  set data(newData: StateObject) {
    this.#data = newData;
  }
  set next(newNext: TNode | null) {
    this.#next = newNext;
  }
  set prev(newPrev: TNode | null) {
    this.#prev = newPrev;
  }
}
