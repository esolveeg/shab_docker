<template>
    <div class="user">
      <v-container v-if="userLoading">
        <v-skeleton-loader></v-skeleton-loader>
      </v-container>
        <v-container v-else>
             <v-tabs :vertical="vertical" v-model="tab">
                 <div class="user__data">
                    <partials-member-avatar  :img="user.Img" @click.prevent="toggle()"/>
                    <h2>{{user.Name_ar}}</h2>
                    <h3>لديك {{user.Points}} نقطة</h3>
                 </div>
                <v-tab v-for="(i,index) in AccountNav" :key="index">
                    <v-icon right>
                    {{i.icon}}
                    </v-icon>
                    {{i.title}}
                </v-tab>
                <v-tab @click.prevent="logout">
                    <v-icon right>
                    mdi-logout
                    </v-icon>
                    تسجيل خروج
                </v-tab>
      <v-tab-item>
        <profile-membership/>
      </v-tab-item>
      <v-tab-item>
        <profile-edit/>
      </v-tab-item>
      <v-tab-item>
        <profile-sms/>
      </v-tab-item>
      <v-tab-item>
        <profile-projects/>
      </v-tab-item>
      <v-tab-item>
        <profile-articles/>
      </v-tab-item>
        <v-tab-item>
        <profile-services/>
      </v-tab-item>
    </v-tabs>
        </v-container>
    </div>
</template>


<script>
import AccountNav from '@/utils/AccountNav'
import {logout , addParamsToLocation} from '@/utils/Helpers'
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            AccountNav,
            vertical:true,
            // tab:0,
        }
    },
    computed:{
      tab:{
        get:function(){
          return this.$store.getters['ui/profileTab']
        },
        set:function(val){
          this.$store.commit('ui/profileTab' , val)
        }
      },
      ...mapGetters({
        user : 'user/user',
        userLoading:'user/loading'
      })
    },
    watch:{
      tab:{
        handler:function(){
          addParamsToLocation({tab:this.tab } ,this.$route.path)
          
        },  
        deep:true
      },
    },
    methods:{
     
        logout(){
            logout(this.$store)
            this.$router.push({name: 'index'})
        }
    },
    mounted(){
       if(this.user == null){
        this.$router.push('/')
      }
    },
    created(){
      console.log(this.user)
     
      if(this.$route.query.tab) this.tab = parseInt(this.$route.query.tab)
    },
    mounted(){
      if(window.innerWidth < 1000) this.vertical = false
    }
}
</script>


<style  src="@/assets/scss/pages/profile.css"/>