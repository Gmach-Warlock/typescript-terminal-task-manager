import type { Priority } from "../types/types.js";
import type { TaskObj } from "../types/interfaces.js";

export class Task {
  #id: string;
  #title: string;
  #description: string;
  #priority: Priority;
  #completed: boolean;
  #createdAt: string;

  constructor(title: string, description: string, priority: Priority) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#description = description;
    this.#priority = priority;
    this.#completed = false;
    this.#createdAt = new Date().toISOString();
  }

  // getters
  get id(): string {
    return this.#id;
  }
  get title(): string {
    return this.#title;
  }
  get description(): string {
    return this.#description;
  }
  get priority(): Priority {
    return this.#priority;
  }
  get completed(): boolean {
    return this.#completed;
  }
  get createdAt(): string {
    return this.#createdAt;
  }

  // setters
  set title(newTitle: string) {
    this.#title = newTitle;
  }
  set description(newDescription: string) {
    this.#description = newDescription;
  }
  set priority(newPriority: Priority) {
    this.#priority = newPriority;
  }
  set completed(newCompleted: boolean) {
    this.#completed = newCompleted;
  }

  // return the options
  makeTaskInfoObject(): TaskObj {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      priority: this.priority,
      completed: this.completed,
      createdAt: this.createdAt,
    };
  }
}
