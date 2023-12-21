function togglePopup() {
    var screenWidth = window.innerWidth;
  
    if (screenWidth < 1000) {
      var popup = document.getElementById("popup");
      popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "flex" : "none";
    }
  }
  