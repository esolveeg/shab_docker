<template>
    <div class="membership">
        <div class="img">
            <img :src="role.Image">
        </div>
        <h3>{{role.Name}}</h3>
        <p>{{role.Breif}}</p>
        <h2>{{price(role.Price)}}</h2>
        <v-btn class="app-btn" @click.prevent="$router.push({name : 'register' , query : {role : role.Id}})">اطلبها الان</v-btn>
    </div>
</template>


<script>
import {price} from '@/utils/Helpers'
export default {
    methods:{
        price
    },
    
    props:['role']
}
</script>
<style  src="../../assets/scss/partials/membership.css" />
