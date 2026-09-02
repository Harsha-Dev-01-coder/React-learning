function getLastItem<T>(items: T[]): T {
    return items[items.length - 1];
}

function reverseItems<T>(items: T[]): T[] {
    return [...items].reverse();
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["Apple", "Mango", "Orange"]));
console.log(getLastItem([true, false, true]));

console.log(reverseItems([1, 2, 3]));
console.log(reverseItems(["Apple", "Mango", "Orange"]));
console.log(reverseItems([true, false, true]));