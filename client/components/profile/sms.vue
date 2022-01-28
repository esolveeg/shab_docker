<template>
    <div class="user__msgs" v-if="!userLoading">
        <v-icon lg>mdi-message-alert-outline</v-icon>
        <h2>ليس لديك اي رسائل</h2>
    </div>
</template>



<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'user/user',
      userLoading: 'user/loading',
    }),
  },
}
</script>

