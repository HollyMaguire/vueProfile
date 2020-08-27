<template>
  <v-app id="Memory">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <div> 
        <h1> Click on the cards to flip them, then match the images</h1>
    
     </div>
    <div class="row">
        <card @click = "cardsClicked()" backImg = "card" faceImg='d1'></card>
        <card @click = "cardsClicked()" backImg = "card" faceImg='d0'></card>
        <card @click = "cardsClicked()" backImg = "card" faceImg='d3'></card>
        <card @click = "cardsClicked()" backImg = "card" faceImg='d4'></card>
        <card @click = "cardsClicked()" backImg = "card" faceImg='d5'></card>
        <card @click = "cardsClicked()" backImg = "card" faceImg='d6'></card>   
</div>
 <div class="row">
    <card @click = "cardsClicked()" backImg = "card" faceImg='d7'></card>
    <card @clicked = "cardsClicked()" backImg = "card" faceImg='d3'></card>
    <card @clicked = "cardsClicked()" backImg = "card" faceImg='d0'></card>
    <card @clicked = "cardsClicked()" backImg = "card" faceImg='d2'></card>
    <card @clicked = "cardsClicked()" backImg = "card" faceImg='d4'></card>
    <card @clicked = "cardsClicked()" backImg = "card" faceImg='d5'></card>
</div>
<div class="row">
    <card @clicked = "cardsClicked()" backImg = "card" faceImg='d1'></card>
    <card @clicked = "cardsClicked()" backImg = "card" faceImg='d2'></card>
    <card @clicked = "cardsClicked()" backImg = "card" faceImg='d6'></card>
    <card @clicked = "cardsClicked()" backImg = "card" faceImg='d7'></card>
</div>
   
    </v-app>
</template>
<script>
import card from "../components/Card"
export default {
    el: '#Memory',
    methods: {
        cardsClicked(){//card is a string representing the name of the card 
        // eslint-disable-next-line no-console
                    console.log('THERE IS A MATCH');
            // this.clickedArray.push(name);
            // if(this.clickArray.length == 2){
            //     if(this.clickedArray[0] == this.clickedArray[1]){
            //         // eslint-disable-next-line no-console
            //         console.log('THERE IS A MATCH');
            //     }
            //     else {
            //         // eslint-disable-next-line no-console
            //         console.log('THERE IS NO MATCH')
            //     }
            //     this.clickedArray = [];
            // }
        }},
        

 components: {
    card
  },

  
    data () 
    { return{
        clickedArray: [],
            Cards: [
                 {
                    name: 'd0',
                    

                },
                {
                    name: 'd1',
                   

                },
                {
                    name: 'd2',
                   
 
                },
                {
                    name: 'd3',
                    

                },
                {
                    name: 'd4',
                   

                },
                {
                    name: 'd5',
                   

                },
                {
                    name: 'd6',
        

                },
                {
                    name:'d7',
                
                },
            ],
            
    }}
  }
</script>

    
<style scoped>
.FaceImg{
  width: 200;
  height: 200;
  
}
.BackImg{
  width: 200;
  height: 200;
  
}


#Memory {background-color:rgb(121, 241, 235)
}
</style>
