const spanTxt = document.querySelector('[data-name="first-line"]');
const txt = ["Start by sending a message."];

let ArrIndex = 0;
let txtIndex = -15;

const addLetter = () => {
    if (txtIndex >= 0) {
        spanTxt.innerHTML += txt[ArrIndex][txtIndex];
    };
    txtIndex++;
    if (txtIndex === txt[ArrIndex].length) {
        ArrIndex++
        if (ArrIndex === txt.length) return;
        return setTimeout(() => {
            txtIndex = 0;
            addLetter();
        });
    };
    setTimeout(addLetter, 100);
};

addLetter();

// function startTyping {
//     if (percentage >= 87 && window.screen.width >= 992) {
//         addLetter();
//     };
// }
