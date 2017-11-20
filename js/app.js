// funcion cuando carga la pagina
window.onload = function () {
  var textTweet = document.getElementById('text-tweet').value;
  document.addEventListener('keyup', countCharacters);
}

var textArea = document.getElementById('text-tweet');
textArea.addEventListener('keydown', function (event) {
  // verifica las filas del textarea para adaptarlo al texto o añadir filas si presiona '\n (enter)'
  var text = event.target.value.split('');
  var acum = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === '\n') {
      acum++;
    }
    if (acum) {
      event.target.rows = acum + 2;
    }
  }

  if (checkText(textArea.value)) {
    setTimeout(function () {
      textArea.style.cssText = 'height:' + textArea.scrollHeight + 'px';
    }, 0);
  }
});



var accountantHtml = document.getElementById('accountant');
var accountant = parseInt(accountantHtml.textContent);

// funcion que añade evento para poder si twittear si es un texto válido
function countCharacters() {
  var textTweet = document.getElementById('text-tweet').value;
  checkCounter();
  if (checkText(textTweet)) {
    var remainingCharacters = accountant - textTweet.length;
    checkCounter();
    if (checkText(textTweet)) {
      if (remainingCharacters === 140 || remainingCharacters <= 0) {
        removeEventButtonTwittear();
      } else {
        addEventButtonTwittear();
      }
    } else {
      restart();
    }
  } else {
    removeEventButtonTwittear();
  }

}

// funcion que modifica el valor del contador 
function checkCounter() {
  var textTweet = document.getElementById('text-tweet').value;
  if (textTweet === '') {
    accountant = 140;
    var remainingCharacters = accountant - textTweet.length;
    accountantHtml.textContent = remainingCharacters;
    colorOfTheCounter(remainingCharacters);
  }
  if (accountant === 140 && checkText(textTweet)) {
    var remainingCharacters = accountant - textTweet.length;
    accountantHtml.textContent = remainingCharacters;
    colorOfTheCounter(remainingCharacters);
  }
}

// función para reiniciar las funcionalidades de la web tras un tweet
function restart() {
  removeEventButtonTwittear();
  countCharacters();
}

// añade evento al boton twittear
function addEventButtonTwittear() {
  var buttonTwittear = document.getElementById('btn-twittear');
  buttonTwittear.addEventListener('click', postTweet);
  buttonTwittear.style.backgroundColor = '#1DA1F2';
  buttonTwittear.style.border = '1px solid #1DA1F2';
}

// funcion para remover evento al button twittear
function removeEventButtonTwittear() {
  var buttonTwittear = document.getElementById('btn-twittear');
  buttonTwittear.removeEventListener('click', postTweet);
  buttonTwittear.style.backgroundColor = '#52b8f3';
  buttonTwittear.style.border = '1px solid #52b8f3';
}

// funcion para publicar un tweet
function postTweet() {
  var textTweet = document.getElementById('text-tweet').value;
  var tweets = document.getElementById('tweets');
  var containerTweet = document.createElement('div');
  var day = new Date();
  var hour = day.getHours();
  var minutes = day.getMinutes(); 
  var momentTweet =  hour + ':' + minutes;
  containerTweet.innerHTML = '<div><i class="fa fa-user-o"></i></div><h4>Name-user <span>@name_user</span><span id ="hours">'+momentTweet+'</span></h4> <p>' + textTweet + '</p>';
  containerTweet.setAttribute('class', 'post-tweet');
  tweets.appendChild(containerTweet);
  document.getElementById('text-tweet').value = '';
  removeEventButtonTwittear();
  checkCounter();
}

// funcion para modificar el color del contador 
function colorOfTheCounter(count) {

  switch (true) {
    case count === 140 || count < 0:
      accountantHtml.style.color = '#949292';
      break;
    case 20 < count && count < 140:
      accountantHtml.style.color = 'blue';
      break;
    case 0 < count && count <= 10:
      accountantHtml.style.color = 'red';
      break;
    case 10 < count && count <= 20:
      accountantHtml.style.color = 'pink';
      break;
  }

}

// funcion para verificar que el texto no sea vacio
function checkText(array) {
  for (var index = 0; index < array.length; index++) {
    if (array[index] !== ' ' && array.charCodeAt(index) !== 10) {
      return true;
    }
  }
}