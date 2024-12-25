let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgcont = document.querySelector(".msgcont");
let newbtn = document.querySelector(".newbtn");
let turnO = true;
let count = 0;

let array = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
        turnO = true;
        count = 0;
        enable();
        msgcont.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;

        count++;

       isWinner = checkWinner();

       if(count==9 && !isWinner){
        gamedraw();
       }

    });
});

let gamedraw = () =>{
    msg.innerText = "Game Drawn start a new game";
    msgcont.classList.remove("hide");
    disable();

}

let checkWinner = () => {
    for(let value of array){
        let p1 = boxes[value[0]].innerText;
        let p2 = boxes[value[1]].innerText;
        let p3 = boxes[value[2]].innerText;
        if(p1!="" & p2!="" && p3!=""){
        if(p1===p2 && p2==p3){
            showWinner(p1);
            return true;
        }
        }
    }
  
} 


let showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} wins the gameplay`;
    msgcont.classList.remove("hide");
    disable();

};

let disable = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



reset.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);