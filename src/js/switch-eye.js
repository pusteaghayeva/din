document.getElementById("toggle-eye-icon").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("show-accessibility");
});


function changeFontSize(pxValue) {
  document.querySelectorAll('*').forEach(function (element) {
    if (window.getComputedStyle(element).fontSize) {
      element.style.fontSize = pxValue + 'px';
    }
  });
}

$('.font-slider input[type="range"]').on("input change", function () {
  var newSize = $(this).val();
  changeFontSize(newSize);
});