$(document).ready(function() {
    var wordDatabase = ["gingerbread", "pizza", "sausage", "cauliflower", "potato", "cheese", "chocolate"];

    var chosenWord;
    var underscores = [];
    var guesses = [];

    //generate an array of underscores of the right length

    function generateUnderscores(chosenWord) {
        chosenWord.split('').forEach(function(letter) {
            underscores.push('_');
        })
        return underscores;
    }


    //let's begin!
    //choose a word, generate an array of underscores

    $("#startButton").on("click", function(event) {
        chosenWord = wordDatabase[Math.floor(Math.random() * wordDatabase.length)];
        guesses = generateUnderscores(chosenWord);
        $(event.target).addClass("hidden");
        $("#wordSpace").removeClass("hidden").html(guesses);
    });
});