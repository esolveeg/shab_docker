<template>
    <v-row justify="center">
      <v-dialog
      v-model="modal"
      max-width="80%"
    >
      <v-card class="radius">
        <v-card-text>
          <v-container>
            <v-form ref="projectForm" :valid="valid">
                <v-row>
                    <v-col cols="12" class="my-8">
                        <h2 class="app-title">مقال جديد</h2>
                    </v-col>
                <v-col cols="12" md="6">
                    <p class="app-error" v-show="error !=null">{{error}}</p>
                    <v-text-field
                    :rules="createArticleValidation.Title"
                    label="عنوان المقال"
                    @keyup.enter="$refs.cat.focus()"
                    v-model="form.Title"
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-combobox
                    label="التصنيف"
                    ref="cat"
                    :items="cats"
                    :loading="catLoading"
                    :rules="createArticleValidation.CategoryId"
                    item-text="Name"
                    item-value="Id"
                    v-model="form.CategoryId"
                    outlined
                    ></v-combobox>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                        accept="image/*"
                        ref="image"
                        v-model="form.Img"
                        :rules="createArticleValidation.Img"
                        label="صورة عن المقال"
                    outlined
                    ></v-file-input>
                </v-col>
                <v-col cols="12" class="text-center">
                  <!-- <v-textarea
                      label="محتوي المقال"
                      @keyup.enter="$refs.status.focus()"
                      :rules="createArticleValidation.Content"
                      v-model="form.Content"
                      outlined
                      rows="1"
                      ref="breif"
                      ></v-textarea> -->
                    <profile-editor v-model="form.Content"/>
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn  :loading="loading" @click.prevent="submit" class="app-btn">اضافة</v-btn>
                </v-col>
                </v-row>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import {required } from '@/utils/Helpers'
import {CreateArticle} from '@/repositoreis/global'
import { ListCatsByType } from '@/repositoreis/cat'
import {snackBar} from '@/utils/Helpers'
import {mapGetters} from 'vuex'
import {createArticleValidation} from '@/utils/validations'
  export default {
    data: () => ({
      error:null,
      loading:false,
      valid:true,
      createArticleValidation,
      snackBar,
      form:{
         Title : null,
         Img : null,
        Content:null,
        CategoryId:null
      },
       required,
    }),
    computed:{
      modal :{
        get: function(){
          return this.$store.getters['ui/articlesModal']
        },
        set: function(val){
          return this.$store.commit('ui/articlesModal' , val)
        },
      },
     ...mapGetters({
        catLoading: 'cats/loading',
        cats: 'cats/articles',
        user: 'user/user',
        }),
    },
    methods:{
        getCats(){
            ListCatsByType('post').then((res) => {
                this.$store.commit('cats/articles', res)
                this.$store.commit('cats/loading', false)
            })
        },
        submit() {
          const formObj = this.$refs.projectForm
          formObj.validate()

          if(this.valid){
            // this.loading = true
            const form = {...this.form}
            form.CategoryId = form.CategoryId.Id
            form.UserId = this.user.Id
            let formData = new FormData();
            formData.append("Img", form.Img);
            formData.append('CategoryId' , form.CategoryId)
            formData.append('Title' , form.Title)
            formData.append('Content' , form.Content)
            CreateArticle(formData).then(d => {
              this.error = null
              this.loading = false
              this.$store.commit('ui/snackBar' , 'تم اضافة المقال بنجاح')
              this.modal = false
              this.$emit('created')
            })
            .catch(e => {
              this.loading = false
             
            })
          }
        },
        
    },
    // watch: {
    //     form:{
    //         handler: function(val)  {
    //           this.validate()
    //         },
    //         deep:true
    //     }
    // },
    created(){
        this.getCats()
    }
  }
</script>

