export class TDue {
    #tTitle;
    #day;
    #month;
    #year;
    #stringDate;
    constructor(dueObj) {
        this.#tTitle = dueObj.taskTitle;
        this.#year = dueObj.year;
        this.#month = dueObj.month;
        this.#day = dueObj.day;
        this.#stringDate = `${this.#day} ${this.#month} ${this.#year}`;
    }
    get tTitle() {
        return this.#tTitle;
    }
    get day() {
        return this.#day;
    }
    get month() {
        return this.#month;
    }
    get year() {
        return this.#year;
    }
    get stringDate() {
        return this.#stringDate;
    }
}
//# sourceMappingURL=TDue.js.map