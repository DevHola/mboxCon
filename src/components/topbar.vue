<template>
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand class="col-md-5" style="font-family:'Pacifico';font-weight:bold;" >Valhalla<p style="font-size:10px;margin:0;margin-top:0px;">Stay Connected</p></b-navbar-brand>
   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
   <b-collapse id="nav-collapse" is-nav>
      
     <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto col-md-5 justify-content-center">
        <router-link  :to="'/login'" class="btn btn-primary mr-1">login</router-link>
		  <router-link  :to="'/'" class="btn btn-primary">register</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>
<script>
export default {
name: 'topbar',
  data () {
    return {
    }
  }

}
</script>
