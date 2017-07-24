'use strict';
let i = 0, random = 0;
let div = document.getElementById('loader');

function fastLoad(){
    if(i<=100){
        i += 10;
        div.style.width = (i) + "%";
        setTimeout("fastLoad()",100);
    } else {
        console.log("Termino el proceso");
    }
}

function mediumLoad(){
    random=Math.random()*10;
    i+=random;
    console.log("Random: "+random," i: "+i);
    if(i>100){
        i = 100;
        div.style.width = (i) + "%";
        return;
    }

    if(i<=100){
        div.style.width = (i) + "%";
        setTimeout("mediumLoad()",100);
    } else {
        console.log("Termino el proceso");
        return;
    }
}

function poorLoad(){
    random = Math.random()*10;
    i+=random;
    console.log("Random: "+random," i: "+i);
    if(i>80){
        if(random%2!=0){
            i -= random;
        } else {
            i += random;
        }
    }

    if(i<=100){
        i=Math.random()*10;
        div.style.width = i + "%";
        setTimeout("poorLoad()",100);
    } else {
        console.log("Termino el proceso");
    }
}

(function(){
    let fast = document.getElementById('fastButton');
    let medium = document.getElementById('mediumButton');
    let poor = document.getElementById('poorButton');

    fast.onclick = function() {
        i=0;
        window.setTimeout("fastLoad()", 100);
    }

    medium.onclick = function() {
        i=0;
        window.setTimeout("mediumLoad()", 100);
    }

    poor.onclick = function() {
        i=0;
        window.setTimeout("poorLoad()", 100);
    }
})();
