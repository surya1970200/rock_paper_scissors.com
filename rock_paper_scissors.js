// user name

let b = document.querySelector(".b");
let name = document.querySelector('.s1');
function action(){
    let  n =prompt("Enter your name");
    name.innerHTML = n;
}
b.addEventListener("mousemove",action,{once:true});


// reset

let tryagain = document.querySelector(".tryagain");

 tryagain.onclick = () =>{
    s3.innerHTML="0";
    machine.innerHTML = "--";
    wl.innerHTML = "Start the Game!!!!"
 }

// get result
let s3 = document.querySelector(".s3");
let totalresult=0;
let result=0;
let winlose = 0;
let wl = document.querySelector(".wl");

function getresult(hc,mc){
    if(hc == mc){
        result =0;
        winlose = "It's a Draw!";
    }
    else if(hc == "rock" && mc == "paper"){
        result= -1;
        winlose = "You Lose!";
    }
    else if(hc=="rock" && mc=="scissors"){
        result = 1;
        winlose = "You Win!";
    }
    else if(hc=="paper" && mc=="scissors"){
        result = -1;
        winlose = "You Lose!"; 
    }
    else if(hc=="paper" && mc=="rock"){
        result = 1; 
        winlose = "You Win!";
    }
    else if(hc=="scissors" && mc=="paper"){
        result = 1; 
        winlose = "You Win!";
    }
    else if(hc=="scissors" && mc=="rock"){
        result = -1;
        winlose = "You Lose!"; 
    }  
    console.log("result:"+ result);
    totalresult+=result;
    s3.innerHTML=totalresult;
    wl.innerHTML = winlose;

}


// machine choice
let machine = document.querySelector(".machinescore");

function machinechoice(){
    let c = ["rock","paper","scissors"];
    i=Math.floor(Math.random() * 3);
    console.log("machine choice:",c[i]);
    mc=c[i];
    machine.innerHTML = mc;
    getresult(hc,mc);
}

// human choice

let rock = document.querySelector('.rock');
rock.onclick = () =>{
    hc='rock';
    console.log("human choice:"+hc);
    machinechoice()
}
let paper = document.querySelector('.paper');
paper.onclick = () =>{
    hc='paper';
    console.log("human choice:"+hc);
    machinechoice()
}
let scissors = document.querySelector('.scissors');
scissors.onclick = () =>{
    hc='scissors';
    console.log("human choice:"+hc);
    machinechoice()
}

