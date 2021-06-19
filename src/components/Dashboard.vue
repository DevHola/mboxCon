<template>
  <div >
   <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand class="col-md-5" style="font-family:'Pacifico';font-weight:bold;" >Valhalla<p style="font-size:10px;margin:0;margin-top:0px;">Stay Connected</p></b-navbar-brand>
   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
   <b-collapse id="nav-collapse" is-nav>
      
     <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto col-md-5">
        <button class="btn btn-primary" @click="logout">logout</button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  <div class="container mt-5 p-5">
<h1 class="vido">MBOX Conferencing</h1>
<p>Start a video chat and stay connected to your pair</p>
  </div>
  <form >
     <div class="form-group">
           <label>
               <input  name="room" class="form-control fld" v-model="roomID" type="text" placeholder="RoomGenerator">
               </label>
               <br>
			   
              <router-link  :to="'/videochat/'+this.roomID" class="btn btn-primary">Join Now</router-link>
             
               </div>
             
                
               
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import {v4 as uuidv4 } from 'uuid'
import topbar from '../components/topbar.vue';
export default {
  name: 'Dashboard',
  data () {
    return {
	roomID:uuidv4()
    }
  },
/*  components:{
  topbar
  },*/
  created(){
  if(localStorage.getItem('token')=== null){
   this.$router.push('/login');
  }
  },
  methods:{
      logout(){
	  localStorage.clear();
	  this.$router.push('/login');
	  }
  
  
  }
}
</script>
<style scoped>
.body{
font-family:'Pacifico';
}
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-control{
   outline:none;
   -webkit-box-shadow:none !important;
    box-shadow:none !important;
    height:50;
}
.form-control:focus{
   -webkit-box-shadow:0 3px 10px -2px rgba(0,0,0,0.2) !important;
    box-shadow: 0 3px 10px -2px rgba(0,0,0,0.2) !important;
}



.form-signin input[type="room"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  
}




</style>