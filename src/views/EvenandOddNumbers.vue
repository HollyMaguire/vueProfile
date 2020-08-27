<template>
    <v-app id="NumbersApp">
  <body>
  <header>
    <h1>Even and Odd numbers</h1>
  </header>
  <v-container>
    <v-row>
      <v-col>
  <div  v-for="i in 100" :key="i" >
    <div v-if="i % 2 ==0">{{i}}</div>
    </div>
      </v-col>
      <v-col>
  <div  v-for="i in 100" :key="i" >
    <div v-if="i % 2 ==1">{{i}}</div>
    </div>
      </v-col>
    </v-row>
  </v-container>
</body>
</v-app>
</template>

<script>


</script>


<style scoped>
#NumbersApp {
    background-color:lightsalmon
}

</style>

