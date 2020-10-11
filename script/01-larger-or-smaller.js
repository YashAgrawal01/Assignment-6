var num1 = parseInt(window.prompt("Enter first interger"),10);
var num2 = parseInt(window.prompt("Enter second interger"),10);

if (num1 === num2) {
    document.write(num1 + " and " + num2 + " are equal");
} else if (num1 > num2) {
    document.write(num1 + " is the larger integer");
} else {
    document.write(num2 + " is the larger integer");
}