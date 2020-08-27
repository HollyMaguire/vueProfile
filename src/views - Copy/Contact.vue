<template>
 <v-app id="contactApp">
    <head> 
        <title>Casa De Delicious</title>	
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">  
  </head>  
  <header>
            <h1 class="name">Casa De Delicious</h1>
            <hr/>
        </header>
  <body>
        <div class="navBar">
           <nav> 
            <v-btn color="green" ><router-link :to="{ name: 'restaurant'}">Restaurant <i class="fa fa-home"></i></router-link></v-btn>
            <v-btn color="green" id="a1"> <router-link :to="{ name: 'Menu'}">Menu</router-link></v-btn>
            <v-btn color="green" id="a2"> <router-link :to="{ name: 'Contact'}">Contact Us</router-link></v-btn>
        </nav>
   </div>

        <v-form v-model="valid">
    <v-container class="contactContainer">
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="phoneNumber"
            :rules="phoneRules"
            :counter="10"
            label="Phone number"
            required
          ></v-text-field>
        </v-col>
      </v-row>

 <strong>Reason For Inquiry</strong>: <select name="Reason for Inquiry" class="col-md-4 mb-3 row">
                <option value="Catering">Catering</option>
                <option value="Private Party">Private Party</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
            </select> <br/>
          
            <div Id="AdditionalInfo"  class="form-group row">
              <label for="comment">Additional Information:</label>
              <textarea class="form-control" rows="3" id="comment"></textarea>
              </div>


 <p>Have you ever been here before?</p>   
    <v-radio-group v-model="row" row>
        <v-radio label="No" value="No"></v-radio>
        <v-radio label="Yes" value="Yes"></v-radio>
      </v-radio-group>
  
            <v-row><v-col>
        
            <div id=dayBoxes  class="row">
               <strong> Best days to contact you:</strong>
            <v-checkbox label="Monday"></v-checkbox>
            <v-checkbox label="Tueday"></v-checkbox>
            <v-checkbox label="Wednesday"></v-checkbox>
            <v-checkbox label="Thursday"></v-checkbox>
            <v-checkbox label="Friday"></v-checkbox>
              </div>
              </v-col></v-row>
    <button id=sendRequest onclick="validateDays()" class="btn btn-primary" type="submit">Send request</button>
        </v-container></v-form>
        
    <hr/>
        <footer>
            <div>1234 Madeup lane, Dallas, Texas, 75234 </div>
            <div>328-579-5555</div>
            
            </footer>
    </body> 
</v-app>
</template>

<script>
export default { data(){return {
            obj: null, 
            obj1: {name: 'monday'}, 
            obj2: {name: 'tuesday'},
            obj3: {name: 'wednesday'},
            obj4: {name: 'thursday'},
            obj5: {name: 'friday'}
        }
    }
    
}
</script>

<style scoped>

nav {
    border-top: thin #5b7d87 solid;
    border-bottom: thin #5b7d87 solid;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: lightgrey;
}
header, footer {
 text-align: center; 
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
  
.contactContainer{background-color: lightgreen}
#contactApp {
    background-color: green
    }
 #AdditionalInfo{ width:35% }
 #beenHerebefore{ margin-left: 33%;}
 #dayBoxes{ margin-left: 33%;}
 #sendRequest{margin-left: 48%}
 #homebtn{ position:relative;left:0;top:0;}
 #a1 { position:relative;left:3%;top:0;}
  #a2{ position:relative;left:6%;top:0;}
</style>
