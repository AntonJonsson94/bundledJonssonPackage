import { printAnswer } from "askforage";
const body = document.body;

printInput();

function printInput() {
    body.innerHTML = "";
    const input = document.createElement("input");
    input.setAttribute("placeholder", "How old are you?");
    const button = document.createElement("button");
    button.innerText = "Send";

    button.addEventListener("click", () => {
        const value = parseFloat(input.value);
        input.innerText = "";
        story(value);
    });

    body.append(input, button);
}

function story(age) {
    body.innerHTML = "";
    const message = document.createElement("p");

    if (isNaN(age)) {
        message.innerText = "Please write a number";
        const retryButton = document.createElement("button");
        retryButton.innerText = "Retry";
        body.appendChild(retryButton);
        retryButton.addEventListener("click", () => {
            printInput();
        });
    } else if (age >= 18) {
        message.innerText = `${printAnswer(age)}. Take a ride around town!`;
        const backButton = document.createElement("button");
        backButton.innerText = "Back";
        backButton.addEventListener("click", () => {
            printInput();
        });
        body.appendChild(backButton);
    } else {
        message.innerText = `${printAnswer(age)} GO HOME!`;
        const backButton = document.createElement("button");
        backButton.innerText = "Back";
        backButton.addEventListener("click", () => {
            printInput();
        });
        body.appendChild(backButton);
    }

    body.appendChild(message);
}

module.exports = {
    story,
};
