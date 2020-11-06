var car = {
  xPosition: 10,
  yPosition: 0
};

var $car = document.querySelector('img');
var carIsOff = true;
var intervalID;

function moveRight() {
  car.xPosition += 10;
  $car.style.left = car.xPosition + 'px';
}

function moveUp() {
  car.yPosition -= 10;
  $car.style.top = car.yPosition + 'px';
}

function moveDown() {
  car.yPosition += 10;
  $car.style.top = car.yPosition + 'px';
}

function moveLeft() {
  car.xPosition -= 10;
  $car.style.left = car.xPosition + 'px';
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowLeft') {
    $car.className = 'rotate-left';
    if (!carIsOff) {
      clearInterval(intervalID);
      intervalID = setInterval(moveLeft, 16);
    }

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
    if (!carIsOff) {
      clearInterval(intervalID);
      intervalID = setInterval(moveDown, 16);
    }

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
