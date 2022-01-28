<template>
   <div class="page">
       <v-container>
           <v-row v-if="consultunts.length == 0">
                <v-col cols="12" md="3" v-for="i in 4" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
           <v-row v-else>
               
               <v-col cols="12" md="3" v-for="co in consultunts" :key="co.Id">
                   <partials-consultunt  :user="co"/>
               </v-col>
           </v-row>
       </v-container>
   </div>
</template>


<script>

import {Consultunts} from '@/repositoreis/user'
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({
            consultunts : 'user/consultunts'
        })
    },
    created(){
        if(this.consultunts.length === 0){
            Consultunts().then(d => {
                this.$store.commit('user/consultunts' , d)
            })
        }
    }
}
</script>

