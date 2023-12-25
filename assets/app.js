document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.href;
    var links = document.querySelectorAll(".nav-link");

    for (var i = 0; i < links.length; i++) {
      if (links[i].href === url) {
        links[i].classList.add("active");
        break;
      }
    }
  });
  
  // document.addEventListener("DOMContentLoaded", function() {
  //   var loader = document.getElementById("loadingOverlay");
  //   loader.style.display = "block"; // Loading ekranını göstermek için 'block' yapısı kullanılabilir
  
  //   setTimeout(function() {
  //     loader.style.display = "none"; // Belirli bir süre sonra loading ekranını gizlemek için
  //   }, 5000); // Örneğin, burada 2 saniye sonra gizlemesi için bir süre belirtilmiş
  // });

  // ScrollReveal().reveal('body', { scale: 0.85 });
