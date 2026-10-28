import type { Priority } from "../../types/types.js";
import { timeStamp } from "../task/Task.js";

export class Subtask {
  #id: string;
  #parent: string;
  #title: string;
  #description: string;
  #priority: Priority;
  #createdAt: string;
  #completed: boolean;

  constructor(
    parent: string,
    title: string,
    description: string,
    priority: Priority,
    id?: string,
    completed?: boolean,
    createdAt?: string,
  ) {
    this.#parent = parent;
    this.#title = title;
    this.#description = description;
    this.#priority = priority;
    this.#id = id ?? crypto.randomUUID();
    this.#createdAt = createdAt ?? timeStamp();
    this.#completed = completed ?? false;
  }

  get id() {
    return this.#id;
  }
  get parent() {
    return this.#parent;
  }
  get title() {
    return this.#title;
  }
  get description() {
    return this.#description;
  }
  get priority() {
    return this.#priority;
  }
  get completed() {
    return this.#completed;
  }
  get createdAt() {
    return this.#createdAt;
  }
  set parent(newParent: string) {
    this.#parent = newParent;
  }
  set title(newTitle: string) {
    this.#title = newTitle;
  }
  set description(newDesc: string) {
    this.#description = newDesc;
  }
  set priority(newPriority: Priority) {
    this.#priority = newPriority;
  }
  set completed(newCompleted: boolean) {
    this.#completed = newCompleted;
  }
}
