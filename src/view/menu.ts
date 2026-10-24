import { returnAction } from "../controller/tasks/taskActions.js";
import { getNumericInput } from "../controller/terminal/terminal.js";
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

export function logMainMenu2() {
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
10. Add tag to task
11. Add subtask to task
12. Add due date to task
13: Clear completed tasks
14: Show high priority
15: View stats    
16: Exit    
    `);
}

export function logNotFound() {
  setTimeout(() => {
    console.clear();
    console.log(
      "An item with that title doesn't exist. Returning to main menu. ",
    );
    mainMenu();
  }, 300);
  return;
}

export async function mainMenu() {
  logMainMenu2();
  const answer = await getNumericInput("Please choose an option: ");
  if (answer === undefined) return;
  returnAction(answer);
}
