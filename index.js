
let numberSwitchStatus = false;
let specialCharactersSwitchStatus = false;

function numberSwitch() {
    numberSwitchStatus = !numberSwitchStatus;
}

function specialCharactersSwitch() {
    specialCharactersSwitchStatus = !specialCharactersSwitchStatus;
}


function generatePassword() {
    let characters = getCharacters();

    let password1 = "";
    let password2 = "";

    let passwordLenght = document.getElementById("password-lenght-textbox").value;
    let messageWindow = document.getElementById("password-requaiers");
    
    if(passwordLenght < 8 || passwordLenght > 20) {
        messageWindow.classList.add("allert-message");
        messageWindow.textContent = "Wrong password parameters!";

        let password1 = "";
        let password2 = "";
        document.getElementById("first-password").textContent = password1;
        document.getElementById("second-password").textContent = password2;

    } else {
        messageWindow.classList.remove("allert-message");
        messageWindow.textContent = "Passwords must be at least 8 characters long and can't be longer then 20 characters";
        for (let i = 0; i < passwordLenght; i++) {
            password1 += characters[Math.floor(Math.random() * characters.length)];
            password2 += characters[Math.floor(Math.random() * characters.length)];
        }
    
    
        document.getElementById("first-password").textContent = password1;
        document.getElementById("second-password").textContent = password2;
    }


}

function getCharacters() {

    let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (specialCharactersSwitchStatus) {
        let specialCharsArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
        characters = characters.concat(specialCharsArray);
    }
    if (numberSwitchStatus) {
            let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
            characters = characters.concat(numberArray);
        }

    return characters
}