import type { FilterType } from "../../types/types.js";
import { getNumericInput } from "./terminal.js";

export async function getFilterTypePrompt() {
  const key = await getNumericInput(
    `
What is the filter criteria? 

1. Completed
2. Not Completed
3. Low Priority
4. Medium Priority
5. High Priority
6. All

Please enter the appropriate value: `,
    6,
  );
  if (!key) {
    console.log("key not obtained properly getFilterTypePrompt");
    return;
  }
  const lookup: Record<number, FilterType> = {
    1: "Complete",
    2: "Incomplete",
    3: "Low",
    4: "Medium",
    5: "High",
    6: "All",
  };
  const filterType = lookup[key];
  return filterType;
}
