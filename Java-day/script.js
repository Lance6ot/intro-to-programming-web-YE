let crashImg = document.getElementById('crash');
crashImg.addEventListener('click', playCrash);
function playCrash() {
    let sound = new Audio('sounds/crash.mp3');
    sound.play();
}

let kickImg = document.getElementById('kick');
kickImg.addEventListener('click', playKick);
function playKick() {
    let sound = new Audio('sounds/kick-bass.mp3');
    sound.play();
}

let snareImg = document.getElementById('snare');
snareImg.addEventListener('click', playSnare);
function playSnare() {
    let sound = new Audio('sounds/snare.mp3');
    sound.play();
}

let tom1Img = document.getElementById('tom1');
tom1Img.addEventListener('click', playTom1);
function playTom1() {
    let sound = new Audio('sounds/tom-1.mp3');
    sound.play();
}

let tom2Img = document.getElementById('tom2');
tom2Img.addEventListener('click', playTom2);
function playTom2() {
    let sound = new Audio('sounds/tom-2.mp3');
    sound.play();
}

let tom3Img = document.getElementById('tom3');
tom3Img.addEventListener('click', playTom3);
function playTom3() {
    let sound = new Audio('sounds/tom-3.mp3');
    sound.play();
}

let tom4Img = document.getElementById('tom4');
tom4Img.addEventListener('click', playTom4);
function playTom4() {
    let sound = new Audio('sounds/tom-4.mp3');
    sound.play();
}