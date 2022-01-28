<template>
  <div class="text-center ma-2">
    <v-snackbar
      top
      @input="changed"
      v-model="snackBarActive"
    >
      {{ snackBarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
         
          text
          v-bind="attrs"
          @click="snackBarActive = false"
        >
          غلق
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
  export default {
    computed:{
        snackBarActive : {
          get:function(){
            return this.$store.getters['ui/snackBarActive']
          },
          set:function(val){
             this.$store.commit('ui/snackBarActive' , val)
          },
        },
        snackBarText : {
          get:function(){
            return this.$store.getters['ui/snackBarText']
          },
          set:function(val){
             this.$store.commit('ui/snackBarText' , val)
          },
        }
    },
    methods:{
      changed(val){
        this.$store.commit('ui/code' , val)
      }
    }
  }
</script>