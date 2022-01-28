<template>
  <v-app :class="user == null ? `role-0` : `role-${user.Role_id}`">
    <layouts-app-loading v-if="appLoading"/>

    <layouts-app-nav/>
    <v-main>
      <layouts-breadcrumb v-if="$route.name != 'index'"/>
        <nuxt />

    </v-main>
    <layouts-app-footer/>
        <modals-login v-if="!appLoading"/> 
     <layouts-snack-bar v-if="!appLoading"/>  
  </v-app>
</template>



<script>

import {Home} from '@/repositoreis/global'
import {User} from '@/repositoreis/user'
import {mapGetters} from 'vuex'


export default {
  computed:{
  ...mapGetters({
    home : "ui/home",
    appLoading : "ui/appLoading",
    user:"user/user",
    drawer : "ui/drawer",
  })
  },
  methods:{
    appLoaded(){
      setTimeout(() => {
        this.$store.commit('ui/appLoading' , false)
          } , 2000)
    }
  },
  created(){
    this.$store.commit('ui/appLoading' , true)
  },
  async mounted(){
    // fetch user data if user is set
    const token = localStorage.getItem('token')
    if(token){
      this.$store.commit('user/loading' , true )
      await User().then(d => {
         this.$store.commit('user/user' , d.data)
         this.$store.commit('user/loading' , false )
      })
        .catch(e => {
          this.$store.commit('user/user' , null)
          localStorage.removeItem('token')
        })

    } 
    if(this.home === null){
      console.log('data')
      // fetch home data
      await Home().then(res => {
          this.$store.commit('ui/home' , res)
          console.log(res)
          
        })
    }
    this.appLoaded()
  }
}

</script>
