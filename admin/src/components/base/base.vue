<template>
  <v-app>
    <drawer/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Drawer from "@/components/layouts/Drawer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Drawer,
  },
});
</script>