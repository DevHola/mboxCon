import Vue from 'vue'
import VuePeerJS from 'vue-peerjs'
import Peer from 'peerjs'
Vue.use(VuePeerJS,new Peer({
    path:'/',
    host:'localhost',
    port:9000
     }
))