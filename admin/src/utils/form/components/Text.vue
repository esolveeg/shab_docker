<template>
    <v-text-field
      :label="$t(input.label)"
      :prepend-icon="input.icon"
      :append-icon="input.required ? 'mdi-asterisk' : ''"
      :rules="input.rules ? input.rules : []"
      @input="$emit('input' , val)"
    ></v-text-field>
</template>



<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    input: Object,
  },
});
</script>