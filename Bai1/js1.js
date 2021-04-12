let num = +prompt('Enter number:');
let total = 0;
while (num !== -1) {
    num = +prompt('Enter Number:');
    total += num;
    alert(total);
}