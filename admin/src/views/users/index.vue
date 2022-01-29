<template>
    <datatable :table="data"/>
</template>
<script lang="ts">
import Vue from "vue";
import data from "@/datatables/users/users";
import datatable from "@/utils/datatable/components/datatable.vue";
export default Vue.extend({
  name: "users-list",
  components:{
    datatable
  },
  data(){
    return {
        data
    }
  },
});
</script>
