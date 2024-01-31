 let popupRate = document.getElementById("pop-up-rate");
 let popupRateContainer = document.querySelector(".pop-up-rate");
 let popupRateContainerBg = document.querySelector(".pop-up-rate-bg");
 
 function OpenPopupRate(){
   popupRateContainer.classList.remove("open-popup-rate");
   popupRateContainerBg.classList.remove("open-popup-rate-bg")
   popupRateContainer.classList.add("open-popup-rate");
   popupRateContainerBg.classList.add("open-popup-rate-bg")
 }
 
 function ClosePopupRate(){
   popupRateContainer.classList.remove("open-popup-rate");
   popupRateContainerBg.classList.remove("open-popup-rate-bg")
 }