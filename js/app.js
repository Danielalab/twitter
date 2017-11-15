
window.onload = function () {
  var buttonTwittear = document.getElementById('btn-twittear');
  buttonTwittear.addEventListener('click' , postTweet);
}

function postTweet () {
  var textTweet = document.getElementById('text-tweet').value;
  var tweets = document.getElementById('tweets');
  var containerTweet = document.createElement('div');
  containerTweet.innerHTML = '<div><i class="fa fa-user-o"></i></div><h4>Name-user <span>@name_user</span></h4><span>' + textTweet + '</span>';
  containerTweet.setAttribute('class' , 'post-tweet');
  tweets.appendChild(containerTweet);
}

