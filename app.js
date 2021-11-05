var ekran = document.getElementById("ekran");
var azalt = document.getElementById("azalt");
var arttır = document.getElementById("arttır");
var sıfırla = document.getElementById("sıfırla");

azalt.addEventListener("click", function(){
    ekran.innerHTML =  parseInt(ekran.innerHTML) - 1
    if(ekran.innerHTML == -1){
        ekran.style.color = "red"
    }
});
arttır.addEventListener("click", function(){
    ekran.innerHTML =  parseInt(ekran.innerHTML) + 1
    if(ekran.innerHTML == 1){
    ekran.style.color = "green"
}
});
sıfırla.addEventListener("click", function(){
    ekran.innerHTML = 0
    if(ekran.innerHTML == 0){
        ekran.style.color = "black"
    }
});