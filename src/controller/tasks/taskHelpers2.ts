import type { TaskInfo } from "../../types/interfaces.js";
import type { filterReturnType, FilterType } from "../../types/types.js";

export function returnSearchArray<Type extends object, Key extends keyof Type>(
  arr: Type[],
  searchProp: Key,
  searchTerm: string,
) {
  const cleanedTerm = searchTerm.toLowerCase();
  const newArray = arr.filter((item) =>
    String(item[searchProp]).toLowerCase().includes(cleanedTerm),
  );
  if (!newArray) {
    console.log("Item not found: returnSearchArray");
    return;
  }
  return newArray;
}

export function returnFilterArray<Task extends TaskInfo>(
  arr: Task[],
  filterType: FilterType,
) {
  const lookup: Record<FilterType, filterReturnType> = {
    Complete: () => arr.filter((item) => item.completed === true),
    Incomplete: () => arr.filter((item) => item.completed === false),
    Low: () => arr.filter((item) => item.priority === "Low"),
    Medium: () => arr.filter((item) => item.priority === "Medium"),
    High: () => arr.filter((item) => item.priority === "High"),
    All: () => arr,
  };
  return lookup[filterType]();
}
