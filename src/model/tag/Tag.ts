import { timeStamp } from "../task/Task.js";
import { Task } from "../task/Task.js";

export class Tag {
  #id: string;
  #tag: string;
  #createdAt: string;
  #tasksUsing: Task[];

  constructor(tag: string) {
    this.#id = crypto.randomUUID();
    this.#tag = tag;
    this.#createdAt = timeStamp();
    this.#tasksUsing = [];
  }

  get id() {
    return this.#id;
  }
  get tag() {
    return this.#tag;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get tasksUsing() {
    return this.#tasksUsing;
  }
  set tag(newTag: string) {
    this.#tag = newTag;
  }
  set users(newUsers: Task[]) {
    this.#tasksUsing = newUsers;
  }

  addTagUser(task: Task) {
    this.#tasksUsing = [...this.#tasksUsing, task];
  }
}
