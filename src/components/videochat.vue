<template>
 <div class="container mt-5">
               <div class="col-auto ep">
              <router-link class="btn btn-primary move mt-2" :to="'/dashboard'">End Call</router-link>
              </div>
      <div class="row" id="video">
              <div class="container col-12 videogrid" id="video-grid">
               <div class=" row ">
              <div class="col-auto ep">
              <router-link class="btn btn-primary move mt-2" :to="'/dashboard'">End Call</router-link>
              </div>
             
          </div>   
              </div>
			  </div>
			  </div>

</template>
<script>
import { io } from "socket.io-client";
import Peer from 'peerjs';
export default{
name: 'videochat',
 data () {
    return {
	
	
    }
  },
  created(){
  if(localStorage.getItem('token')=== null){
   this.$router.push('/login');
  }
  },
  mounted(){
   
    const socket = io.connect("https://gentle-cove-68355.herokuapp.com",{transports: ['websocket', 'polling']});
    
     const peer = new Peer(undefined,{port:443,host:'secure-fjord-28434.herokuapp.com',secure:'true',path:'/peerjs'});
	
       const videogrid = document.getElementById('video-grid');
       const myvideo = document.createElement('video');
       //let myvideoStream;
        navigator.mediaDevices.getUserMedia({
            video:true,
            audio:true
        }).then(stream=>{
          //  myvideoStream = stream;
            addVideoStream(myvideo,stream);

           
        peer.on('call', (call) => { 
        call.answer(stream) 
        const video = document.createElement("video") 
        call.on('stream', userVideoStream => { 
            addVideoStream(video, userVideoStream) 
        })
        })
       socket.on('user-connected',function(userId){
            connectToNewUser(userId,stream);
        })
        })
          const roomId = this.$route.params.id;
      
        peer.on("open",function(id){
		console.log(id)
		   socket.emit("join-room", roomId, id);
         })
            
        //calling user
        const connectToNewUser = (userId,stream)=>{
		console.log(userId);
            const call = peer.call(userId,stream)
            console.log(call);
            const video = document.createElement("video");
            call.on('stream',userVideoStream=>{
                addVideoStream(video,userVideoStream)
            })
        }
        
          const addVideoStream=(video,stream)=>{
                video.srcObject = stream;
                 video.addEventListener('loadedmetadata',()=>{
                  video.play();
                 });
                videogrid.append(video);
            };    
          
		  
    
   }
}
</script>
<style>
.videogrid{
    display: flex;
}
video{
    justify-content:space-between;
    border-radius: 10px;
    margin-top:0px;
    padding: 4px;
    width: 1000px;
    justify-content: center;
    object-fit: cover;
    margin-left:-90px;
    height:470px;
}
.true{
    margin-left:40px;
    padding:5px;
    margin-top:60px;
}
.ep{
    padding: 5px;
    margin-left:50px;
    
}

</style>