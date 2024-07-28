// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

// 1. Even numbers background is green
// 2. Odd numbers background is yellow
// 3. Prime numbers background is reddocument.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("number-container");

    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement("div");
        numberDiv.className = "number";
        numberDiv.textContent = i;

        if (isPrime(i)) {
            numberDiv.style.backgroundColor = "red";
        } else if (i % 2 === 0) {
            numberDiv.style.backgroundColor = "green";
        } else {
            numberDiv.style.backgroundColor = "yellow";
        }

        container.appendChild(numberDiv);
    }
;

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}
