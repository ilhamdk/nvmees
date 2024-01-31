// increase decrease product

function increaseValue(button) {
  var inputElement = button.parentElement.querySelector('.quantity-input');
  var value = parseInt(inputElement.value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  inputElement.value = value;
}

function decreaseValue(button) {
  var inputElement = button.parentElement.querySelector('.quantity-input');
  var value = parseInt(inputElement.value, 10);
  value = isNaN(value) ? 1 : value;
  if (value > 1) {
    value--;
  }
  inputElement.value = value;
}