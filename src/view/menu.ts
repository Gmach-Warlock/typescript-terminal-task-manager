import { getAnswer } from "../controller/terminal/terminal.js";

export function logMainMenu() {
  console.log(`
Welcome to the Task Manager

What would you like to do?

1. Add a task
2. View all tasks
3. Mark task complete
4. Mark task incomplete
5. Edit task
6. Delete task
7. Search tasks
8. Sort tasks
9. Filter tasks
10. Exit

        `);
}

export async function mainMenu() {
  logMainMenu();
  const answer = await getAnswer("Please choose an option number: ");
  if (answer) console.log(answer);
}
