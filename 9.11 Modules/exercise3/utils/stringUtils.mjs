export function toUpperCase(str) {
    return str.toUpperCase();
}

export function containsVowels(str) {
    const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
        if (str.includes(vowels[i])) {
            return true;
        }
    }
    return false;
}