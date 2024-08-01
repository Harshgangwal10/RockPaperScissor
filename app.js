let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepar=document.querySelector("#user-score");
const compScorepar=document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click" ,()=>{
       const UserChoice=choice.getAttribute("id");
       
       playGame(UserChoice);
   
    });
   });

   const playGame=(UserChoice) =>{
   
    //Generate computer choice;
    const compchoice=genComputerchoice();
  
  
    if(UserChoice===compchoice){
      //draw game
      drawgame();
    }else{
      let userwin=true;
      if(UserChoice==="rock"){
          //scissor,paper
          userwin= compchoice==="paper" ? false : true;
      }else if(UserChoice==="paper"){
          //rock,scissor
          userwin= compchoice==="scissors" ?false :true;
      }else if(UserChoice==="scissors"){
              userwin=compchoice==="rock" ?false :true;
          
          
      }
      showWinner(userwin,UserChoice,compchoice);
    }
  
    
  };

 
  

const genComputerchoice=()=>{
    const options =["rock" ,"paper" ,"scissors"];
   const randomIdx=Math.floor(Math.random() *3 );
   return options[randomIdx];

};

const drawgame =()=>{
    console.log("Gams was Draw");
    msg.innerText="Game was Draw .play Again!";
     msg.style.backgroundColor="#081b31"
}


const showWinner =(userwin,userchoice,compchoice) =>{
    if(userwin){
        userScore++;
        userScorepar.innerText=userScore;
        msg.innerText=`You win ! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
       comScore++;
       compScorepar.innerText=comScore;
        msg.innerText=`You lost. ${compchoice} beats  Yours ${userchoice}`;
        msg.style.backgroundColor="red"
    }
};






