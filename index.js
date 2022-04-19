// document.querySelector("button").addEventListener('click',myfunction);

// function myfunction(){
//     alert("I am clicked !!");
// }
/*
//brut force mathod.

var buttonArray = document.querySelectorAll(".drum");
buttonArray[0].addEventListener('click',tom1fun);
function tom1fun(){
    var tom_1Audio = new Audio('sounds/tom-1.mp3');
    tom_1Audio.play();
}


buttonArray[1].addEventListener('click',tom2fun);
function tom2fun(){
    var tom_2Audio = new Audio('sounds/tom-2.mp3');
    tom_2Audio.play();
}

buttonArray[2].addEventListener('click',tom3fun);
function tom3fun(){
    var tom_3Audio = new Audio('sounds/tom-3.mp3');
    tom_3Audio.play();
}

buttonArray[3].addEventListener('click',tom4fun);
function tom4fun(){
    var tom_4Audio = new Audio('sounds/tom-4.mp3');
    tom_4Audio.play();
}

buttonArray[4].addEventListener('click',kick);
function kick(){
    var kickAudio = new Audio('sounds/kick-bass.mp3');
    kickAudio.play();
}

buttonArray[5].addEventListener('click',snare);
function snare(){
    var snareAudio = new Audio('sounds/snare.mp3');
    snareAudio.play();
}

buttonArray[6].addEventListener('click',crash);
function crash(){
    var crashAudio = new Audio('sounds/crash.mp3');
    crashAudio.play();
}

*/

var buttonArray = document.querySelectorAll(".drum");
var drumButtons = buttonArray.length;
for (var i = 0; i < drumButtons; i++) {
    buttonArray[i].addEventListener("click", function () {
        var innerLeter = this.innerHTML;
        makeSound(innerLeter);
        buttonEnimation(innerLeter);
    });
}

document.addEventListener("keydown", function (event) {
    var key = event.key;
    makeSound(key);
    buttonEnimation(key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            break;
    }
    
}

function buttonEnimation(key){
    var ThisButton = document.querySelector("."+key);
    ThisButton.classList.add("pressed");

    setTimeout(function(){
        ThisButton.classList.remove("pressed");
    }, 100)
}


/*
// passing a function as a parameter in another function.
function multiply(num1,num2){
    return num1*num2;
}
function add(num1,num2){
    return num1+num2;
}

function calculator(num1,num2,operator){
    return operator(num1,num2);
}

*/

//normal object
var bellboy1 = {
    name: "rohan",
    Age: 23,
    languages: ["english", "hindi", "tamil"],
    moveSuitcase: function () {
        alert("May I take your suitcase?");
        // pickUpSuitcase();
        // move();
    },
};

//making object using a function (constructor)
function HouseKeeper(Exp, Age, AreaOfClening) {
    this.Exp = Exp;
    this.Age = Age;
    this.AreaOfClening = AreaOfClening;
}

var housekeeper1 = new HouseKeeper(5, 34, ["bathroom", "bedroom", "kichen"]);
