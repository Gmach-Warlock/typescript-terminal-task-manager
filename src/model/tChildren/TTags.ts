import { Tag } from "./Tag.js";
import { Task } from "../task/Task.js";
class TTags {
  #tags: Tag[];

  constructor() {
    this.#tags = [];
  }

  get tags() {
    return this.#tags;
  }
  set tags(newTags: Tag[]) {
    this.#tags = newTags;
  }

  addTag(tag: Tag) {
    if (!this.#tags.some((tag) => tag.id === tag.id))
      this.#tags = [...this.#tags, tag];
  }

  logTags(task: Task) {
    const tags: string[] = [];
    this.#tags.forEach((tag: Tag) => {
      if (tag.taskTitles.find((title) => title === task.title)) {
        tags.push(`#${tag.name} `);
      }
    });
    if (tags.length > 0) console.log(`Tags: ${tags}`);
  }
}

export const tTags = new TTags();
