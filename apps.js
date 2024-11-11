let userscore=0;
let compscore=0;
let drwaasocore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const drwaascorepara = document.querySelector("#draw-score");
const resetButton = document.querySelector("#reset-btn");

const resetGame = () => {
    userscore = 0;
    compscore = 0;
    drwaasocore = 0;

    userscorepara.innerText = userscore;
    compscorepara.innerText = compscore;
    drwaascorepara.innerText = drwaasocore;
    msg.innerText = "Game Reset! Start Again"; // Clear the message or show reset message

    console.log("Game has been reset");
};

resetButton.addEventListener("click", resetGame);


const soundEfect = ()=>{
    const sound = document.querySelector("#sound-effect")
    sound.currentTime = 0;
    sound.play()

}

const showwinner=(userwin,userchoice,computerchoice)=>{
    if(userwin){
       userscore++;
       userscorepara.innerText=userscore;
        console.log("you win")
        msg.innerText=`You Win!! You ${userchoice} bets ${computerchoice}`


    }else
    {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose")
        msg.innerText=`You Loss ${computerchoice} bets ${userchoice}`
    };
}



const drwaa=()=>{
    drwaasocore++;
    drwaascorepara.innerText=drwaasocore;

    console.log("the is game drwaa")
    msg.innerText="Game Is Draw"
}




const gencompchoice = () =>{
    const options=["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() *3 );
    return options[randidx];

}


const playgame = (userchoice) =>{
    console.log("user coice val=",userchoice)
    const computerchoice= gencompchoice();
    console.log("computer choice=", computerchoice);

    if(userchoice === computerchoice){
        drwaa();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = computerchoice === "paper" ? false:true;
        }else if(userchoice === "paper"){
            userwin = computerchoice === "scissors" ? false:true;
        }else{
            userwin = computerchoice === "rock" ? false:true;
        }
        showwinner(userwin,userchoice,computerchoice)
    }
}

choices.forEach((choice) => {
choice.addEventListener( "click", () => {
    soundEfect()
const userchoice=choice.getAttribute("id")
playgame(userchoice);

})


})
