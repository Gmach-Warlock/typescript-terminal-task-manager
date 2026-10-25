import fs from "node:fs";
import type { Listener, Purpose } from "../types/types.js";
import type { Task } from "./Task.js";
import {
  historyListener,
  logListener,
} from "../controller/listeners/listener.js";

export const listenersArray: Listener[] = [
  logListener as Listener,
  historyListener,
];
export class TasksStore {
  #tasks: Task[];
  #listeners: Listener[];

  constructor() {
    this.#tasks = [];
    this.#listeners = [];
    listenersArray.forEach((listener) => this.subscribe(listener));
  }

  // getters
  get tasks(): Task[] {
    return this.#tasks;
  }
  get listeners(): Listener[] {
    return this.#listeners;
  }

  // setters
  set tasks(newTasks: Task[]) {
    this.#tasks = newTasks;
  }
  set listeners(newListerners: Listener[]) {
    this.#listeners = newListerners;
  }

  getTaskObjects() {
    const objArr = this.#tasks.map((task) => task.toObject());
    console.log(objArr);
    return objArr;
  }

  loadTasks() {
    try {
      if (fs.existsSync("/data/tasks.json")) {
        const data = fs.readFileSync("../../data/tasks.json", "utf8");
        if (!data) throw new Error("tasks not found.");
        return JSON.parse(data);
      }
    } catch (error) {
      console.error("Could not load tasks. Re-initializing");
    }
  }

  saveTasks() {
    try {
      const tasks = tStore.getTaskObjects();
      const convertedData = JSON.stringify(tasks);
      const callBack = () => console.log("data", convertedData);
      fs.writeFile("../../../data/tasks.json", convertedData, callBack);
    } catch (error) {
      console.error(error);
    }
  }

  setTasks(newTasks: Task[], purpose: Partial<Purpose>) {
    this.#tasks = newTasks;
    this.notify(purpose);
  }

  subscribe(listener: Listener) {
    this.#listeners.push(listener);
  }

  notify(purpose: Partial<Purpose>) {
    this.#listeners.forEach((listener) => listener(purpose));
  }
}

export const tStore = new TasksStore();
