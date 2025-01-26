function doSomething() {
  const x = document.createElement('li');

  const parentElement = document.getElementById('to-do-list');

  parentElement.appendChild(x);

  const textBox = document.getElementById('addedtext');

  x.textContent = textBox.value;
}
