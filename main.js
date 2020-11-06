var car = {
  xPosition: 10,
  yPosition: 0
};

var $car = document.querySelector('img');
var carIsOff = true;
var intervalID;

function moveRight() {
  car.xPosition += 2;
  $car.style.left = car.xPosition + 'px';
}

function moveUp() {
  car.yPosition -= 2;
  $car.style.top = car.yPosition + 'px';
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowLeft') {
    $car.className = 'rotate-left';

  } else if (event.code === 'ArrowRight') {
    $car.className = 'rotate-right';
    if (!carIsOff) {
      clearInterval(intervalID);
      intervalID = setInterval(moveRight, 16);
    }

  } else if (event.code === 'ArrowUp') {
    $car.className = 'rotate-up';
    if (!carIsOff) {
      clearInterval(intervalID);
      intervalID = setInterval(moveUp, 16);
    }

  } else if (event.code === 'ArrowDown') {
    $car.className = 'rotate-down';

  } else if (event.code === 'Space') {
    if (carIsOff) {
      intervalID = setInterval(moveRight, 16);
      carIsOff = false;
    } else {
      clearInterval(intervalID);
      carIsOff = true;
    }
  }
});
