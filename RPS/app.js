let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame = () =>{
     msg.innerText =" Game is draw! play again";
     msg.style.backgroundColor="rgb(26, 15, 46)";
}

const showwinner =(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText =userscore;
        msg.innerText =`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText =compscore;
        msg.innerText =`You lost! ${compchoice} beats Your ${userchoice}`;;
        msg.style.backgroundColor="red";
    }
}

const playgame = (userchoice) => {
    
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawgame()
    }else {
        let userwin = true;
        if(userchoice === "rock"){
            //scissors,paper
        userwin = compchoice ==="paper"? false : true;
        } else if(userchoice === "paper"){
            //rock,paper
            userwin=compchoice === "scissors" ? false:true;
        }else{
            //rock,paper
            userwin=compchoice ==="rock"? false: true;

        }
        showwinner(userwin,userchoice,compchoice);
        
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    });
});
