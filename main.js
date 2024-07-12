var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomWord = "";


while(randomWord.length < 7){
    randomWord += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomWord);