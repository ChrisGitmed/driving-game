var $car = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowLeft') {
    $car.className = 'rotate-left';
  } else if (event.code === 'ArrowRight') {
    $car.className = 'rotate-right';
  } else if (event.code === 'ArrowUp') {
    $car.className = 'rotate-up';
  } else if (event.code === 'ArrowDown') {
    $car.className = 'rotate-down';
  }

});
