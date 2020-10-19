var hody = [];
var timer = false;


function animace(){
    var h = Math.ceil(Math.random() * 6);
    document.getElementById('cube').src='img/kostka' + h +  '.png';
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
    document.getElementById('result').innerHTML += 
        '<p>Součet hodů: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Průměr hodů: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Nejvyšší hod: ' + minimum(hody) + '</p>';
    return h;
}