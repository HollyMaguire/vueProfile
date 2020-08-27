<template>
 <v-app id="diceApp">
  <body class="body">
        
<div  class="dice">{{dice1}}</div>
<div class="dice">{{dice2}}</div>

<v-btn epressed small color="primary" @click="rollDice()">Roll the Dice</v-btn>

<h2 >results: {{results}}</h2>
</body>
</v-app>
</template>


<script>
export default {
  data() {
    return {
      dice1: '', dice2: '', results: ''
    }
  },
  methods: {
    rollDice() {
      this.dice1 = Math.floor(Math.random()*6)+1;
      this.dice2 = Math.floor(Math.random()*6)+1;
      this.results = this.dice1 + this.dice2;
    } 
  }

}
</script>

<style>
#diceApp{background-color:darkcyan}

.dice{

width: 60px;
background:lime;
border:blue 2px solid;
padding:10px;
font-size:24px;
text-align:center;
margin:5px;
}
.body{background-color: darkcyan;}

</style>
