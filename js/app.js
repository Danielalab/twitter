
window.onload = function () {
  var textTweet = document.getElementById('text-tweet').value;
  document.addEventListener('keyup', countCharacters );
}

var textarea = document.getElementById('text-tweet');

textarea.addEventListener('keyup', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}


var accountantHtml = document.getElementById('accountant');
var accountant = parseInt(accountantHtml.textContent);

function countCharacters () {
  var textTweet = document.getElementById('text-tweet').value;
  var remainingCharacters = accountant-textTweet.length;
  accountantHtml.textContent = remainingCharacters;  

  colorOfTheCounter (remainingCharacters) ;

  if (remainingCharacters === 140 || remainingCharacters <= 0) {
    var buttonTwittear = document.getElementById('btn-twittear');
    buttonTwittear.removeEventListener('click' , postTweet);
    buttonTwittear.style.backgroundColor = '#52b8f3';
    buttonTwittear.style.border = '1px solid #52b8f3';
  } else {
    var buttonTwittear = document.getElementById('btn-twittear');
    buttonTwittear.addEventListener('click' , postTweet);
    buttonTwittear.style.backgroundColor = '#1DA1F2';
    buttonTwittear.style.border = '1px solid #1DA1F2';    
  }

}


function postTweet () {
  var textTweet = document.getElementById('text-tweet').value;
  var tweets = document.getElementById('tweets');
  var containerTweet = document.createElement('div');
  containerTweet.innerHTML = '<div><i class="fa fa-user-o"></i></div><h4>Name-user <span>@name_user</span></h4> <p>' + textTweet + '</p>';
  containerTweet.setAttribute('class' , 'post-tweet');
  tweets.appendChild(containerTweet); 
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