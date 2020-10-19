var hody = [];
var timer = false;

const buttonj1 = document.getElementById("buttonj1");
const buttonj2 = document.getElementById("buttonj2");
const buttonj3 = document.getElementById("buttonj3");
const buttonj4 = document.getElementById("buttonj4");

     buttonj1.addEventListener("click", function(){
    let jmeno1 = prompt( "Zadej cele jmeno", "hráč");
    console.log (`Zadané jméno je ${jmeno1}  `);
    document.getElementById('jmeno1').innerHTML = `<h1>${jmeno1}</h1>` ;
    
  })   
  
  buttonj2.addEventListener("click", function(){
    let jmeno2 = prompt( "Zadej cele jmeno", "hráč");
    console.log (`Zadané jméno je ${jmeno2} `);
    document.getElementById('jmeno2').innerHTML = `<h1>${jmeno2}</h1>` ;
    
  })   
  buttonj3.addEventListener("click", function(){
    let jmeno3 = prompt( "Zadej cele jmeno", "hráč");
    console.log (`Zadané jméno pro hráče 3 je ${jmeno3} `);
    document.getElementById('jmeno3').innerHTML = `<h1>${jmeno3}</h1>` ;
    
  })   
  buttonj4.addEventListener("click", function(){
    let jmeno4 = prompt( "Zadej cele jmeno", "hráč");
    console.log (`Zadané jméno je${jmeno4}  `);
    document.getElementById('jmeno4').innerHTML =  `<h1>${jmeno4}</h1>` ;
    
  })
  
function animace(){
    var h = Math.ceil(Math.random() * 6);
    document.getElementById('cube').src='img/kostka' + h +  '.png';
    document.getElementById('jmeno').innerHTML = '<p>Hod: ' + h + '</p>';
}

document.getElementById('game').addEventListener('click',
    function(){
        if (!timer){
            timer = setInterval(animace, 100);
            game.innerText = "STOP";
        }else{
            game.innerText = "HRAJ";
            clearInterval(timer)
            timer = false;
            hod();
            console.log(hody);
        }
       
       
    }
);

function suma(cisla) {
    var sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    var max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    var min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}



function hod() {
    var h = Math.ceil(Math.random() * 6);
    hody.push(h);
    document.getElementById('cube').src='img/kostka' + h + '.png';
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Počet hodů: ' + hody.length + '</p>';

        if (suma(hody)<=50){
            document.getElementById('result').innerHTML += 
    
            '<p>Součet hodů: ' + suma(hody) + '</p>';
        }

        else if (suma(hody)>=50){
            console.log("Uz bylo 50 a funguje to");
            alert(`Dnes je ${j}`);

        }
    
    
    document.getElementById('result').innerHTML += 
        '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejnižší hod: ' + minimum(hody) + '</p>';
    return h;
}