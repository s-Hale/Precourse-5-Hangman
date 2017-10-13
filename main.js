$(document).ready(function() {
    var wordDatabase = ["gingerbread", "pizza", "sausage", "cauliflower", "potato", "cheese", "chocolate"];

    var chosenWord;
    var underscores = [];
    var guesses = [];
    var userLetter = "";
    var checkWordSplit = [];

    //generate an array of underscores of the right length

    function generateUnderscores(chosenWord) {
        chosenWord.split('').forEach(function(letter) {
            underscores.push('_');
        })
        return underscores;
    }

    //split the word into an array and compare individual letters

    function isLetterPresent(userLetter) {
        userLetter = userLetter.toLowerCase();
        checkWordSplit = chosenWord.split('');
        var result = false;

        //reassign any correct letters into the array of underscores and update DOM

        for (var i = 0; i < checkWordSplit.length; i++) {
            if (checkWordSplit[i] === userLetter) {
                result = true;
                guesses[i] = userLetter;
                $("#wordSpace").html(guesses);

            }
        }
    }


    //let's begin!
    //choose a word, generate an array of underscores

    $("#startButton").on("click", function(event) {
        chosenWord = wordDatabase[Math.floor(Math.random() * wordDatabase.length)];
        guesses = generateUnderscores(chosenWord);
        $(event.target).addClass("hidden");
        $("#wordSpace").removeClass("hidden").html(guesses);
    });

    //to avoid 26 click handlers, used child elements - spans - and therefore any click within alphabet keys includes
    //children; target selects individual span. Had to ensure entire element couldn't be selected.
    //took text from the target span to use to compare.

    $("#alphabetKeys").on("click", function(event) {
        var target = $(event.target);
        if (event.target !== event.currentTarget) {
            target.addClass("selected");
            var wellIsIt = "";
            userLetter = target.text();
            wellIsIt = isLetterPresent(userLetter);
        }
    });
});