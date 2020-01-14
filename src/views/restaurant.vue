<template>
  <v-app> 
        <head>
        
    <div class="navBar"> 
        </div>
        <title>Casa De Delicious</title>	
       <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 
          
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></head>
<header >
   <meta name="viewport" content="width=device-width, initial-scale=1">
        <div class="alert">
            <span class="closebtn" @click="this.parentElement.style.display='none';">&times;</span> 
            <strong>Info!</strong> This site is best viewed with JavaScript enabled.
          </div>
            <h1 class="name">Casa De Delicious</h1>
         
        </header>
           <nav> 
                <div>
                        <v-btn color="green"><router-link :to="{ name: 'restaurant'}">Restaurant <i class="fa fa-home"></i></router-link></v-btn>
                         <v-btn color="green" id="a1"> <router-link :to="{ name: 'Menu'}">Menu</router-link></v-btn>
                         <v-btn color="green" id="a2"> <router-link :to="{ name: 'Contact'}">Contact Us</router-link></v-btn>
                  </div>
        </nav>
    <body>
  <div class="mainBody">
            <div class="container">
                    <div class="jumbotron row">
                      <h2>New location Opening on 03/03/2020, at 8888 MadeUp Street, Fort Worth, Texas!</h2>
         </div>
         
              <v-carousel>
    <v-carousel-item
      
      src= "../../src/assets/newLocation.png"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    <v-carousel-item
      
      src= "../../src/assets/seasonalMenuR.png"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
    <v-carousel-item
      
      src= "../../src/assets/specialBrew.png"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</div>
        </div>
        <div class="mainBody">
         <div align="center">
           <img src=../../src/assets/sirOinkers.png></div>
        <p>At Casa De Delicious we have great food with fair prices. We specilize in greasy meats, we do have salad too though. We pride ourselves on our fun, family environment. We feed the leftovers to our mascot Sir Oinkers, so nothing goes to waste. He stays out back, guest can take photos with him and he is great with kids! Where else could you go and eat sausage and then turn around and play with a pig and feed him your left overs, nowhere that is where. So eat and have fun at Casa De Delicious, a restaurant unlike any other. </p>
<hr/>
    </div></body>
       <footer>
           <div>1234 Madeup lane, Dallas, Texas, 75234 </div>
           <div>328-579-5555</div>
           </footer>
</v-app>
     
 
</template>

<script>
export default {
  data() {
    return {
      items: [
          {
            src: "../../src/assets/newLocation.jpg",
          },
          {
            src: "../../src/assets/seasonalMenuR.png",
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          }
          ]
    }
  }



}
</script>
<style scoped>
header, footer {
 text-align: center; 
 background-color:lightgrey;

}
img {
    height:150px;
    /* Width was set in orignal image to 400px before import, and I had used <div align:"center"> to get image in the center. */
}
.toprow {float:left; width:32%;text-align:center;
}

.bottom1{ 
    position: absolute;left:0;top:40%;float:left; width:32%; text-align:center;
}

.bottom2{
    position:absolute;left:32%;top:40%;float:left; width:32%;text-align:center;
}

.bottom3{
    position:absolute;left:63%;top:40%;float:left; width:32%;text-align:center;
}
.basicinfo {
    text-align: center;}

.name {
    font-family: 'Roboto', sans-serif;
}

.mainBody{background-color: lightgreen;
}

label {font-weight: bold;}

.menuFooterT {position:absolute;bottom:5%;width:100%

}
.menuFooterB {position:absolute;bottom:0;left:40%

}
#homebtn{ position:relative;left:0;top:0;}
nav {
    border-top: thin #5b7d87 solid;
    border-bottom: thin #5b7d87 solid;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: lightgrey;
}
nav .btn {
    background-color: #5b7d87;
    color: #fef9ff; 
}
    a:hover {
        font-weight: bold;
        text-decoration: none;
      }
    
    a:visited{   
        color: rgb(86, 235, 86);
    }
    a:active  {
        font-weight: bold;
        text-decoration: none;
        color: black;
        } 
.jumbotron {
    font-weight: bold;
    color:teal
}
#home {height:60px; width:70px}

.alert {
    padding: 20px;
    background-color:green;
    color: white;
  }
  
  .closebtn {
    margin-left: 15px;
    color:darkblue;
    font-weight: bold;
    float: right;
    font-size: 30px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .closebtn:hover {
    color: green;
  }
  #AdditionalInfo{ width:35% }
  #beenHerebefore{ margin-left: 33%;}
 #dayBoxes{ margin-left: 33%;}
 #sendRequest{margin-left: 48%}
 #a1 { position:relative;left:3%;top:0;}
  #a2{ position:relative;left:6%;top:0;}
  #footer76{
    width:100%;
  }



</style>