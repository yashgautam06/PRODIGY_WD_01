// Change navbar style on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "#222";
    document.getElementById("navbar").style.padding = "5px 0";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#333";
    document.getElementById("navbar").style.padding = "10px 0";
  }
}
