<template>
   <div class="user__projects">
     <div class="not-allowed" v-if="user.Role_id < 3">
        <v-icon lg>mdi-cancel</v-icon>
       <h2>لا يمكنك اضافة مشاريع يمكنك ترقية عضويتك لتتمكن من اضافة مشروع</h2>
     </div>
     <div class="no-data" v-else-if="!loading && prs.length == 0">
        <v-icon lg>mdi-bank-remove</v-icon>
       <h2>ليس لديك اي مشاريع</h2>
     </div>
     <div class="prs" v-else>
        <v-row v-if="loading">
                <v-col cols="12" sm="6" lg="3" v-for="i in 4" :key="i">
                   <v-skeleton-loader
                    class="mx-auto"
                    height="300"
                    type="card"
                    ></v-skeleton-loader>
               </v-col>
           </v-row>
        <v-row justify="start" v-else align="center">
          <v-col cols="12"><h2 class="app-title">مشاريعك علي منصة الشب الريادي</h2> </v-col>
          <v-col cols="12" md="6"  v-for="project in prs" :key="project.Id">
            <partials-project :project="project"/>
          </v-col>
        </v-row>
     </div>
     <v-row align="center">
        <v-col cols="12"><v-btn class="app-btn" @click.prevent="create"  >اضف مشروع جديد </v-btn></v-col>
      </v-row>
      <modals-create-project @created="getProjects"/>
    </div>
</template>



<script>
import { mapGetters } from 'vuex'
import {Projects} from '@/repositoreis/global'
export default {
  computed: {
    ...mapGetters({
      user: 'user/user',
      prs: 'user/projects',
      userLoading: 'user/loading',
    }),
  },
  data(){
    return{
      loading:true
    }
  },
  methods:{
    create(){
      if(this.prs.length === 3){
        this.$store.commit('ui/snackBar' , 'عفوا لا يمكنك اضافة اكثر من 3 مشاريع')
        return
      } 
      this.$store.commit('ui/projectModal' ,true)


    },
    getProjects(){
       this.loading = true
      Projects({
            Category :0,
            user :this.user.Id,
            Search : ""
        }).then((d) => {
          this.$store.commit('user/projects' , d)
    this.loading = false
      })
    }
  },
  created(){
   this.getProjects()
  }
}
</script>

