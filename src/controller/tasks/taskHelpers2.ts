import type { Task } from "../../model/task/Task.js";
import type {
  FilterFunction,
  FilterType,
  SortFunction,
  SortType,
} from "../../types/types.js";

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

export function returnFilterArray(arr: Task[], filterType: FilterType) {
  const lookup: Record<FilterType, FilterFunction> = {
    Complete: () => arr.filter((item) => item.completed === true),
    Incomplete: () => arr.filter((item) => item.completed === false),
    Low: () => arr.filter((item) => item.priority === "Low"),
    Medium: () => arr.filter((item) => item.priority === "Medium"),
    High: () => arr.filter((item) => item.priority === "High"),
    All: () => arr,
  };
  return lookup[filterType]();
}

export function returnSortedArray(arr: Task[], sortType: SortType) {
  const priorityRank: Record<string, number> = {
    Low: 1,
    Medium: 2,
    High: 3,
  };
  const lookup: Record<SortType, SortFunction> = {
    Newest: () =>
      [...arr].sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }),
    Oldest: () =>
      [...arr].sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }),
    Low: () =>
      [...arr].sort((a, b) => {
        return (
          (priorityRank[a.priority] ?? 0) - (priorityRank[b.priority] ?? 0)
        );
      }),
    High: () =>
      [...arr].sort((a, b) => {
        return (
          (priorityRank[b.priority] ?? 0) - (priorityRank[a.priority] ?? 0)
        );
      }),
  };
  const sortedArray = lookup[sortType]();
  return sortedArray;
}
