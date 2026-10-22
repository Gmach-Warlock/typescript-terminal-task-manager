import { mainMenu } from "../../view/menu.js";
import { logTasks } from "../terminal/taskPrompts.js";

export function myListener() {
  setTimeout(() => {
    console.clear();
    console.log(`Tasks have been updated`);
    logTasks();
    mainMenu();
  }, 500);
}
