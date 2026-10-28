import type { Priority, TCategory } from "../../types/types.js";
import type { TaskInfo } from "../../types/interfaces.js";
import { tDates } from "./TDates.js";

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
  #subtasks: string[];
  #tags: string[];

  constructor(
    title: string,
    description: string,
    priority: Priority,
    category: TCategory,
    // repopulation
    id?: string,
    completed?: boolean,
    createdAt?: string,
    subtasks?: string[],
    tags?: string[],
  ) {
    this.#id = id ? id : crypto.randomUUID();
    this.#title = title;
    this.#description = description;
    this.#priority = priority;
    this.#completed = completed ? completed : false;
    this.#category = category;
    this.#createdAt = createdAt ? createdAt : timeStamp();
    this.#subtasks = subtasks ? subtasks : [];
    this.#tags = tags ? tags : [];
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
      dueDate: tDates.logDate(this) ?? "",
      subtasks: this.subtasks,
      tags: this.tags,
    };
  }
}
