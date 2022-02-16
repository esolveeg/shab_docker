<template>
    <div class="user__edit">
        
        <v-form ref="form" v-model="valid">
                <v-row>
                                     <!-- {{user}} -->
                
                <v-col cols="12" md="6" v-for="(input , index) in inputs" :key="index">
                    <v-text-field
                    :label="input.label"
                    @keyup.enter="$refs[inputs[index+1].key].focus()"
                    :ref="input.key"
                    v-model="form[input.key]"
                    :type="input.key == 'Password' ? 'password':'text' "
                    :disabled="input.disabled"
                    :rules="typeof updateUserValidation[input.key] != 'undefined' ? updateUserValidation[input.key] : []"
                    :hint="input.hint ? input.hint : ''"
                    :error-messages="errors[input.key]"
                    outlined
                    ></v-text-field>
                    <p class="app-error" v-if="input.key == 'Email' && error != null" >{{error}}</p>

                </v-col>
                <v-col cols="12" >
                    <v-textarea
                    :label="breif.label"
                    @keyup.enter="valid ? update : ''"
                    v-model="form[breif.key]"
                    rows="3"
                    :error-messages="errors[breif.key]"
                    outlined
                    ></v-textarea>
                </v-col>
                
                <v-col cols="12" class="text-center">
                    <v-btn  :loading="loading" @click.prevent="update" class="app-btn">تحديث</v-btn>
                </v-col>
                </v-row>
            </v-form>
    </div>
</template>


<script>
import {required } from '@/utils/Helpers'
import {updateUserValidation} from '@/utils/validations'
import { mapGetters } from 'vuex'
import {UpdateUser , Upload} from '@/repositoreis/user'
import {snackBar} from '@/utils/Helpers'
export default {
    data(){
        return  {
            //  "Password"  ,"Phone"    ,"Gender"    ,"Website"  ,"Twitter"  ,"Instagram" 
            img:null,
             error:null,
            loading:false,
            valid:true,
            snackBar,
            updateUserValidation,
            inputs:[
                {
                label:"الاسم باللغة العربية",
                disabled:true,
                key:"Name_ar"
                },
                {
                label:"الاسم باللغة الانجليزية",
                key:"Name",
                disabled:true
                },
                {
                    label:"البريد الالكتروني",
                    key:"Email"
                },
                {
                    label:"كلمة السر",
                    key:"Password",
                    hint:"اترك هذا الحقل خاليا ان كنت لا تريد تغيير كلمة السر"
                },
                
                 
                 {
                     label:"الهاتف",
                    key:"Phone"
                },                
                {
                    label:"العضوية",
                    key:"Role",
                    disabled:true

                },
                
            ],
            breif: {
                label:"النبذة التعرفية",
                key:"Breif"
                },
            form:{
                Name : null,
                Name_ar : null,
                Email : null,
                Img : null,
                Password : null,
                Phone : null,
                Role :null,
                Breif : null,
                Website : null,
                Twitter : null,
                Instagram : null
            },
            errors:{},
            form:{},
            required,
                
        }
    },
    methods:{
      update() {
          this.$refs.form.validate()
          if(this.valid){
             this.loading = true
             if(this.img == null) this.form.Img = ""
                UpdateUser(this.form).then(d => {
                    this.error = null
                    this.loading = false
                        this.error =null
                    this.$store.commit('ui/snackBar' , 'تم تحديث البيانات بنجاح')
                    this.$store.commit('user/user' , d)
                    
                })
                .catch(e => {
                    this.error = "البريد الالكتروني محجوز"
                    this.loading = false
                    window.scrollTo({
                        top: 300,
                        left: 0,
                        behavior: 'smooth'
                    });
                
                })   
          }
       },
    },
    watch: {
    // form:{
    //     handler: function(val)  {
    //       this.validate()
    //     },
    //     deep:true
    // },
    img:{
        handler: function(val)  {
            let formData = new FormData();
            formData.append('file', val);
            Upload(formData)
            .then(d => {
                this.form.Img = d
            })
          console.log(val)
        },
    }
  },
    created(){
        this.form = {...this.user}
        
        Object.keys(this.user).forEach(key => {
            this.errors[key] = []
        })
    },
  computed: {
    ...mapGetters({
      user: 'user/user',
      userLoading: 'user/loading',
    }),
  },
}
</script>

