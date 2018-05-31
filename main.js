"use strict";

document.addEventListener("DOMContentLoaded", loadScript);

async function loadScript() {

    let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
    let myJson = await jsonObject.json();


    console.log(myJson);



    function show() {

        //console.log(queue)

        document.querySelector('.barnumber').textContent = `There are ${myJson.inQueue} people in line.`;
        document.querySelector('.bar').style.width = `${myJson.inQueue}0px`;


        // let queueBar = document.querySelector('.bar').content;

    };


    show();


};


setInterval(function () {
    loadScript();
}, 10000);