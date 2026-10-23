export function returnSearchArray(arr, searchProp, searchTerm) {
    const cleanedTerm = searchTerm.toLowerCase();
    const newArray = arr.filter((item) => String(item[searchProp]).toLowerCase().includes(cleanedTerm));
    if (!newArray) {
        console.log("Item not found: returnSearchArray");
        return;
    }
    return newArray;
}
//# sourceMappingURL=taskHelpers2.js.map