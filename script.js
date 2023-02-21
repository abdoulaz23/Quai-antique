const button =document.getElementById("connexion")
const button_inscription=document.getElementById("inscription")
const button_reservation=document.getElementById("btn_reser")
let window_reservation="left=50,top=50,width=200,height=200"
let window_ref;

button.addEventListener("click", function (login){
    window.open("connexion.html")
})
button_inscription.addEventListener("click", function(inscription){
    window.open("inscription.html")
})
button_reservation.addEventListener("click",function (reservation){
    window_reservation=window.open("reservation.html",reservation,"menubar=no, status=no, scrollbars=no, menubar=no,url=no, left=300 ,top=150 ,width=1000, height=500")
})