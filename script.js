function createPassword(){
    const passwordBox = document.getElementById("password");
    const length = 12;
    const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowercase = "qwertyuiopasdfghjklzxcvbnm";
    const number = "0123456789";
    const symbol = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";
    const allChars = upperCase + lowercase + number + symbol;
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
function copyPassword(){
    const passwordBox = document.getElementById("password");
    passwordBox.select();
    document.execCommand("copy");
}