<template>
    <v-row justify="center">
      <v-dialog
      v-model="modal"
      max-width="400px"
    >
      <v-card class="radius">
        <v-card-text>
          <v-container>
            <v-form v-if="forgotPassword">
               <v-row>
                    <v-col cols="12" class="my-8">
                        <h2 class="app-title">استرجاع الحساب</h2>
                    </v-col>
                <v-col cols="12">
                    <p class="app-error" v-show="error !=null">{{error}}</p>
                    <v-text-field
                    label="البريد الالكتروني "
                    v-model="email"
                    outlined
                    ></v-text-field>
                </v-col>
                 <v-col cols="12" class="text-center">
                    <v-btn @click.prevent="sendEmail()" class="app-btn">ارسال</v-btn>
                </v-col>
               </v-row>
            </v-form>
            <v-form v-else ref="loginFrom" :valid="valid">
                <v-row>
                    <v-col cols="12" class="my-8">
                        <h2 class="app-title">تسجيل الدخول</h2>
                    </v-col>
                <v-col cols="12">
                    <p class="app-error" v-show="error !=null">{{error}}</p>
                    <v-text-field
                    label="الجوال"
                    @keyup.enter="$refs.password.focus()"
                    v-model="form.username"
                    :error-messages="errors.username"
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    ref="password"
                    @keyup.enter="valid ? login : ''"
                    v-model="form.password"
                    label="كلمة السر*"
                    type="password"
                    :error-messages="errors.password"
                    outlined
                    ></v-text-field>
                    <v-btn text @click.prevent="forgotPassword = true">
                      هل نسيت كلمة السر؟
                    </v-btn>
                </v-col>
                <v-col cols="12" class="text-center">
                     <v-btn :disabled="!valid" :loading="loading" @click.prevent="login" class="app-btn">تسجيل دخول</v-btn>
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
import {mapGetters} from 'vuex'
import {Login} from '@/repositoreis/user'
import {snackBar} from '@/utils/Helpers'
  export default {
    data: () => ({
      error:null,
      loading:false,
      valid:false,
      forgotPassword:false,
      email:"",
      snackBar,
      errors:{
          username:[],
          password:[]
      },
      form:{
          username : "",
          password : ""
      },
       required,
    }),
    computed:{
      modal :{
        get: function(){
          return this.$store.getters['ui/loginModal']
        },
        set: function(val){
          return this.$store.commit('ui/loginModal' , val)
        },
      }
    
    },
    methods:{
      sendEmail(){
         this.$store.commit('ui/snackBar' , 'تم ارسال رابط الي بريدك الالكتروني لاسترجاع الحساب')
         this.$store.commit('ui/loginModal' , false)
          this.forgotPassword = false
      },
      login() {
        this.loading = true
        Login(this.form).then(d => {
         this.error = null
         this.loading = false
         this.$store.commit('user/user' , d.data.User)
         this.$store.commit('user/loading' , false)
           if(process.client){
         localStorage.setItem('token' , d.data.Token)
           }
         this.$store.commit('ui/loginModal' , false)
         this.$store.commit('ui/snackBar' , 'تم تسجيل الدخول بنجاح')
        })
        .catch(e => {
         this.loading = false
         this.$store.commit('user/user' ,null)

         const emailErr = "لا يوجد مستخدم بهذا الهاتف"
         const passwordErr = "كلمة سر غير مطابقة"
         if(typeof e.response.data.errors != 'undefined' && e.response.data.errors.body == 'sql: no rows in result set') {
            this.error= emailErr
        }
         if(e.response.data == 'wrong_password'){
             this.error= passwordErr
         }
        })
       },
        validate(){
            if(this.form.username != '') this.userNameValidate()
            if(this.form.password != '') this.passwordValidate()
            
            //  check if form is required
            // see if the two values is provided
            // the check that errors is empty arrays
            // which means the form is required
            const valid  = this.form.username != '' &&
             this.form.password != '' &&
             this.errors.username.length == 0 &&
             this.errors.password.length == 0

             // set the valid property to disable or enable the button
             this.valid = valid
        },
        userNameValidate(){
                if(!this.form.username){
                    this.errors.username.push('لا بد ادخال رقم الهاتف')
                }
            
        },
        passwordValidate(){
            const p = this.form.password
            this.errors.password = []
            if(p.length < 6){
                    this.errors.password.push('لابد ان تزيد كلمة السر عن 6 ارقام')

            }

        },
    },
    watch: {
    form:{
        handler: function(val)  {
          this.validate()
        },
        deep:true
    }
  }
  }
</script>

<style scoped>
.app-btn{
    margin : 0 !important;
    width: 100% !important;
    background-color: var(--primary) !important;
    color:#fff !important
}

</style>