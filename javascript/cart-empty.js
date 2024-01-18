function showEmptyCartMessage() {
  var cartContainer = document.querySelector(".cart-container");
  var existingEmptyMessage = document.querySelector(".empty-cart-message");

  if (!existingEmptyMessage) {
    var emptyCartMessage = document.createElement("div");
    emptyCartMessage.classList.add("empty-cart-message");

    var sadFaceImage = document.createElement("img");
    sadFaceImage.src = "asset/img/cart-empty.png";
    sadFaceImage.alt = "Sad Face";
    sadFaceImage.classList.add("img-cart-empty");

    emptyCartMessage.appendChild(sadFaceImage);

    cartContainer.style.display = "none";
    document.querySelector(".cart").appendChild(emptyCartMessage);
  }
}