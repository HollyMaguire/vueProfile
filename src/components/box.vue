<template>
    <div @click="$emit('click', this.name)" class="box">
      <span>
       
        {{ value }}
      </span>
    </div>
</template>

<script>
  export default {
    props: {
      name: String, value: String
    }
    
  }
</script>
<style>
  .box {
    width: 150px;
    height: 150px;
    border: 8px solid black;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #X {
    color:rgb(37, 231, 31);
  }
  #O {
    color:grey;
  }
  #X,#O {
    position: relative;
    top: -6px;
    font-weight: bold;
    font-size: 48px;
  }
</style>