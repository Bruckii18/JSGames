let fallingspeed = 9.81;
let angle;
let power;
let throwingDistance;
let monsterDistance;

startGame.addEventListener('click', function () {
    setMonsterposition();
    gameMenu.classList.remove('active');
    inGame.classList.add('active');
});

function setMonsterposition() {
    monsterDistance = Math.round(Math.random() * 1000);
    monsterDistanceBox.innerHTML = "The monster is " + monsterDistance + "m from you away.";
}

world.addEventListener('change', function () {
    switch (world.value) {
        case "earth":
            fallingspeed = 9.81;
            document.body.style.backgroundImage = "url(\"../img/monsterHunter/earth.jpg\")";
            break;
        case "moon":
            fallingspeed = 1.62;
            document.body.style.backgroundImage = "url(\"../img/monsterHunter/moon.jpg\")";
            break;
        case "mars":
            fallingspeed = 3.69;
            document.body.style.backgroundImage = "url(\"../img/monsterHunter/mars.jpg\")";
            break;
        case "jupiter":
            fallingspeed = 24.79;
            document.body.style.backgroundImage = "url(\"../img/monsterHunter/jupiter.jpg\")";
            break;
    }
});



shoot.addEventListener('click', function () {
    angle = angleInput.value * (Math.PI / 180);
    power = powerInput.value;
    throwingDistance = Math.round(((power * power) * Math.sin(2 * angle)) / fallingspeed);
    console.log(throwingDistance);
});

function switchWindow() {

}