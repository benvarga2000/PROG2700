let score = 0;
let unlockedObjects = [];
let clickCount = 0;

function clickCookie() {
    clickCount++;
    if (clickCount === 3) {
        unlockObject('planet');
    }
    if (clickCount === 7) {
        unlockObject('rocket');
    }
    if (clickCount === 10) {
        unlockObject('alien');
    }
    if (clickCount === 15) {
        unlockObject('hiddenObject');
    }

    score++;
    updateScore();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object) {
    if (!unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        document.getElementById(object).classList.add('unlocked', 'clickable');
        alert(`Congratulations! You've unlocked the ${object}!`);
    }
}

function clickSpaceObject(object) {
    if (unlockedObjects.includes(object)) {
        // Increase icon size on click
        document.getElementById(object).style.fontSize = '36px';
    }
}
