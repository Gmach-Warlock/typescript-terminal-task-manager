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
export function returnSortedArray(arr, sortType) {
    const priorityRank = {
        Low: 1,
        Medium: 2,
        High: 3,
    };
    const lookup = {
        Newest: () => [...arr].sort((a, b) => {
            return (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }),
        Oldest: () => [...arr].sort((a, b) => {
            return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        }),
        Low: () => [...arr].sort((a, b) => {
            return ((priorityRank[a.priority] ?? 0) - (priorityRank[b.priority] ?? 0));
        }),
        High: () => [...arr].sort((a, b) => {
            console.log(priorityRank[a.priority], priorityRank[b.priority]);
            return ((priorityRank[b.priority] ?? 0) - (priorityRank[a.priority] ?? 0));
        }),
    };
    const sortedArray = lookup[sortType]();
    return sortedArray;
}
//# sourceMappingURL=taskHelpers2.js.map