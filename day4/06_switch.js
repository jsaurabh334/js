// program using switch statement
let a = 5;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    case 3:
        a = 'three';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);