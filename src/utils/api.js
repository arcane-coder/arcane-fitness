import { data } from "./data";

export function bodyPartList() {
    // Create an empty Set to store unique bodyPart values
    const uniqueBodyParts = new Set();
    // Loop through the data array and add each bodyPart value to the Set
    data.forEach(item => {uniqueBodyParts.add(item.bodyPart)});
    // Convert the Set to an array (if needed)
    const uniqueBodyPartsArray = Array.from(uniqueBodyParts);
    return uniqueBodyPartsArray;
}