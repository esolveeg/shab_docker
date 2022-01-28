<template>
   <div class="page">
       <v-container>
           <v-row v-if="users.length == 0">
                <v-col cols="12" md="3" v-for="i in 4" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
           <v-row v-else>
               
               <v-col cols="12" md="3" v-for="user in users.slice(startIndexSlice ,endIndexSlice)" :key="user.Id">
                   <partials-member-vip :user="user"/>
               </v-col>
                <v-col cols="12">
                   <v-pagination
                    v-model="page"
                    :length="paginationLength"
                    total-visible="6"
                    ></v-pagination>
               </v-col>
           </v-row>
       </v-container>
   </div>
</template>


<script>

import {Ryadeen} from '@/repositoreis/user'
import {mapGetters} from 'vuex'
export default {
     data(){
        return{
            page : 1,
            pageCount : 8,
        }
    },
    computed:{
        startIndexSlice(){
            return (this.page -1) * this.pageCount
        },
        endIndexSlice(){
            return this.startIndexSlice + this.pageCount
        },
        paginationLength(){
            return Math.floor(this.users.length / this.pageCount)
        },
        ...mapGetters({
            users : 'user/ryadeen'
        })
    },
    created(){
        if(this.users.length === 0){
            Ryadeen().then(d => {
                this.$store.commit('user/ryadeen' , d)
            })
        }
    }
}
</script>

