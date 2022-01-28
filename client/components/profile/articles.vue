<template>
   <div class="user__articles">
     <div class="not-allowed" v-if="user.Role_id < 2">
        <v-icon lg>mdi-cancel</v-icon>
       <h2>لا يمكنك اضافة مشاريع يمكنك ترقية عضويتك لتتمكن من اضافة مقال</h2>
     </div>
     <div class="no-data" v-else-if="!loading && articles.length == 0">
        <v-icon lg>mdi-note-alert-outline</v-icon>
       <h2>ليس لديك اي مقالات</h2>
     </div>
     <div class="articles" v-else>
        <v-row v-if="loading">
                <v-col cols="12" md="6"  v-for="i in 4" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
        <v-row justify="start" v-else align="center">
          <v-col cols="12"><h2 class="app-title">مقالاتك علي منصة الشب الريادي</h2> </v-col>
          <v-col cols="12" md="6"  v-for="post in articles" :key="post.Id">
            <partials-post :post="post"/>
          </v-col>
        </v-row>

     </div>
      <v-row align="center"  v-if="user.Role_id > 1" >
        <v-col cols="12"><v-btn class="app-btn" @click.prevent="create"  >اضف مقال جديد </v-btn></v-col>
      </v-row>
      <modals-create-article @created="getArticles()"/>

    </div>
</template>



<script>
import { mapGetters } from 'vuex'
import {Blog} from '@/repositoreis/global'
export default {
  computed: {
    ...mapGetters({
      user: 'user/user',
      articles: 'user/articles',
      userLoading: 'user/loading',
    }),
  },
  methods:{
     create(){
      this.$store.commit('ui/articlesModal' ,true)
    },
    getArticles(){
      this.loading = true
      Blog({
            Category :0,
            user :this.user.Id,
            Search : ""
        }).then((d) => {
          this.$store.commit('user/articles' , d)
          this.loading = false
      })
    }
  },
    data(){
    return{
      loading:true
    }
  },
  created(){
    this.getArticles()
  }
}
</script>

