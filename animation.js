
let texts = ["Front-end developer", "Full-stack developer"];
let currentIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;
let timeOutId;

function changeText() {
    let textValue = document.getElementById('textChange');
    let currentText = texts[currentIndex];
    if (!isDeleting && currentCharacterIndex < currentText.length) {

        textValue.textContent = currentText.substring(0, currentCharacterIndex + 1);
        currentCharacterIndex++;



    }
    else {
        isDeleting = true;

        if (currentCharacterIndex > 0) {
            timeOutId = setTimeout(() => {
                textValue.textContent = currentText.substring(0, currentCharacterIndex - 1);
                currentCharacterIndex--;
            }, 1000);
        } else {
            clearTimeout(timeOutId);
            isDeleting = false;
            // Move to the next text
            currentIndex = (currentIndex + 1) % texts.length;

        }

    }
}


setInterval(changeText, 100);
