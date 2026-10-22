import { mainMenu } from "../../view/menu.js";
import { closeApp } from "../terminal/terminal.js";

export function returnAction(val: number): void {
  const lookup: Record<number, () => void> = {
    1: () => {
      console.log("Coming soon");
      mainMenu();
    },
    2: () => console.log("Coming Soon"),
    3: () => console.log("Coming Soon"),
    4: () => console.log("Coming Soon"),
    5: () => console.log("Coming Soon"),
    6: () => console.log("Coming Soon"),
    7: () => console.log("Coming Soon"),
    8: () => console.log("Coming Soon"),
    9: () => console.log("Coming Soon"),
    10: () => closeApp(),
  };
  lookup[val]?.();
}
