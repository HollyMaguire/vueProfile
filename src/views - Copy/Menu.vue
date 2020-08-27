<template>
  <v-app Id="menuBody">
      <head> 
        <title>Casa De Delicious</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head> 
    <header>
            <h1 class="name" >Casa De Delicious</h1>
            <hr/>
        </header>
        <div class="navBar">
           <nav>  
         <v-btn color="green"><router-link :to="{ name: 'restaurant'}">Restaurant <i class="fa fa-home"></i></router-link></v-btn>
            <v-btn color="green" id="a1"> <router-link :to="{ name: 'Menu'}">Menu</router-link></v-btn>
            <v-btn color="green" id="a2"> <router-link :to="{ name: 'Contact'}">Contact Us</router-link></v-btn>           
        </nav>
        </div>
    <body class="menu">
            <v-container>
                    <v-row>
                      <div class="col-sm">
                            <p><strong class="menuItemName">Burger and Fries</strong> <br/>  An American Classic! <br/> Your choice-with or without cheese <br/>
                                Pickle, onion tomato, and lettuce Served with our famous thick-cut French fries
                                   <br/> $7.95  </p>
                      </div>
                      <div class="col-sm">
                            <p ><strong class="menuItemName">Hot dog and Chips </strong> <br/>
                                A Summer Classic! <br/>
                                Your choice-white or wheat bun <br/>
                                Relish, mustard and ketchup served without house-made chips <br/>
                                $7.95
                            </p>
                      </div>
                      <div class="col-sm">
                            <p><strong class="menuItemName">Italian Sausage and Peppers</strong> <br/>
                                An All-Time Favorite!<br/>
                                    Your choice-mild or spicy Cole Slaw <br/>
                                Served with garlic mashers <br/>
                                $10.95
                        </p>
                      </div>
                  </v-row>
            </v-container>
            <v-container>
                            <div class="col-sm" Id="bottom1">
                                    <p><strong class="menuItemName">Tenderloin Sandwich <br/>and Chips</strong> <br/>Really Hits the Spot!<br/>Plain or Sesame Seed Bun<br/>
                                        Pickle, onion tomato, and lettuce<br/>Served with our house-made chips 
                                         <br/> $8.95  </p>
                            </div>
                            <div class="col-sm" Id="bottom2">
                              <p ><strong class="menuItemName">House Salad</strong> <br/>
                                On the Lighter Side <br/>
                                Your choice-with or without cheese<br/>
                                Iceberg lettuce, tomatoes, peppers<br/>
                                Thousand Island or Ranch <br/>
                                Dressing Served with a dinner roll<br/>
                                    $6.95
                                </p>
                            </div>
                            <div class="col-sm" Id="bottom3">
                                    <p ><strong class="menuItemName">Brisket Sandwich and Fries</strong> <br/>
                                        A Taste of Texas! <br/>
                                        Smoked Brisket on thick-cut<br/>
                                        Texas Toast and Cole Slaw<br/>
                                        Served with our famous thick-cut French fries<br/>
                                            $7.95
                                    </p>
                            </div>
                         
             </v-container>    
             >          
                  <v-container id="drinkTable">
                      <v-row>    
                                <table class="table table-striped">
                                          <tr><th>Beverages</th></tr>
                                <tbody>
                                          <tr><td>Root Beer</td><td>$3.00</td></tr>
                                          <tr><td>Bottled Water</td><td>$1.25</td></tr>
                                          <tr><td>Lemonade</td><td>$1.00</td></tr>
                                          <tr><td>Iced Tea</td><td>$1.25</td></tr>
                                 </tbody>
                                  </table> 
                        </v-row>
                 </v-container>
                                    
    <footer id="footerMenu" align="center" >
 <div>1234 Madeup lane, Dallas, Texas, 75234 </div>
            <div>328-579-5555</div>
      </footer>
     </body> 
 </v-app>       
</template>

<script>

export default {

}
</script>

<style scoped>
header, footer {
 text-align: center; 
  background-color: lightgrey;
}
#menuBody{background-color: lightgrey}
.toprow {float:left; width:32%;text-align:center;
}

#bottom1{ 
    position: absolute;left:12%;top:40%;float:left; width:32%; text-align:left;
}

#bottom2{
    position:absolute;left:37%;top:40%;float:left; width:32%;text-align:left;
}

#bottom3{
    position:absolute;left:62%;top:40%;float:left; width:32%;text-align:left;
}
.basicinfo {
    text-align: center;}

.name {
    font-family: 'Roboto', sans-serif;
}

.menu {
    background-color:lightgray;
}
.menuItemName{
    font-size: 25px;
}
.mainBody{background-color: lightgreen;
}
label {font-weight: bold;}

#drinkTable {
    position:absolute;top:65%;float:left;left:15%;text-align:center;
}
#footerMenu {position:absolute;bottom:0;width:100%}
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
  
 #a1 { position:relative;left:3%;top:0;}
#a2{ position:relative;left:6%;top:0;}
  #footer76{
    width:100%;
  }

</style>