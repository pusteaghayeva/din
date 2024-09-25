// // print
document.addEventListener('DOMContentLoaded', function () {
  const printIcon = document.querySelector('.print-icon');
  printIcon.addEventListener('click', function (event) {
    event.preventDefault();
    window.print();
  });
});