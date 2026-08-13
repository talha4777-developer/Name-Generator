let book = "Mathematics";

console.log(`Slice of Mathematics = ${book.slice(2,5)}`);//Track Your Number Individually
console.log(`Replace Mathematics = ${book.replace("Mathematics","Islamiat")} `);// Replace with another name
console.log(`Legth of Mathematics = ${book.length}`);//Length
console.log(`Cocatinate = ${book.concat(" English Urdu Islamiat")}`);//Means Add Other Name.

// Faulty-Calculator
const showMessage = alert("You Enter First Number in First Prompt and 2nd Prompt you Enter 2nd  Number For Addition");

let number1 = Number(prompt("Enter Your First Number"));
if (number1 === "") {
    alert("Please Enter Your Number");

}

let operator = prompt("Enter Operation");

let number2 = Number(prompt("Enter Your Second Number"));
if (number2 === "") {
    alert("Please Enter Your Number");

}


let isFaulty = Math.random() < 0.5;

function faultyCalculator(number1, number2) {

    if (operator === "+" && isFaulty === false) { //Addition
        return number1 - number2;
    } else if (operator === "+" && isFaulty === true) { //Addition
        return number1 + number2;
    } else if (operator === "-" && isFaulty === false) { //Subtraction
        return number1 * number2;
    } else if (operator === "-" && isFaulty === true) { //Subtraction
        return number1 - number2;
    } else if (operator === "/" && isFaulty === false) { //Divide
        return number1 ** number2;
    } else if (operator === "/" && isFaulty === true) { //Divide
        return number1 / number2;
    } else if (operator === "*" && isFaulty === false) { //Multiply
        return number1 + number2;
    } else if (operator === "*" && isFaulty === true) { ///Multiply
        return number1 * number2;
    } else {
        alert("Invalid Operator");
    }

}

let finalResult = faultyCalculator(number1,number2);
console.log(`${number1} ${operator} ${number2} = ${finalResult}`);
console.log(`Your Condition is = ${isFaulty}`);