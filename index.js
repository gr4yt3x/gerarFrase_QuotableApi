let request = new XMLHttpRequest();
request.open("GET","https://api.quotable.io/random", false);
request.send();

json = JSON.parse(request.responseText);

var quote = json.content;
var author = json.author;

document.getElementById('quote').innerHTML = quote;
document.getElementById('author').innerHTML = author;