
window.onload = function () {
  var textTweet = document.getElementById('text-tweet').value;
  document.addEventListener('keyup', countCharacters );
}


var textArea = document.getElementById('text-tweet');
textArea.addEventListener('keyup', autosize);
textArea.addEventListener('click', autosize);

             
function autosize(evento){
  var eventTextArea = this;
  if(evento.keyCode === 13 || evento.keyCode === 8) {
    setTimeout(function(){
      eventTextArea.style.cssText = 'height:' + eventTextArea.scrollHeight + 'px';
    },0);
  }
  if (checkText(textArea.value)) {
    setTimeout(function(){
      eventTextArea.style.cssText = 'height:' + eventTextArea.scrollHeight + 'px';
    },0);
  } 
}


var accountantHtml = document.getElementById('accountant');
var accountant = parseInt(accountantHtml.textContent);

function countCharacters () {
  var textTweet = document.getElementById('text-tweet').value;
  checkCounter();
  if (checkText(textTweet)) {
    var remainingCharacters = accountant-textTweet.length;    
    checkCounter();
    if (checkText(textTweet)) {
      if (remainingCharacters === 140 || remainingCharacters <= 0) {
        removeEventButtonTwittear() ;
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

function checkCounter() {
  var textTweet = document.getElementById('text-tweet').value;
  if (textTweet === '') {
    accountant = 140;
    var remainingCharacters = accountant-textTweet.length;  
    accountantHtml.textContent = remainingCharacters;  
    colorOfTheCounter (remainingCharacters) ;
  }
  if(accountant === 140 && checkText(textTweet)) {
    var remainingCharacters = accountant-textTweet.length;  
    accountantHtml.textContent = remainingCharacters;  
    colorOfTheCounter (remainingCharacters) ;
  }
}

function restart() {
  removeEventButtonTwittear();  
  countCharacters();   
}

function addEventButtonTwittear() {
  var buttonTwittear = document.getElementById('btn-twittear');      
  buttonTwittear.addEventListener('click' , postTweet);
  buttonTwittear.style.backgroundColor = '#1DA1F2';
  buttonTwittear.style.border = '1px solid #1DA1F2';   
}


function removeEventButtonTwittear() {
  var buttonTwittear = document.getElementById('btn-twittear');  
  buttonTwittear.removeEventListener('click' , postTweet);
  buttonTwittear.style.backgroundColor = '#52b8f3';
  buttonTwittear.style.border = '1px solid #52b8f3';
}


function postTweet () {
  var textTweet = document.getElementById('text-tweet').value;
  var tweets = document.getElementById('tweets');
  var containerTweet = document.createElement('div');
  containerTweet.innerHTML = '<div><i class="fa fa-user-o"></i></div><h4>Name-user <span>@name_user</span></h4> <p>' + textTweet + '</p>';
  containerTweet.setAttribute('class' , 'post-tweet');
  tweets.appendChild(containerTweet);
  document.getElementById('text-tweet').value = '';
  removeEventButtonTwittear();  
  checkCounter();  
}


function colorOfTheCounter (count) {

  switch (true) {
    case count === 140 || count < 0:
      accountantHtml.style.color = '#949292';
      break;
    case 20 < count && count < 140 :
      accountantHtml.style.color = 'blue';
      break;
    case 0 < count && count <= 10:
      accountantHtml.style.color ='red';
      break;
    case 10 < count && count <= 20:
      accountantHtml.style.color = 'pink';
      break;
  }
  
}

function checkText(array) {
  for (var index = 0; index < array.length; index++) {
    if (array[index] !== ' '  && array.charCodeAt(index) !== 10) {
      return true;
    }
  }
}

