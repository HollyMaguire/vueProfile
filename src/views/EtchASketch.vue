<template>
<v-app id="etchASketch">
    <body>
    <h1>Test</h1>
    <div></div>
    <div v-for="i in 8" :key="i">
      <div id="box" v-for="j in 8" :key="j"> 
        </div>
      <br>
      </div>
    
    </body>
  

</v-app>
</template>

<script>
for (let i = 0; i < 16; i++)
   for (let j = 0; j <16; j++){
     let box = document.createElement('div')
     box.className = 'box'
     document.body.appendChild(box)
   }
   let br = document.createElement('br')
   document.body.appendChild(br)
   //methods(): {
     
  //data() 
       
  
</script>


  
 

<style scoped>
 #box {
  display: inline-block;
  background-color:green;
  border:1px solid black;
  width: 25px;
  height: 25px;
  }

#output { font-size: 3.5em;
text-align:center;
}

h1 {font-size: 1.0em;
text-align:center;
background-color: rgb(236, 147, 236);
}

text {font-size: large;}
.etchAsketch {background-color: rgb(236, 147, 236);}

</style>