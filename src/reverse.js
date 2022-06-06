export function reverseString(someString) {
    someString = String(someString);
    let newArr = someString.split('').reverse();
    someString = newArr.join('');
    return someString;
}
