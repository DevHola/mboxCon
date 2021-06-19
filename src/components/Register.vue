<template>
<div class=" register">
<topbar/>
    <div class="mb-4 mt-5">
        <h4>Create  Account</h4>
        </div>
<form>   
      
               <div class="form-group">
           <label>
               <b-form-input v-model="email"  type="email" autocomplete="off" placeholder="Enter your email" required></b-form-input>
               </label>
               </div>
             
               <div class="form-group">
           <label>
               <b-form-input  v-model="username" type="text" autocomplete="off" placeholder="Enter your username" required></b-form-input>
               </label>
               </div>
                <div class="form-group">
           <label>
               <b-form-input v-model="password" type="password" placeholder="Enter your password" required></b-form-input>
               </label>
                </div>
                <div class="form-group">
           <b-button @click="register" variant="danger">Signup</b-button>
               </div>
               </form>
               </div>
</template>
<script>
import topbar from '../components/topbar.vue';
import axios from 'axios';
export default{
  
  data(){
      return{
          email:'',
		  username:'',
          password:''
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
      register(){
	   let newuser = {
	   email :this.email,
	   username : this.username,
	   password : this.password
	   }
	   axios.post('https://gentle-cove-68355.herokuapp.com/Api/Auth/register',newuser)
	   .then(res => {
	    if(res.status === 200){
	   localStorage.setItem('token',res.data.token);
	   this.$router.push('/Dashboard'); 
	   }
	   console.log(res)
	   },err=>{
	   console.log(err.response)
	   })
	   console.log(newuser);
	  
	  
	  }
  
  
  }
}
</script>
<style scoped>
.register{
    
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

.form-signin input[type="username"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  
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