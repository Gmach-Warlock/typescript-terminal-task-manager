import { timeStamp } from "../task/Task.js";
import { Task } from "../task/Task.js";

export class Tag {
  #id: string;
  #name: string;
  #createdAt: string;
  #taskTitles: string[];

  constructor(tag: string) {
    this.#id = crypto.randomUUID();
    this.#name = tag;
    this.#createdAt = timeStamp();
    this.#taskTitles = [];
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get createdAt() {
    return this.#createdAt;
  }
  get taskTitles() {
    return this.#taskTitles;
  }
  set name(newTag: string) {
    this.#name = newTag;
  }
  set taskTitles(newIds: string[]) {
    this.#taskTitles = newIds;
  }

  addTagUserId(task: Task) {
    this.#taskTitles = [...this.#taskTitles, task.title];
  }

  toObject() {
    const obj = {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      taskTitles: this.taskTitles,
    };
    return obj;
  }
}
