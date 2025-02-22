
let num = prompt("Enter a number:");

num = Number(num);

if (isNaN(num)) {
    alert("Please enter a valid number.");
} else if (num % 2 === 0) {
    alert(num + " is an Even number.");
} else {
    alert(num + " is an Odd number.");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
