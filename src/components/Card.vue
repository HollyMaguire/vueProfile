<template>
  <v-content>
      <div v-if= "!matched">
      <div @click= "addToArray" v-if="!clicked" class="col"><v-img class="thumbnail img-responsive" :src="require(`../assets/${backImg}.png`)" width="200" height="200"></v-img></div>
      
      <div v-else @click= "addToArray" class="col"><v-img class="thumbnail img-responsive" :src="require(`../assets/${faceImg}.png`)" width="200" height="200"></v-img></div>
      </div>
      <div v-else>
        </div>
  </v-content>
</template>
<script>
import { EventBus } from './eventBus.js';



export default {
    mounted() {
      EventBus.$on('doubleClick', this.onDoubleClick);
      
    },

    props: ['backImg', 'faceImg', 'clicked', 'doubleClicked'],
    methods: {
      onDoubleClick(matchName) {

          setTimeout(() => this.clicked =false, 1000);
          if (matchName == this.faceImg){
            setTimeout(() => this.matched = true, 1000);
            
          }
          
      },
      
      addToArray() {
        this.clicked = !this.clicked
        this.$emit('isClicked', this.faceImg)
        
      }
      
      },
    data () 
    { return{
          matched: false,
           clickedArray: [],

            
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
