<template>
<div class="py-12">
  <v-container>
    <v-card>
      <v-card-text v-if="!userLoading">
         <v-form ref="form" v-model="valid">
                <v-row>
                <v-col cols="12" >
                  <p class="danger" v-if="error">{{error}}</p>
                </v-col>
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

                 <v-col cols="12"  md="6">
                    <v-file-input
                      truncate-length="15"
                      v-model="img"
                    label="الصورة"
                      outlined
                    ></v-file-input>
                </v-col>
                <v-col cols="12" md="6">
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
                    <v-btn  :loading="loading" @click.prevent="update" class="w-full" color="primary">تحديث</v-btn>
                </v-col>
                </v-row>
            </v-form>

      </v-card-text>
    </v-card>
  </v-container>
</div>
</template>
<script >
import {required , updateUserValidation } from '@/utils/validations/validations.ts'
import {UpdateUser , Upload , UserById} from '@/repositories/user'
// import {snackBar} from '@/utils/Helpers'
export default {
    data(){
        return  {
            //  "Password"  ,"Phone"    ,"Gender"    ,"Website"  ,"Twitter"  ,"Instagram" 
            img:null,
             error:null,
            loading:false,
            valid:true,
            user:{},
            userLoading:true,
            updateUserValidation,
            inputs:[
                {
                label:"الاسم باللغة العربية",
                key:"Name_ar"
                },
                {
                label:"الاسم باللغة الانجليزية",
                key:"Name"
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
                label:"الموقع الالكترون",
                key:"Website"
                },
                 {
                label:"رابط تويتر",
                key:"Twitter"
                },
                 {
                label:"رابط انستجرام",
                key:"Instagram"
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
            errors:{},
            form:{},
            required,
                
        }
    },
    methods:{
      update() {
        this.$refs.form.validate()
        console.log(this.valid)
          if(this.valid){
             this.loading = true
                UpdateUser(this.form , parseInt(this.$route.params.id)).then(d => {
                    this.error = null
                    this.loading = false
                    this.error =null
                    this.$router.push("/users")
                    // this.$store.commit('ui/snackBar' , 'تم تحديث البيانات بنجاح')
                    // this.$store.commit('user/user' , d)
                    
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
    img:{
        handler: function(val)  {
            let formData = new FormData();
            formData.append('file', val);
            Upload(formData)
            .then(d => {
                console.log(d)
                this.form.Img = d
                console.log(this.form)
                console.log(d)
            })
          console.log(val)
        },
    }
  },
    created(){
       UserById(parseInt(this.$route.params.id)).then((res) => {
          this.user = res
          this.userLoading = false
          this.form = {...this.user}
          Object.keys(this.user).forEach(key => {
              this.errors[key] = []
          })
      })
    },
  
}
</script>
