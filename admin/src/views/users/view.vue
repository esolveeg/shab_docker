<template>
    <v-container>
        <v-card :elevation="1">
            <v-card-title>
                 <v-btn
                    @click.prevent="edit"
                    color="primary"
                    class="mr-4"
                  >
                  <v-icon
                    small
                  >
                    mdi-pencil
                  </v-icon>
                  {{$t('table.edit')}}

                </v-btn>
            </v-card-title>
            <v-card-text>
                <div class="view-list" v-if="loading">
                    <v-skeleton-loader
                         v-for="(key, index) in viewable" :key="index"
                        type="list-item-two-line"
                        ></v-skeleton-loader>

                </div>
                <div class="view-list" v-else>
                    <div class="view-item"  v-for="(key, index) in viewable" :key="index">
                        <h2>
                            {{key}}
                        </h2>
                        <v-img v-if="key == 'Img'" :src="user[key]" :width="200"></v-img>
                        <h3 v-else-if="user[key]">
                            {{user[key]}}
                        </h3>
                        <h3 v-else>
                            {{$t('not_defined')}}
                        </h3>
                    </div>
                </div>
            </v-card-text>
    </v-card>
    </v-container>
</template>
<script lang="ts">
import userModel , {userPlaceholder} from "@/models/user"
import Vue from "vue";
import {UserById} from "@/repositories/user"
export default Vue.extend({
  name: "users-list",
  components:{
    
  },
  data() {
      return {
          loading : true,
          user : userPlaceholder,
          viewable : [
              'Id',
              'Name',
              'Name_ar',
              'Email',
              'Img',
              'Serial',
              'Points',
              'Phone',
              'Breif',
              'Website',
              'Instagram',
              'Twitter',
              'Role',
          ]
      }
  },   
  methods:{
      edit(){
          
          const currentPath  = this.$route.path
          const path = currentPath.replace("view", "edit");
          this.$router.push(path)
      }
  } ,
  created()  {
      UserById(parseInt(this.$route.params.id)).then((res:userModel) => {
          this.user = res
          this.loading = false
      })
  }
});
</script>