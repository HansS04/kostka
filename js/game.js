let pocetHodu = [];
let timer = false;
let jmeno1 ="Hráč1";
let jmeno2 ="Hráč2";
let jmeno3 ="Hráč3";
let jmeno4 ="Hráč4";
const buttonj1 = document.getElementById("buttonj1");
const buttonj2 = document.getElementById("buttonj2");
const buttonj3 = document.getElementById("buttonj3");
const buttonj4 = document.getElementById("buttonj4");

buttonj1.addEventListener("click", function () {
     jmeno1 = prompt("Zadej cele jmeno", "hráč");
    console.log(`Zadané jméno je ${jmeno1}  `);
    document.getElementById('jmeno1').innerHTML = `<h1>${jmeno1}</h1>`;

})

buttonj2.addEventListener("click", function () {
     jmeno2 = prompt("Zadej cele jmeno", "hráč");
    console.log(`Zadané jméno je ${jmeno2} `);
    document.getElementById('jmeno2').innerHTML = `<h1>${jmeno2}</h1>`;

})
buttonj3.addEventListener("click", function () {
     jmeno3 = prompt("Zadej cele jmeno", "hráč");
    console.log(`Zadané jméno pro hráče 3 je ${jmeno3} `);
    document.getElementById('jmeno3').innerHTML = `<h1>${jmeno3}</h1>`;

})
buttonj4.addEventListener("click", function () {
     jmeno4 = prompt("Zadej cele jmeno", "hráč");
    console.log(`Zadané jméno je${jmeno4}  `);
    document.getElementById('jmeno4').innerHTML = `<h1>${jmeno4}</h1>`;

})

function animace() {
    let h = Math.ceil(Math.random() * 6);
    document.getElementById('cube').src = 'img/kostka' + h + '.png';

}

document.getElementById('hra').addEventListener('click',
    function () {
        if (!timer) {
            timer = setInterval(animace, 100);
            hra.innerText = "STOP";
        } else {
            hra.innerText = "HRAJ";
            clearInterval(timer)
            timer = false;
            hod();
            console.log(pocetHodu);
        }


    }
);

function suma(cisla2) {
    let sum = 0;
    cisla2.forEach(function (value, index) {
        sum += value;
    })
    if (sum >= 50){
        alert(`Po ${pocetHodu.length} hodech vyhrál hráč ${jmeno1},pro pokračování klikněte na talčítko nová hra.`);
    } 
    return sum;
}

function max(cisla2) {
    let max = 1;
    cisla2.forEach(function (value, index) {
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla2) {
    let min = 6;
    cisla2.forEach(function (value, index) {
        if (value < min) min = value;
    })
    return min;
}

function průměr(sum, count) {
    return (sum / count).toFixed(2);
}



function hod() {
    let h = Math.ceil(Math.random() * 6);
    pocetHodu.push(h);
    document.getElementById('cube').src = 'img/kostka' + h + '.png';
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Počet hodů: ' + pocetHodu.length + '</p>';

    
        document.getElementById('result').innerHTML +=

            '<p>Součet hodů: ' + suma(pocetHodu) + '</p>';
    

 


    document.getElementById('result').innerHTML +=
        '<p>Průměr hodů: ' + průměr(suma(pocetHodu), pocetHodu.length) + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Nejvyšší hod: ' + max(pocetHodu) + '</p>';
    document.getElementById('result').innerHTML +=
        '<p>Nejnižší hod: ' + minimum(pocetHodu) + '</p>';
    return h;
}
/*2.Kostka*/
let pocetHodu2 = [];
let timer2 = false;



function animace2() {
    let h2 = Math.ceil(Math.random() * 6);
    document.getElementById('cube2').src = 'img/kostka' + h2 + '.png';

}

document.getElementById('game2').addEventListener('click', function () {
    if (!timer2) {
        timer2 = setInterval(animace2, 100);
        game2.innerText = "STOP";
    } else {
        game2.innerText = "HRAJ";
        clearInterval(timer2)
        timer2 = false;
        hod2();
        console.log(pocetHodu2);
    }


}
);

function suma2(cisla2) {
    let sum2 = 0;
    cisla2.forEach(function (value, index) {
        sum2 += value;
    })
    if (sum2 >= 50){
        alert(`Po ${pocetHodu2.length} hodech vyhrál hráč ${jmeno2}, pro pokračování klikněte na talčítko nová hra.`)
    } 
    return sum2;
}

function max2(cisla2) {
    let max = 1;
    cisla2.forEach(function (value, index) {
        if (value > max) max = value;
    })
    return max;
}

function minimum2(cisla2) {
    let min = 6;
    cisla2.forEach(function (value, index) {
        if (value < min) min = value;
    })
    return min;
}

function průměr2(sum2, count2) {
    return (sum2 / count2).toFixed(2);
}



function hod2() {
    let h2 = Math.ceil(Math.random() * 6);
    pocetHodu2.push(h2);
    document.getElementById('cube2').src = 'img/kostka' + h2 + '.png';
    document.getElementById('result2').innerHTML = '<p>Hod: ' + h2 + '</p>';
    document.getElementById('result2').innerHTML +=
        '<p>Počet hodů: ' + pocetHodu2.length + '</p>';

    
        document.getElementById('result2').innerHTML +=

            '<p>Součet hodů: ' + suma2(pocetHodu2) + '</p>';
    

 


    document.getElementById('result2').innerHTML +=
        '<p>Průměr hodů: ' + průměr(suma2(pocetHodu2), pocetHodu2.length) + '</p>';
    document.getElementById('result2').innerHTML +=
        '<p>Nejvyšší hod: ' + max2(pocetHodu2) + '</p>';
    document.getElementById('result2').innerHTML +=
        '<p>Nejnižší hod: ' + minimum2(pocetHodu2) + '</p>';
    return h2;
}
/*3.Kostka*/

let pocetHodu3 = [];
let timer3 = false;



function animace3() {
    let h3 = Math.ceil(Math.random() * 6);
    document.getElementById('cube3').src = 'img/kostka' + h3 + '.png';
}

document.getElementById('game3').addEventListener('click', function () {
    if (!timer3) {
        timer3 = setInterval(animace3, 100);
        game3.innerText = "STOP";
    } else {
        game3.innerText = "HRAJ";
        clearInterval(timer3)
        timer3 = false;
        hod3();
        console.log(pocetHodu3);
    }


}
);

function suma3(cisla3) {
    let sum3 = 0;
    cisla3.forEach(function (value, index) {
        sum3 += value;
    })
    if (sum3 >= 50){
        alert(`Po ${pocetHodu3.length} vyhrál hráč ${jmeno3}, pro pokračování klikněte na talčítko nová hra.`);
    }
    return sum3;
}

function max3(cisla3) {
    let max = 1;
    cisla3.forEach(function (value, index) {
        if (value > max) max = value;
    })
    return max;
}

function minimum3(cisla3) {
    let min = 6;
    cisla3.forEach(function (value, index) {
        if (value < min) min = value;
    })
    return min;
}

function průměr3(sum3, count3) {
    return (sum3 / count3).toFixed(2);
}



function hod3() {
    let h3 = Math.ceil(Math.random() * 6);
    pocetHodu3.push(h3);
    document.getElementById('cube3').src = 'img/kostka' + h3 + '.png';
    document.getElementById('result3').innerHTML = '<p>Hod: ' + h3 + '</p>';
    document.getElementById('result3').innerHTML +=
        '<p>Počet hodů: ' + pocetHodu3.length + '</p>';

    
        document.getElementById('result3').innerHTML +=

            '<p>Součet hodů: ' + suma3(pocetHodu3) + '</p>';
    

 


    document.getElementById('result3').innerHTML +=
        '<p>Průměr hodů: ' + průměr3(suma3(pocetHodu3), pocetHodu3.length) + '</p>';
    document.getElementById('result3').innerHTML +=
        '<p>Nejvyšší hod: ' + max3(pocetHodu3) + '</p>';
    document.getElementById('result3').innerHTML +=
        '<p>Nejnižší hod: ' + minimum3(pocetHodu3) + '</p>';
    return h3;
}
/*kostka 4*/
let pocetHodu4 = [];
let timer4 = false;



function animace4() {
    let h4 = Math.ceil(Math.random() * 6);
    document.getElementById('cube4').src = 'img/kostka' + h4 + '.png';
}

document.getElementById('game4').addEventListener('click', function () {
    if (!timer4) {
        timer4 = setInterval(animace4, 100);
        game4.innerText = "STOP";
    } else {
        game4.innerText = "HRAJ";
        clearInterval(timer4)
        timer4 = false;
        hod4();
        console.log(pocetHodu4);
    }


}
);

function suma4(cisla4) {
    let sum4 = 0;
    cisla4.forEach(function (value, index) {
        sum4 += value;
    })

 if (sum4 >= 50){
     alert(`Po ${pocetHodu4.length} hodech  vyhrál hráč ${jmeno4},pro pokračování klikněte na talčítko nová hra.`)
 }    
    return sum4;
}

function max4(cisla4) {
    let max = 1;
    cisla4.forEach(function (value, index) {
        if (value > max) max = value;
    })
    return max;
}

function minimum4(cisla4) {
    let min = 6;
    cisla4.forEach(function (value, index) {
        if (value < min) min = value;
    })
    return min;
}

function průměr4(sum4, count4) {
    return (sum4 / count4).toFixed(2);
}



function hod4() {
   
    let h4 = Math.ceil(Math.random() * 6);
    pocetHodu4.push(h4);
    document.getElementById('cube4').src = 'img/kostka' + h4 + '.png';
    document.getElementById('result4').innerHTML = '<p>Hod: ' + h4 + '</p>';
    document.getElementById('result4').innerHTML +=
        '<p>Počet hodů: ' + pocetHodu4.length + '</p>';

    
      
        document.getElementById('result4').innerHTML +=

            '<p>Součet hodů: ' + suma4(pocetHodu4) + '</p>';
           
          
 


    document.getElementById('result4').innerHTML +=
        '<p>Průměr hodů: ' + průměr4(suma4(pocetHodu4), pocetHodu4.length) + '</p>';
    document.getElementById('result4').innerHTML +=
        '<p>Nejvyšší hod: ' + max4(pocetHodu4) + '</p>';
    document.getElementById('result4').innerHTML +=
        '<p>Nejnižší hod: ' + minimum4(pocetHodu4) + '</p>';
        
    return h4;
} 


/*Vyhra*/ 

if(suma4(suma4)>=50){
    alert()
}
