

let box = document.getElementsByClassName("box");
let turn = document.querySelector(".turn");
let round="0";
   

//round  function

const checkRound=()=>{

    if(round === "x" ){
        return "0"; 
    }else{
        return "x";
    }     
}
       

//winer function

const winer=()=>{
     let boxtext =document.getElementsByClassName("boxtext");
    
     
        let win = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]


        win.forEach(e => {
          if( ( boxtext[e[0]].innerHTML===boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML===boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML!=="") ){
              turn.innerHTML= "player " + boxtext[e[0]].innerHTML +"  win";
              turn.style.backgroundColor="red";
            
          }
        });
}


//game logic
Array.from(box).forEach(element => {
    element.addEventListener("click", () => {
        let boxtext =element.querySelector(".boxtext");   
        element.addEventListener("click",()=>{
          
            if(boxtext.innerHTML === ''){
                
                round=checkRound();
                boxtext.innerHTML=round;
                turn.innerHTML="Round of player  "+round;
                winer();
                
            }
        })
       
    
    }

    )
})



//reset button
let btn = document.getElementById("btn");
 btn.addEventListener("click",()=>{
    let boxtext =document.getElementsByClassName("boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerHTML='';
    });
   
   turn.innerHTML="Round of player  "+checkRound();
   turn.style.backgroundColor="white";
 
 })
 
 




    



