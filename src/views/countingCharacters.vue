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

#countingApp {background: rgb(5,168,163);
background: linear-gradient(0deg, rgba(5,168,163,1) 0%, rgba(69,195,143,1) 30%, rgba(96,231,213,1) 51%);
}
</style>
