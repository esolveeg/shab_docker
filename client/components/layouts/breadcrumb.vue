<template>
   <div class="breadcrumbs" >
       <v-container>
       <div class="title">
           <h2 style="text-align:center !important">{{breadcrumb.title}}</h2>
       </div>
            <v-breadcrumbs
            :items="items"
            :light="true"
            large
            >
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :href="item.href"
              nuxt
              :disabled="item.disabled"
            >
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
            </v-breadcrumbs>
       </v-container>
   </div>
</template>

<script>
import {breadCrumb} from '@/utils/Helpers'
  export default {
    computed:{
      breadcrumb(){
        return breadCrumb(this.$route.name)
      },

      items(){
        return  [
        {
          text: 'الرئيسية',
          disabled: false,
          href: '/',
        },
        {
          text: breadCrumb(this.$route.name).title,
          disabled: false,
          href: this.$route.to,
        }
        ]
      }
      
    },
    
  }
</script>

<style>
h2{
  font-family: "Tjwal";

}
.breadcrumbs{
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: var(--primary);
    padding: 20px;
    flex-direction: column;
    height: 50vh;
    color: #fff;
    text-align: center;

}
.v-breadcrumbs{
    margin-top: 30px;
    justify-content: center;
}
.breadcrumbs li,.breadcrumbs a {
    color :#fff !important;
    text-align: center;
}
</style>