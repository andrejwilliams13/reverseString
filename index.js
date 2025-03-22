function reverseString() {
    var input = document.getElementById("userInput").value;
    var reversed = input.split("").reverse().join("");
    document.getElementById("output").textContent = "Reversed: " + reversed;
}