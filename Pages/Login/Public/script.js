window.addEventListener('load', function (event) {
  var invalidPass = document.getElementById('invalid');

  if (window.location.href.endsWith('?invalid')) {
    invalidPass.classList.remove('hidden');
  }
});
