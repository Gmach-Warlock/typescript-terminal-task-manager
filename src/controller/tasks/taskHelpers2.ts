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
