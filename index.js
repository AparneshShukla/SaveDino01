
cross = true;
score = 0;

jump = new Audio('jump.mp3')
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
    audio.loop = true;

}, 4000);



document.onkeydown = function (f) {
    console.log("key code is :", f.keyCode);
    if (f.keyCode == 38) {
        player = document.querySelector('.player');
        player.classList.add('animatePlayerJump');
        setTimeout(() => {
            player.classList.remove('animatePlayerJump');
        }, 1400);
        jump.play();
    }

    if (f.keyCode == 39) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX + 112) + "px";
        jump.pause();
        jump.play();
    }

    if (f.keyCode == 37) {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX - 112) + "px";
        jump.pause();
        jump.play();
    }

    if (f.keyCode == 32) {
        player = document.querySelector('.player');
        player.classList.add('animatePlayerJump');
        setTimeout(() => {
            player.classList.remove('animatePlayerJump');
        }, 1400);
        jump.pause();
        jump.play();
    }



}

setInterval(() => {
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    distanceBetweenX = Math.abs(px - ox);
    distanceBetweenY = Math.abs(py - oy);

    if (distanceBetweenY < 50 && distanceBetweenX < 225) {
        gameOver.style.display = 'block';
        obstacle.classList.remove('obstacleCatch');
        audiogo.play();
        audio.pause();
        var x = 2;
        document.onkeydown = function (g) {
            if (x = 2 && g.keyCode == 13) {
                window.location.reload(g.keyCode == 13);
            }
        }
    }


    else if (distanceBetweenX < 225 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 700);

    }


}, 100);


function updateScore(score) {
    scoreContainer = document.getElementById("score");
    scoreContainer.innerHTML = score;
}



setInterval(() => {
    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.01;
    obstacle.style.animationDuration = newDur + 's';
}, 2000);

alert("Hello Let's Play The Game...");



