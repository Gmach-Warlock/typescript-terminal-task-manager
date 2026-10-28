import { Tag } from "./Tag.js";

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
    this.#tags = [...this.#tags, tag];
  }
}

export const tTags = new TTags();
