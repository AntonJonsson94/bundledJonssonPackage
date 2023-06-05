import { printAnswer } from "askforage";
const body = document.body;

printInput();

function printInput() {
    body.innerHTML = "";
    const input = document.createElement("input");
    input.setAttribute("type", "number");
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
    if (age >= 18) {
        message.innerText = `${printAnswer(age)}. Take a ride around town!`;
    } else {
        message.innerText = `${printAnswer(age)} GO HOME!`;
    }
    body.appendChild(message);
}

module.exports = {
    story,
};
