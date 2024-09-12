
const number = document.getElementById('contact');
number.addEventListener('focus', (e) => {
  if (!e.target.value) {
    e.target.value = '+994 (';
    e.target.setSelectionRange(6, 6);
  }
});

number.addEventListener('input', (e) => {
  let inputVal = e.target.value.replace(/\D/g, '');
  if (inputVal.length < 4) {
    inputVal = '+994 (';
  } else {
    inputVal = '+994 (' + inputVal.substring(3);
  }

  if (inputVal.length > 6) {
    inputVal = inputVal.slice(0, 8) + ') ' + inputVal.slice(8);
  }
  if (inputVal.length > 11) {
    inputVal = inputVal.slice(0, 13) + '-' + inputVal.slice(13);
  }
  if (inputVal.length > 14) {
    inputVal = inputVal.slice(0, 16) + '-' + inputVal.slice(16);
  }

  e.target.value = inputVal.substring(0, 19);

  e.target.setSelectionRange(e.target.value.length, e.target.value.length);
});

number.addEventListener('keydown', (e) => {
  const cursorPosition = e.target.selectionStart;

  if (e.key === 'Backspace') {
    if (cursorPosition === 7) {
      e.preventDefault();
      e.target.setSelectionRange(6, 6);
    } else if (cursorPosition === 11 || cursorPosition === 14 || cursorPosition === 17) {
      e.preventDefault();
      e.target.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
    }
  }

  if (e.key === 'Delete') {
    let currentVal = e.target.value.replace(/\D/g, '');

    if (currentVal.length <= 4) {
      e.target.value = '+994 (';
      e.target.setSelectionRange(6, 6);
      e.preventDefault();
    }
  }
});

const text = document.getElementById('text');
const charsLeft = document.getElementById('charsLeft');
text.addEventListener('input', (e) => {
  const maxLength = 1500;
  const currentLength = e.target.value.length;
  const remaining = maxLength - currentLength;
  charsLeft.textContent = remaining;
});

// faylın yüklənməsi
const fileInput = document.getElementById('formFileMultiple');
const uploadText = document.getElementById('upload');
const fileChosen = document.getElementById('file-chosen');

document.getElementById('formFileMultiple').addEventListener('change', function () {
  var uploadMessage = document.getElementById('upload');
  var fileNameInput = document.getElementById('fileName');
  if (this.files.length > 0) {
    fileNameInput.value = this.files[0].name;
  }

  uploadMessage.style.display = 'inline';
  setTimeout(function () {
    uploadMessage.style.display = 'none';
  }, 2000);
});
// modal
window.onload = function () {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();
};