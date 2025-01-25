let boxes = document.querySelectorAll(".button");
let resetbtn = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".hide");
let msg = document.querySelector("#msg");

let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 6],
    [6, 7, 8]
];
let count = 0;
const resetgame = () =>{
    turnO = true;
    enablebox ();
    msgContainer.classList.add("hide");
    count = 0;
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        count++;
        if(turnO){
            box.innerText = "O";
            box.style.color= "blue";
            turnO=false;
        }
        else{
            box.innerText = "X";
            box.style.color= "red";
            turnO=true;
        }
        box.disabled = true;
        if(count == 9){
            draw();
        }
        else{
        checkWinner();
        }
    });
});
const disablebox = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enablebox = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebox ();
}


const draw = () => {
    msg.innerText = `Game Draw`;
    msgContainer.classList.remove("hide");
    disablebox ();
}

const checkWinner = () =>{
    for(let pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&pos1!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner is ", pos1);
                if(count==9){
                    draw();
                 }
                 else{
                    
                    showWinner(pos1);
                 }
            }
        }


    }
}

resetbtn.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);
