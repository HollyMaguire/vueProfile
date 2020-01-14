<template>
<v-app id="luckApp">
<div>
  <div class="betinfo"> Starting Bet: <input v-model.number="wallet"/></div>
<div align="center"> <v-btn color="green" @click="playGame()"> click here to start playing lucky sevens</v-btn>

</div>
<div id="gameResults">{{this.maxi.cash}}|{{this.maxi.turn}}</div>
<div v-if="gameStarted"> 
    <v-simple-table>
      <tbody>
        <tr >
          <td>Starting Bet</td>
          <td>{{startingBet}}</td>
        </tr>
        <tr >
          <td>Total Rolls Before Broke</td>
          <td>{{ this.turn }}</td>
        </tr>
        <tr >
          <td>Highest Amount Won</td>
          <td>{{ this.maxi.cash}}</td>
        </tr>
        <tr >
          <td>Roll count at highest</td>
          <td>{{ this.maxi.turn}}</td>
        </tr>
      </tbody>
    </v-simple-table>
</div>
</div>
</v-app>
</template>
<script>

export default {
    data() {
        return {
            wallet: 0, nonStop: true, turn: 0, maxi: {cash: 0, turn: 0}, gameStarted: false, startingBet: 0
        }
    },
    methods: {
        rollDice: function () {
            let temp = Math.floor(Math.random() * 6) + 1;
            let val=temp;
    
    
            temp = Math.floor(Math.random() * 6) + 1;
    
            val += temp;
            return val;
        }, 
        playGame: function() {
            if(this.nonStop){
                let temp = 0;
                this.gameStarted = true;
                this.startingBet = this.wallet;
                while(this.wallet>0){
                    this.turn +=1;
            
                    temp = this.rollDice();
                    if (temp == 7){
                        this.wallet += 4;
                    }
                    else {
                        this.wallet += -1;
                    }

                    if (this.wallet > this.maxi.cash){
                        this.maxi.cash = this.wallet;
                        this.maxi.turn = this.turn;
                    }
                }
            }
        }
    }

}
</script>

<style scoped>

h1 {font-size: 2.5em;
text-align:center;}

#luckApp {background-color: lightgreen;}

#gameResults{  border: 1px solid #0d1f2d;
    border-collapse: collapse;
    padding: 5px 10px;
    position:relative;
    width:40%;
    left:30%;
}
.betinfo {text-align:center}
v-app{background-color:lightgreen}

</style>