<template>
  <div class="home">
    <div class="banner">
      <v-container>
       
        <v-row justify="start" align="center" v-if="home != null">
          <v-col cols="12" sm="6" class="text-right">
            <h3>{{home.Banner.Title}}</h3>
            <p v-html="home.Banner.Value"></p>
          </v-col>
          <v-col class="text-left" cols="12" sm="6">
            <img
              :src="home.Banner.Image"
            />
          </v-col>
        </v-row>

      </v-container>

    </div>
    <div class="goals">
      <v-container>
         <v-row v-if="home == null">
                <v-col cols="12" sm="6" lg="3" v-for="i in 4" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
        <v-row justify="start" align="center" v-else>
          <v-col cols="12" sm="6" lg="3" v-for="(goal,index) in home.Goals" :key="index">
            <partials-icon-text :item="goal" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="membershibs bg-darker">
      <v-container>
        <v-row v-if="home == null">
                <v-col cols="12" sm="6" lg="4" v-for="i in 3" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
        <v-row justify="start"  align="center" v-else>
          <v-col cols="12"><h2 class="app-title">اشتراك سنوي للعضوية</h2></v-col>
          <v-col cols="12" v-for="(role,index) in home.Roles" :key="index" sm="6" lg="4" >
            <partials-membership :role="role"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="events">
      <v-container>
        <v-row v-if="home == null">
                <v-col cols="12" sm="6" lg="3" v-for="i in 4" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
        <v-row justify="start" v-else align="center">
          <v-col cols="12"><h2 class="app-title">الفعاليات القادمة</h2></v-col>
          <v-col cols="12" sm="6" lg="3" v-for="event in home.Events" :key="event.Id">
            <partials-event :event="event"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="members bg-darker">
      <v-container>
        <div class="members__wrapper">
          <div class="right">
              <h2 class="app-title">انصم الي الشبكة  التنفيذية  الان</h2>
              <v-btn class="app-btn" @click.prevent="$router.push({name : 'resigter' , query : {role : 3}})">انضم الينا الان</v-btn>
          </div>
          <div class="left">
              <div class="view-all">
                <p>الأعضاء المشتركين في باقة ريادي</p>
                <nuxt-link to="/ryadeen">عرض الجميع</nuxt-link>
              </div>
              <div class="avatars" v-if="home != null">
                <partials-member-avatar :img="user.Img"  v-for="user in home.Users" :key="user.Id" />
              </div>
          </div>
        </div>
      </v-container>
    </div>
    <div class="projects">
      <v-container>
        <v-row v-if="home == null">
                <v-col cols="12" sm="6" lg="3" v-for="i in 4" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
        <v-row justify="start" v-else align="center">
          
          <v-col cols="12">
          <div class="anim-icon">
              <span></span>
          </div>
            <h2 class="app-title mt-4">مشاريع الشاب الريادي</h2>
          <p class="app-subtitle">شبكة اعمال واسعة من المشاريع</p>
           </v-col>
          <v-col cols="12" sm="6" lg="3" v-for="project in home.Projects" :key="project.Id">
            <partials-project :project="project"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import {mapGetters} from 'vuex'
import {undef} from '@/utils/Helpers'
export default {
  computed:{
  ...mapGetters({
    home : "ui/home"
  })
},
methods:{
  undef
},
  components: {
    Logo,
    VuetifyLogo,
  }
}
</script>
<style scoped src="../assets/scss/pages/home.css" />
