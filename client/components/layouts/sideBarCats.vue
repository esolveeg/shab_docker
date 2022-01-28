<template>
    <v-list>
            
            <v-list-item
              @click.prevent="$emit('clear')"
            >
              <v-icon class="ml-4">mdi-shape-outline</v-icon>
              <v-list-item-title>جميع الاقسام</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-for="cat in cats"
              :key="cat.Id"
              @click.prevent="$emit('filter' , cat)"
            >
              <v-icon class="ml-4">mdi-{{ cat.Icon }}</v-icon>
              <v-list-item-title>{{ cat.Name }}</v-list-item-title>
            </v-list-item>
          </v-list>
</template>

<script>
export default {
    props:['cats']
}
</script>