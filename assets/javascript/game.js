var random_result;
var lost = 0;
var win = 0;
var runCount = 0;

var startGame = function () {

    $(".crystals").empty();

    var images = [
        'https://images-na.ssl-images-amazon.com/images/I/51snWRfynML._SL500_.jpg',
        'https://www.rd.com/wp-content/uploads/2017/08/12_crystal_Reasons-Why-You-Should-Give-Crystals-a-Try_364248173_Abra-Cadabraaa-380x254.jpg',
        'https://battlecampbible.cdn.bcrank.us/181/img/cs-crystal.png',
        'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/10/Arena_Crystal.png/revision/latest?cb=20150825214845'];
    random_result = Math.floor(Math.random() * 99) + 19;

    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')"

            });
        $(".crystals").append(crystal);
    }
    $("#runCount").html("Score: " + runCount);
}

startGame();


$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));

    runCount += num;
    $("#runCount").html("Score: " + runCount);
    console.log(runCount);

    if (runCount > random_result) {
        lost--;
        $("#lost").html("You lost: " + lost);
        runCount = 0;
        
        startGame();
    }
    else if (runCount === random_result) {
        win++;
        $("#win").html("You win: " + win);
        runCount = 0;
        
        startGame();
    }


    
});

//pseudo coding

//4 crystals and random result
//crstal needs to have number 1 to 12
//new number every game
//clicking a crystal adds to results
//if equals score end game
//if greater than random result we decrement a lost counter
//iff it is equal, we increment a win counter