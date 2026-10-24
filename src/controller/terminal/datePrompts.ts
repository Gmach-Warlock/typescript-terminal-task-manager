import { dayExists } from "../stats/dateHelpers.js";
import { getNumericInput, getStringInput } from "./terminal.js";

async function getYear() {
  const yearKey = await getNumericInput(
    `
Please choose the year:

1. 2026
2. 2027

Please enter the appropriate Value: `,
    2,
  );
  const lookup: Record<number, number> = {
    1: 2026,
    2: 2027,
  };
  const year = lookup[yearKey];
  if (!year) {
    console.log("failed to get year");
    return;
  }
  return year;
}

async function getMonth() {
  const monthKey = await getNumericInput(
    `
Please choose the month:

1. January
2. February
3. March
4. April
5. May
6. June
7. July
8. August
9. September
10. October
11. November
12. December

Please enter the appropriate Value: `,
    12,
  );
  const month: number = monthKey;
  if (!month) {
    console.log("failed to get month");
    return;
  }
  return month;
}
export async function getDueDateInfo() {
  const year = await getYear();
  const month = await getMonth();
  const day = await getStringInput(
    `What is the date of the day to mark the Task due? `,
    false,
    true,
  );
  if (!year || !month || !day) return;
  if (!dayExists(year, month, Number(day))) return;
  const dateObj = { day, month, year };
  console.log(dateObj);
  return dateObj;
}
