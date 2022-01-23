const containerElement = document.getElementById("container");
//console.log(typeof containerElement);
const numberOfBoxes = 100;

for (let i=1; i<=numberOfBoxes; i++) {
    if (i%3==0 && i%5==0) {
        containerElement.innerHTML += '<div class="box red">' + 'FizzBuzz' + '</div>';
    } else if (i%3==0) {
        containerElement.innerHTML += '<div class="box green">' + 'Fizz' + '</div>';
    } else if (i%5==0) {
        containerElement.innerHTML += '<div class="box yellow">' + 'Buzz' + '</div>';
    } else {
        containerElement.innerHTML += '<div class="box">' + i + '</div>';
    }
}