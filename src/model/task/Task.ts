import type { Priority, TCategory } from "../../types/types.js";
import type { TaskInfo } from "../../types/taskInterfaces.js";
import { tDates } from "./TDates.js";
import { tBank } from "../tChildren/TSubsBank.js";
import type { Subtask } from "../tChildren/Subtask.js";
import { tTags } from "../tChildren/TTags.js";

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

  constructor(
    title: string,
    description: string,
    priority: Priority,
    category: TCategory,
    // repopulation
    id?: string,
    completed?: boolean,
    createdAt?: string,
  ) {
    this.#id = id ? id : crypto.randomUUID();
    this.#title = title;
    this.#description = description;
    this.#priority = priority;
    this.#completed = completed ? completed : false;
    this.#category = category;
    this.#createdAt = createdAt ? createdAt : timeStamp();
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
      subtasks: Object.values(tBank.returnSubTasks(this) ?? []) as Subtask[],
      tags: tTags.tags,
    };
  }
}
