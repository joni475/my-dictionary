const word = document.getElementById("word");
const meaning = document.getElementById("meaning");
const btnWord = document.getElementById("new-word-generator");

function myDictionary() {
    const words = dictionary[Math.floor(Math.random() * dictionary.length)];
    word.textContent = words.word;
    meaning.textContent = words.meaning;
}
btnWord.addEventListener("click", myDictionary);
myDictionary();