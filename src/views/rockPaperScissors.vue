<template>
<v-app Id="rockPaperScissors">
     <h1>Winning Rules of the Rock paper scissor game as follows:
      Rock vs paper, paper wins
      Rock vs scissor, Rock wins 
      paper vs scissor, scissor wins</h1>

<h1>Click on your choice to start the game</h1>
 <div id="output" v-if="choice != '' && computer != ''">
      {{decideWinner}}
    </div>
<div class="row"> 

  <div @click="setChoices(`rock`)" class="col"><v-img src="../../src/assets/Rock.png" width="300" height="300"></v-img></div>

   <div @click="setChoices(`paper`)"  class="col"><v-img src="../../src/assets/paper.png" width="300" height="300"></v-img></div>
   
    <div @click="setChoices(`scissors`)"  class="col"><v-img src="../../src/assets/scissors.png" width="300" height="300"></v-img></div>

   
    </div>
  
</v-app>
</template>

<script>
         export default {
             el: '#rockPaperScissors',
    
    components: {
        //choice
  },
  methods: {
      setChoices(playerChoice) {
          this.playerChoice = playerChoice;
          let randomNumber  = Math.floor(Math.random() * 3)
            if (randomNumber === 0) {
                this.computerChoice = "rock";
      } else if (randomNumber === 1) {
        this.computerChoice = "paper";
      } else {
        this.computerChoice = "scissors";
      }
      }
  },

computed:{
    
   decideWinner() {
    
      let choice = this.playerChoice ;
      let getComputerChoice = this.computerChoice;
    
      if (choice === getComputerChoice) {
        return "Tie!";
      }
      
      if (choice === "rock") {
        if (getComputerChoice === "paper") {
          return "If it were up to me rock should always win, the computer picked paper though.";
        } else {
          return "Rock wins, all others are inferior!" ;
        }
      }
      
      if (choice === "paper") {
        if (getComputerChoice === "scissors") {
          return "Loser!";
        }else{
          return " You won!";
        }
        
      }
      
      if (choice === "scissors") {
        if (getComputerChoice === "rock") {
          return "You lose your siscors were crushed";
        }
        else {
          return "You won!";
        }
      } 
      return ("did not hit any of the condition error");
    }
    
  },


  data() {
        return {
           choices: {
               rock:'Rock.png',
               paper:'paper.png',
               scissors:'scissors.png'} ,
            playerChoice:"",
            computerChoice:""
        }
    }
   }
  
     </script>


  
 <style scoped>

#output { font-size: 3.5em;
text-align:center;
}

h1 {font-size: 1.0em;
text-align:center;
}

text {font-size: large;}
#rockPaperScissors {background: rgb(136,128,56);
background: linear-gradient(90deg, rgba(136,128,56,0.9251050762101716) 29%, rgba(212,189,2,1) 100%);}

</style>
