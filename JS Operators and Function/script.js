function addNumbers(a, b) {
    return a + b;
}

let num1 = prompt("Please enter the first number:");
let num2 = prompt("Please enter the second number:");

num1 = Number(num1);
num2 = Number(num2);

alert("The sum is: " + addNumbers(num1, num2));
