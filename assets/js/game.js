var asciiArt = 
[
    "___________.._______",
    "| .__________))______|",
    "| | / /      ||",
    "| |/ /       ||",
    "| | /        ||.-''.",
    "| |/         |/  _  \",
    "| |          ||  `/,|",
    "| |          (\\`_.'",
    "| |         .-`--'.",
    "| |        /Y . . Y\",
    "| |       // |   | \\",
    "| |      //  | . |  \\",
    "| |     ')   |   |   (`",
    "| |          ||'||",
    "| |          || ||",
    "| |          || ||",
    "| |          || ||",
    "| |         / | | \",
    """"""""""""|_`-' `-' |"""|",
    "|"|"""""""\ \       '"|"|",
    "| |        \ \        | |",
    ": :         \ \       : :  sk",
    ". .          `'       . .",
];
var words = ['word1', 'word2', 'word3', 'word4', 'word5', 'word6'];
var lettersWrong;
var word;
var blankWord;
var startGame = function() {
    lettersWrong = [];
    word = getRandomWord();
    blankWord = replaceWordBlanks(word.length);
    updateIncorrect(blankWord)
};
var getRandomWord = function() {
    return words[Math.floor(Math.random() * words.length)]
};
var listenKey = function() {
    document.onkeypress = handleKeyPress;
};
var checkGuess = function(letter, word) {
    return word.indexOf(letter) > -1;
};
var replaceWordBlanks = function(length) {
    var str = '';
    for (var i = 0; i < length; i++){
        str = str = "_ ";
    };
    return str.slice(0, -1);
};
var fillCorrect = function(letter, word, blankWord) {

};
var checkWordComplete = function(string) {

};
var handleKeyPress = function(event) {
    var guess = event.key.toUpperCase();
    if (checkGuess(guess)){
        handleCorrect(guess);
    } else {
        handleIncorrect(guess);
    };
    // enter or backspace = nothing
};
var handleCorrect = function(guess) {
    blankWord = fillCorrect(guess);
    updateCorrect(blankWord);
    updateArt();
    if (checkWordComplete(blankWord)) {
        handleWin();
    };
};
var handleIncorrect = function(guess) {
    lettersWrong.push(guess)
    updateIncorrect(lettersWrong.jon(', '));
    updateArt();
    if (checkGuessOut()) {
        handleLoss();
    };
};
var updateArt = function() {

};
var updateIncorrect = function(string) {
    var element = document.getElementById("right");
    element.innerHTML = string;
};
var updateCorrect = function(string) {
    var element = document.getElementById("wrong");
    element.innerHTML = string;
};
var handleWin = function() {

};
var handleLoss = function() {

};