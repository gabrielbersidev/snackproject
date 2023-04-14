function getUsername() {
  const url = '/username';

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    document.getElementById('username').innerHTML = this.responseText;
  });
  request.send();
}

getUsername();
