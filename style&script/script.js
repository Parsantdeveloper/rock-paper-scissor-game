var resultShow=document.getElementById("result");
var userScore=0;
var computerScore=0;

function getComputerChoice()
{
  const choices=['r','p','s'];
  const randNum=Math.floor(Math.random()*3);
  return choices[randNum];
}

function convertTO(letter) {
 if(letter==='r') return document.getElementById("rock").innerHTML;
 if(letter==='p') return  document.getElementById("paper").innerHTML;
 if(letter==='s') return document.getElementById("scissor").innerHTML;
}
function win(userChoice,computerChoice)
{
  userScore++;
 document.getElementById("playerScore").innerHTML=userScore;
document.getElementById("computerScore").innerHTML=computerScore;

 document.getElementById("result").innerHTML=`${convertTO(userChoice)} beats ${convertTO(computerChoice)}. you win!`.fontcolor("green");
}
function lose(userChoice,computerChoice)
{
  computerScore++;
  document.getElementById("playerScore").innerHTML=userScore;
 document.getElementById("computerScore").innerHTML=computerScore;
  
 document.getElementById("result").innerHTML=`${convertTO(userChoice)} loses to ${convertTO(computerChoice)}. you lose!`.fontcolor("red");
 
}
function draw(userChoice,computerChoice)
{
  document.getElementById("result").innerHTML=`${convertTO(userChoice)} and ${convertTO(computerChoice)} are same. its draw!`.fontcolor("white");
}
 
function game(userChoice){
  
  const computerChoice=getComputerChoice();
  switch(userChoice+computerChoice)
  {
    case "rs":
    case "pr":
    case "sp":
       win(userChoice,computerChoice);
      break;
      case "rp":
      case "ps":
        case "sr":
          lose(userChoice,computerChoice);
          break;
          case "ss":
          case "rr":
            case "pp":
              draw(userChoice,computerChoice);
              break ;
  }
}


function rockClick()
{
 game("r");
document.getElementById("play").style="display:none";
}
function paperClick()
{
  game("p");
  document.getElementById("play").style="display:none";
}
function ScissorClick()
{
  game("s");
  document.getElementById("play").style="display:none";
}



