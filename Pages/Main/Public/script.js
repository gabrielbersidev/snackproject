function getData(url, funcOk, funcErr) {}

function getUsername() {
  const url = '/username';

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    if (this.status == 200) {
      document.getElementById('username').innerHTML = this.responseText;
    }
  });
  request.send();
}

function getMenu() {
  const url = '/menu';

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    if (this.status == 200) {
      document.getElementById('menu').innerHTML = this.responseText;
    } else if (this.status == 406) {
      document.getElementById('menu').innerHTML =
        'Sua resposta já foi enviada.';
    } else if (this.status == 401) {
      document.getElementById('menu').innerHTML =
        'Não é possível enviar sua resposta no momento.';
    }
  });
  request.send();
}

getUsername();
getMenu();
