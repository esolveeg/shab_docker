<template>
   <div class="page">
       <v-container>
           <v-row v-if="loading">
                <v-col cols="12" md="3" v-for="i in 4" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
           <v-row v-else>
               
               <v-col cols="12" md="4" v-for="video in videos" :key="video.Id">
                   <partials-video :video="video"/>
               </v-col>
           </v-row>
       </v-container>
   </div>
</template>


<script>

import {Videos} from '@/repositoreis/global'
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({
            videos : 'videos/videos',
            loading : 'videos/loading'
        })
    },
    created(){
        if(this.videos.length === 0){
            this.$store.commit('videos/loading' , true)
            Videos().then(d => {
                this.$store.commit('videos/videos' , d)
                this.$store.commit('videos/loading' , false)
            })
        }
    }
}
</script>

