import type { Priority, TCategory } from "../types/types.js";
import type { TaskObj } from "../types/interfaces.js";

export class Task {
  #id: string;
  #title: string;
  #description: string;
  #priority: Priority;
  #completed: boolean;
  #createdAt: string;
  #category: TCategory;
  #subtasks: string[];
  #tags: string[];

  constructor(
    title: string,
    description: string,
    priority: Priority,
    category: TCategory,
  ) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#description = description;
    this.#priority = priority;
    this.#completed = false;
    this.#category = category;
    this.#createdAt = new Date().toISOString();
    this.#subtasks = [];
    this.#tags = [];
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
  get category(): TCategory {
    return this.#category;
  }
  get tags(): string[] {
    return this.#tags;
  }
  get subtasks(): string[] {
    return this.subtasks;
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
  set category(newCategory: TCategory) {
    this.#category = newCategory;
  }
  set tags(newTags: string[]) {
    this.#tags = newTags;
  }
  set subTasks(newSubtasks: string[]) {
    this.#subtasks = newSubtasks;
  }

  addSubtaskToTask(subtask: string) {
    this.#subtasks.push(subtask);
  }

  addTagToTask(tag: string) {
    this.#tags.push(tag);
  }
  logTags() {
    this.#tags.forEach((tag) => console.log(`Tag: ${tag}`));
  }
  // return the options
  toObject(): TaskObj {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      category: this.category,
      priority: this.priority,
      completed: this.completed,
      createdAt: this.createdAt,
    };
  }
}
