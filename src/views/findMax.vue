<template>
<v-app id="MaxApp">
  <div>
      <div> In the box below;input a list of numbers seperated by spaces,</div>
      <v-text-field outlined v-model="inputStr"></v-text-field>
      <div> {{arrayOfInts}}</div>
      <div>the max is {{theMax}}</div>
  </div>
  </v-app>
</template>

<script>
export default {
    data() {
        return {
            inputStr: ''
        }
    },
    computed: {
        arrayOfInts(){
            let a = this.inputStr.split(' ');
            for (let i =0; i<a.length; i++){
                a[i] = parseInt(a[i]);
            }
            return (a)
        }, 
        theMax() {
            let a = this.arrayOfInts;
            let maxi = 0;
            for (let i =0; i<a.length; i++){
                if (a[i]> maxi){
                    maxi= a[i];
                }

            }
            return maxi
        }
    }

}
</script>

<style>
#MaxApp{background-color:lightgoldenrodyellow}

</style>