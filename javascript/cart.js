// click active voucher

document.addEventListener("DOMContentLoaded", function () {
  var voucherInputs = document.querySelectorAll(".voucher-input-co");

  voucherInputs.forEach(function (input) {
    input.addEventListener("click", function () {
      voucherInputs.forEach(function (el) {
        el.classList.remove("active");
      });

      input.classList.add("active");
    });
  });

  // cart empty


});


 // search voucher

 let popupSearchVoucher = document.getElementById("pop-up-voucher");
 let popupSearchVoucherContainer = document.querySelector(".pop-up-voucher");
 let popupSearchVoucherBg = document.querySelector(".pop-up-voucher-bg");
 
 function OpenPopupVoucher(){
    popupSearchVoucherContainer.classList.remove("open-popup-voucher");
    popupSearchVoucherBg.classList.remove("open-popup-voucher-bg")
    popupSearchVoucherContainer.classList.add("open-popup-voucher");
    popupSearchVoucherBg.classList.add("open-popup-voucher-bg")
 }
 
 function closePopupVoucher(){
  popupSearchVoucherContainer.classList.remove("open-popup-voucher");
   popupSearchVoucherBg.classList.remove("open-popup-voucher-bg")
 }