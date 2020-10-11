var number,i;
number = parseInt(window.prompt("Enter a number greater than zero."),10);
for (i = number; i >= 0; i--) {
    document.write(i + '<br>');
}