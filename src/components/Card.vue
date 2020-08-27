<template>
  <v-content>
      
      <v-div @click= "clicked = !clicked" v-if="!clicked" class="col"><v-img class="thumbnail img-responsive" :src="require(`../assets/${backImg}.png`)" width="200" height="200"></v-img></v-div>
      
      <v-div v-else @click= "clicked = !clicked" class="col"><v-img class="thumbnail img-responsive" :src="require(`../assets/${faceImg}.png`)" width="200" height="200"></v-img></v-div>
  </v-content>
</template>
<script>
export default {
    
    props: ['name', 'backImg', 'faceImg'],
    
    data () 
    { return{
           

            clicked: false
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
