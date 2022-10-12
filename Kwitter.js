function addUser()
{
var input = document.getElementById("userName").value;

var userName =  localStorage.setItem("userName", input);

var userNameGt = localStorage.getItem("userName"); 

window.location = "Kwitter_room.html";

var userNameGet = localStorage.getItem("userName", input).innerHtml = "Bem vindo(a)"+ userNameGt;





}

function addKey()
{
  if(keyPressed == '13')
  {
    var input = document.getElementById("userName").value;

    var userName =  localStorage.setItem("userName", input);
    
    var userNameGt = localStorage.getItem("userName"); 
    
    window.location = "Kwitter_room.html";
    
    var userNameGet = localStorage.getItem("userName", input).innerHtml = "Bem vindo(a)"+ userNameGt;
  }
}

function addRoom()
{
document.getElementById("userName").value;

document.getElementById("userName").value += localStorage.setItem("userName", input);


 function getData() 
 {
  firebase.database().ref("/").on('value',
function(snapshot) {
  document.getElementById("output").innerHTML =
"";
snapshot.forEach(function(childSnapshot) 
{
  childKey = childSnapshot.key;
var roomNames = childKey;
 //Início do código

 //Fim do código
});});}
getData();
window.location = "Kwitter_page.html";

 

}

row = "<div class = 'roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)'>#"+ roomNames + "</div></hr>"; 