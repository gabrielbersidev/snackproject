function getUsername() {
  const url = '/username';

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    if (this.status == 200)
      document.getElementById('username').innerHTML = this.responseText;
  });
  request.send();
}

getUsername();
