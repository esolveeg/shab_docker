<template>
   <div class="event"  @click.prevent="$router.push(`events/${event.Id}`)">
       <div class="top">
           <img :src="event.Img"/>
           <p class="cat">
               {{event.CatName}}
           </p>
           <div class="join">
               <v-btn class="app-btn" @click.prevent="$router.push(`events/${event.Id}`)">انضم الينا</v-btn>
           </div>
            <div class="date">
                <p>30</p>
                <p>Aug</p>
                <p>2021</p>
            </div>
            
       </div>
       <h2>{{event.Title}}</h2>
       <h3>{{price(event.Price)}}</h3>
   </div>
</template>


<script>
import {price} from '@/utils/Helpers'
export default {
    methods:{
        price
    },
    props:['event']
}
</script>
<style scoped src="../../assets/scss/partials/event.css" />
