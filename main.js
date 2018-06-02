"use strict";

document.addEventListener("DOMContentLoaded", loadScript);

async function loadScript() {

    let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
    let myJson = await jsonObject.json();


    console.log(myJson);



    function show() {

        //console.log(queue)

        document.querySelector('.barnumber').textContent = `Number of people in line: ${myJson.inQueue}`;
        document.querySelector('.bar').style.width = `${myJson.inQueue}0px`;

            if (myJson.inQueue>20){
                document.querySelector('.text').textContent = `You'll turn to dust in this queue.. Go for a cocktail instead.`
                document.querySelector('.bar').style.backgroundColor = "red";

            } else if (myJson.inQueue<7){
                document.querySelector('.text').textContent = `Hurry up! It's now or never!`
                document.querySelector('.bar').style.backgroundColor = "green";

            } else {
                document.querySelector('.text').textContent = `Think about a good conversation topic to entertain the queue while waiting.`
                document.querySelector('.bar').style.backgroundColor = "yellow";

            }

       

    };


    show();


};


setInterval(function () {
    loadScript();
}, 10000);