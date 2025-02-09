let counter = 0;

const onClick = (mouseClickData) => {
  if (mouseClickData.target.localName != 'td') {
    return;
  }

  if (mouseClickData.target.textContent != '') {
    return;
  }

  if (counter % 2 == 0) {
    mouseClickData.target.textContent = 'X';
  } else {
    mouseClickData.target.textContent = 'O';
  }
  counter++;

  if (
    document.getElementById('1').textContent != '' &&
    document.getElementById('2').textContent != '' &&
    document.getElementById('3').textContent != '' &&
    document.getElementById('4').textContent != '' &&
    document.getElementById('5').textContent != '' &&
    document.getElementById('6').textContent != '' &&
    document.getElementById('7').textContent != '' &&
    document.getElementById('8').textContent != '' &&
    document.getElementById('9').textContent != ''
  ) {
    setTimeout(() => alert('You got a draw'), 0);
  }
};

window.addEventListener('click', onClick);
