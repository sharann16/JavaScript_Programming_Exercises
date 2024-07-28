// Generating numbers and marking evens, odds and prime numbers with three different colors. 

// See the image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_number_generator_day_3.1.gif
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("number-container");

    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement("div");
        numberDiv.className = "number";
        numberDiv.textContent = i;

        if (isPrime(i)) {
            numberDiv.classList.add("prime");
        } else if (i % 2 === 0) {
            numberDiv.classList.add("even");
        } else {
            numberDiv.classList.add("odd");
        }

        container.appendChild(numberDiv);
    }
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}
