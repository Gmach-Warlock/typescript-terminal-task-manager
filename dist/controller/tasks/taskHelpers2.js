export function returnSearchArray(arr, searchProp, searchTerm) {
    const cleanedTerm = searchTerm.toLowerCase();
    const newArray = arr.filter((item) => String(item[searchProp]).toLowerCase().includes(cleanedTerm));
    if (!newArray) {
        console.log("Item not found: returnSearchArray");
        return;
    }
    return newArray;
}
export function returnFilterArray(arr, filterType) {
    const lookup = {
        Complete: () => arr.filter((item) => item.completed === true),
        Incomplete: () => arr.filter((item) => item.completed === false),
        Low: () => arr.filter((item) => item.priority === "Low"),
        Medium: () => arr.filter((item) => item.priority === "Medium"),
        High: () => arr.filter((item) => item.priority === "High"),
        All: () => arr,
    };
    return lookup[filterType]();
}
//# sourceMappingURL=taskHelpers2.js.map