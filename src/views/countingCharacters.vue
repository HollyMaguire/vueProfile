<template>
<v-app  id="countingApp">
  <div>
      Enter your word in the box below:<v-text-field
              outlined v-model="word">rtj
      </v-text-field>
      </div>
      <div>
          The length of your word is {{length}} 
          
    </div>
</v-app>
  
</template>

<script>
export default {
    data() {
        return {
            word: ""
        }
    },
    computed: {
        length() {
            return (this.word.length);
        }
    }

}
</script>

<style scoped>

#countingApp {background-color:rgb(121, 241, 235)
}
</style>
