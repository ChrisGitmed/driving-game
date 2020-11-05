var car = {
  xPosition: 10,
  yPosition: 0
};

var $car = document.querySelector('img');

function moveRight() {
  car.xPosition += 2;
  $car.style.left = car.xPosition + 'px'
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowLeft') {
    $car.className = 'rotate-left';

  } else if (event.code === 'ArrowRight') {
    $car.className = 'rotate-right';

  } else if (event.code === 'ArrowUp') {
    $car.className = 'rotate-up';

  } else if (event.code === 'ArrowDown') {
    $car.className = 'rotate-down';

  } else if (event.code === 'Space') {
    var newInterval = setInterval(moveRight, 16);
  }

});
