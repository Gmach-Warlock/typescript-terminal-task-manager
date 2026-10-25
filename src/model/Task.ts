import type { Priority, TCategory } from "../types/types.js";
import type { DueDate, TaskInfo } from "../types/interfaces.js";

export function timeStamp() {
  const newDate = new Date();
  const formatted = new Intl.DateTimeFormat("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(newDate);
  return formatted;
}
export class Task {
  #id: string;
  #title: string;
  #description: string;
  #priority: Priority;
  #completed: boolean;
  #createdAt: string;
  #category: TCategory;
  #dueDate: string;
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
    this.#createdAt = timeStamp();
    this.#dueDate = "none";
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
    return this.#subtasks;
  }
  get dueDate(): string {
    return this.#dueDate;
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
  set subtasks(newSubtasks: string[]) {
    this.#subtasks = newSubtasks;
  }
  set dueDate(newDueDate: string) {
    this.#dueDate = newDueDate;
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
  toObject(): TaskInfo {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      category: this.category,
      priority: this.priority,
      completed: this.completed,
      createdAt: this.createdAt,
      dueDate: this.dueDate,
      subtasks: this.subtasks,
      tags: this.tags,
    };
  }
}
