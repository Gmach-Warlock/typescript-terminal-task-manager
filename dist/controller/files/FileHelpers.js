import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function saveToFile(arr) {
    try {
        console.log("raw", arr);
        const convertedData = JSON.stringify(arr);
        const filePath = path.join(__dirname, "../../../data/tasks.json");
        const callBack = (err) => {
            if (err)
                console.error(err);
        };
        fs.writeFile("../../../data/tasks.json", convertedData, callBack);
    }
    catch (error) {
        console.error(error);
    }
}
export function loadToFile() { }
//# sourceMappingURL=FileHelpers.js.map