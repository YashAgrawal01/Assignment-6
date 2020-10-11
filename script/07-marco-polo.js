var i, result;
for (i = 1; i <=100; i++) {
    result = '' + i;
    if (i % 15 == 0) {
        result = 'Marco! Polo!';
    } else if (i % 3 == 0) {
        result = 'Marco!';
    } else if (i % 5 == 0) {
        result = 'Polo!';
    }
    document.write(result + '<br>');
}