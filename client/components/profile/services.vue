<template>
   <div class="user__projects">
     
     <div class="prs">
        <v-row v-if="loading">
                <v-col cols="12" sm="6" lg="3" v-for="i in 4" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
        <v-row justify="start" v-else align="center">
          <v-col cols="12"><h2 class="app-title text-center">خدمات الشاب الريادي</h2> </v-col>
          <v-col cols="12" md="3"  v-for="service in services" :key="service.Id">
            <partials-service :service="service"/>
          </v-col>
        </v-row>
     </div>
    
    </div>
</template>



<script>
import { mapGetters } from 'vuex'
import {Services} from '@/repositoreis/global'
export default {
  computed: {
    ...mapGetters({
     services : "service/services",
     loading : "service/loading"
    }),
  },
  methods:{
    getServices(){
       this.$store.commit('service/loading' , true)
      Services().then((d) => {
        this.$store.commit('service/services' , d)
        this.$store.commit('service/loading' , false)
      })
    }
  },
  created(){
    if(this.services.length == 0){
      this.getServices()
    }
  }
}
</script>

