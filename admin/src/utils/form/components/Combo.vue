<template>
  <v-combobox
    @change="change"
    :cache-items="input.cache"
    :item-text="input.text"
    :item-value="input.value"
    :items="input.items"
    :rules="input.rules ? input.rules : []"
    :loading="input.loading"
    :prepend-icon="input.icon"
    :append-icon="input.required ? 'mdi-asterisk' : ''"
    return-object
    hide-details
    :clearable="input.clearable || false"
    :label="$t(input.label)"
    single-line
  ></v-combobox>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    input: Object,
  },
  methods:{
      change(val:any){
        console.log(val)
        console.log(this.input.value)
        this.input.val = val[this.input.value]
        console.log(this.input.val)
          this.$emit('change' , val)
      }
  }
});
</script>