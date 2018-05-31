"use strict";

document.addEventListener("DOMContentLoaded",loadScript);

async function loadScript(){

        let jsonObject = await fetch("https://kea-alt-del.dk/kata-distortion/");
        let myJson = await jsonObject.json();


        console.log(myJson);

       

        function show(){

            //console.log(queue)
        
            document.querySelector('.bar').textContent=`${myJson.inQueue}`;
        
           // let queueBar = document.querySelector('.bar').content;
        
        };


        show();
        

};



// function show(queue){

//     //console.log(queue)

//     document.querySelector('.bar').textContent=`${myJson.inQueue}`;

//    // let queueBar = document.querySelector('.bar').content;

// };


setInterval(function(){ 
    loadScript();    
}, 10000);


