const exit = document.getElementById("exit");
exit.style.display = "none";
var otv = 0;
exit.onclick = function(){
    window.location = "../index.html"
};
//=====================================================================
const but1 = document.querySelector(".but1");
const but1s = document.getElementById("but1")
const but2 = document.querySelector(".but2");
const input1 = document.getElementById("input1")
const dialog1 = document.querySelector(".dial1");
but1.addEventListener("click", OpenQuestion1);
function OpenQuestion1(){
    dialog1.showModal();
    but2.addEventListener("click", Question1)
}

function Question1(){
    if (input1.value == "five"){
        alert("Правильно!")
        but1s.style.backgroundColor = "green"
        but1.removeEventListener("click", OpenQuestion1)
        dialog1.close();
        otv += 1;
    }
    else{
        alert("Не правильно!")
    }
}
//=============================================================
const but3 = document.querySelector(".but3");
const but3s = document.getElementById("but3");
const but4 = document.querySelector(".but4");
const input2 = document.getElementById("input2")
const dialog2 = document.querySelector(".dial2")
but3.addEventListener("click", OpenQuestion2);
function OpenQuestion2(){
    dialog2.showModal();
    but4.addEventListener("click", Question2)
}

function Question2(){
    if (input2.value == "Scarry chair" || input2.value  == "scarry chair"){
        alert("Правильно!")
        but3s.style.backgroundColor = "green"
        but3.removeEventListener("click", OpenQuestion2)
        dialog2.close();
        otv += 1;
    }
    else{
        alert("Не правильно!")
    }
}
//=============================================================
const but5 = document.querySelector(".but5");
const but5s = document.getElementById("but5");
const but6 = document.querySelector(".but6");
const input3 = document.getElementById("input3");
const dialog3 = document.querySelector(".dial3");
but5.addEventListener("click", OpenQuestion3);
function OpenQuestion3(){
    dialog3.showModal();
    but6.addEventListener("click", Question3)
}

function Question3(){
    if (input3.value == "Я считаю этот пример: E = mc2" || input3.value  == "Я считаю этот пример: E = mc в квадрате"){
        alert("Правильно!")
        but5s.style.backgroundColor = "green"
        but5.removeEventListener("click", OpenQuestion3)
        dialog3.close();
        otv += 1;
        if(otv == 3){
            exit.style.display = "block";
        }
    }
    else{
        alert("Не правильно!")
    }
}
//=============================================================