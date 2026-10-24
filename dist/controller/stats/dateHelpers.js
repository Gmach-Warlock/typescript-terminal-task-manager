export function dayExists(year, month, day) {
    const maxDays = new Date(year, month, 0).getDate();
    if (day < 1 || day > maxDays) {
        console.log(`Day provided is out of range for that month in that year. `);
        return false;
    }
    return true;
}
//# sourceMappingURL=dateHelpers.js.map