<template>
   <div class="page">
       <v-container>
           <v-row>
          <v-col cols="12"><h2 class="app-title">اشتراك سنوي للعضوية</h2></v-col>
              <v-col cols="12" v-for="(role,index) in roles" :key="index" sm="6" lg="4" >
                <partials-membership :role="role"/>
            </v-col>
          <v-col cols="12" class="mt-15"><h2 class="app-title">مزايا العضوية</h2></v-col>
            <v-col cols="12">
                <partials-features :level="0"/>
            </v-col>
           
            
           </v-row>
           <v-row>
           </v-row>
       </v-container>
   </div>
</template>


<script>
import {mapGetters} from 'vuex'
export default {
    
    computed:{
        
        ...mapGetters({
            roles : 'ui/roles',
         
        })
    },
}
</script>

