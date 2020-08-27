<template>
  <body class="body" onload="toggleTracking()" @mousemove="getMousePosition" @click="toggleMouse"
            onmousemove="updateMousePosition();">
       <h1>Display the Mouse Position</h1>
    <p>Click anywhere on the page to toggle the mouse position tracking.</p>
	
    <div>
         Mouse tracking: <span id="trackingStatus">{{trackingStatus}}</span>
    </div>
            <fieldset  id=field>
            <label>Mouse X:</label><label id="mousePositionX">{{positionX}}</label>
            <label>Mouse Y:</label><label id="mousePositionY">{{positionY}}</label>

        </fieldset>
</body>
</template>

<script>


export default {
    data() {
        return {
            doTrack: true,
            positionX: null,
            positionY: null
        }
    },
    methods: {
        getMousePosition(event){
            if(this.doTrack){
            this.positionX = event.clientX;
            this.positionY = event.clientY;
            }
            
        }, 
        toggleMouse(){
            this.doTrack = !this.doTrack;
        }
        
    }, 
    computed: {
        trackingStatus: function() {
            if(this.doTrack){
                return ("TRACKING");
            }
            else {
                return ("NOT TRACKING");
            }
        }
    }

}
</script>

<style scoped>

#field{ min-width: 0;
    max-width: 97%;
    width: 97%;
    Height:580px
}

v-app{background-color: #AFEEEE;
}
nav a {
    background-color: #5b7d87;
    color: #fef9ff;
    padding: 8px;
    border: thin solid #0d1f2d;
    text-decoration: none;
    text-align: center;
    display: block;
    margin: 20px;
    width: 100px;
    float: left;
}
</style>