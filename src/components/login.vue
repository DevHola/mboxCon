<template>
<div class="">
<topbar/>
 <div class="card-body login">
    <div class="mb-4 val">
        <h4> Sign In Account</h4>
        </div>
<form>   
      
               <div class="form-group">
           <label>
               <b-form-input v-model="email"  type="email" autocomplete="off" placeholder="Enter your email" required></b-form-input>
               </label>
               </div>
             
                <div class="form-group">
           <label>
               <b-form-input   type="password" v-model="password" placeholder="Enter your password" required></b-form-input>
               </label>
                </div>
                <div class="form-group">
           <b-button @click="login" variant="danger">Continue</b-button>
               </div>
               </form>
			   <p>{{error}}</p>
               </div>
            </div>
			
</div>
</template>
<script>
import topbar from '../components/topbar.vue';
import axios from 'axios';
export default{
  
  data(){
      return{
          email:'',
          password:'',
		  error :''
      }
  },
  components:{
  topbar
  },
    created(){
  if(localStorage.getItem('token')!= null){
   this.$router.push('/Dashboard');
  }
  
  
  },
  methods:{
      login(){
	   let user = {
	   email : this.email,
	   password : this.password
	   }
	   axios.post('https://gentle-cove-68355.herokuapp.com/Api/Auth/login',user)
	   .then(res =>{
	   if(res.status === 200){
	   localStorage.setItem('token',res.data.token);
	   this.$router.push('/Dashboard'); 
	   }
	    console.log(res)
	   },err =>{
	    console.log(err.response)
		this.error = "user not found"
	   })
	   console.log(user);
	  
	  
	  }
  
  
  }
}
</script>
<style scoped>
.val{
margin-top:80px;
padding:5px;
}
html,
body {
  height: 100%;
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

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>