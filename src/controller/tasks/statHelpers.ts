import { tTotals } from "../../model/TasksTotals.js";

export function addTStats() {
  tTotals.incSize();
  tTotals.incTotal();
}

export function removeTStats() {
  tTotals.decSize();
}

export function markTStats() {
  //
}
