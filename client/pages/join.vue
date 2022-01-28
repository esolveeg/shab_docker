<template>
  <div class="register">
    <v-container>
      <v-stepper v-model="stepper" vertical>
        <v-stepper-step :complete="stepper > 1" step="1">
          ادخل معلومات الحقول
        </v-stepper-step>

        <v-stepper-content step="1">
              <partials-card :user="form"></partials-card>
          
          <v-form ref="loginFrom" v-model="valid">
        <v-row>
          <!-- {{user}} -->
          <v-col cols="12" v-show="error != null">
            <p class="app-error">{{ error }}</p>
          </v-col>
         <v-col cols="12" md="6" v-for="(input, index) in inputs" :key="index">
            <v-text-field
              :label="input.label"
              :ref="input.key"
              v-model="form[input.key]"
              :value="input.value"
              :disabled="input.disabled"
              :rules="
                typeof updateUserValidation[input.key] != 'undefined'
                  ? updateUserValidation[input.key]
                  : []
              "
              :hint="input.hint ? input.hint : ''"
              :error-messages="errors[input.key]"
              outlined
            ></v-text-field>
            
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn
              :disabled="!valid"
              :loading="loading"
              @click.prevent="stepper = 2"
              class="app-btn"
              >ارسال الطلب</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
        </v-stepper-content>

        <v-stepper-step :complete="stepper > 2" step="2">
         <div class="d-flex justify-space-between w-full">
             <span>اختر طريقة الدفع</span>
         </div>
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card>
            <v-card-title v-if="roles != null">
              قم بعمل تحويل بمبلع {{price(roles[form.Role_id - 1].Price)}} الي هذا الحساب البنكي و سيتم التواصل
              معك لتاكيد العضوية
            </v-card-title>
            <v-card-text>
              <ul>
                <li>آيبان : SA9010000012472813000102</li>
                <li>الحساب : 12472813000102</li>
              </ul>
            </v-card-text>
          </v-card>
          <v-btn color="primary" class="mt-4" @click="join"> تاكيد </v-btn>
        </v-stepper-content>

      </v-stepper>
    </v-container>
    <!-- <div class="img">
                <partials-member-avatar  :img="user.Img"/>
        </div> -->
  </div>
</template>


<script>
import {price} from '@/utils/Helpers'
import { required } from '@/utils/Helpers'
import { updateUserValidation } from '@/utils/validations'
import { snackBar } from '@/utils/Helpers'
import { mapGetters } from 'vuex'
export default {
  data() {
    const Role_id = parseInt(this.$route.query.role)
    return {
      //  "Password"  ,"Phone"    ,"Gender"    ,"Website"  ,"Twitter"  ,"Instagram"
      error: null,
      loading: false,
      stepper: 1,
      valid: false,
      snackBar,
      updateUserValidation,
      inputs: [
        {
          label: 'الاسم باللغة العربية',
          key: 'Name_ar',
          value : "",

        },
        {
          label: 'الاسم باللغة الانجليزية',
          key: 'Name',
          value : "",

        },
        {
          label: 'البريد الالكتروني',
          key: 'Email',
          value : "",

        },
        {
          label: 'الهاتف',
          key: 'Phone',
          value : "",

        },
       
         
        
        
        
      ],
      form: {
        Name:null,
        Name_ar:null,
        Email:null,
        Phone:null, 
      },
      errors: {},
      required,
    }
  },
  computed:{
     ...mapGetters({
      user: 'user/user',
    }),
  },
  methods: {
    join() {
      this.$store.commit('ui/snackBar', 'تم استلام الطلب بنجاح سنقوم بالتواصل معك')
      this.$router.push("/")
     
    },
    price,
    validate() {},
  },
  watch: {
    // form:{
    //     handler: function(val)  {
    //       this.validate()
    //     },
    //     deep:true
    // }
  },
  created() {
    if(this.user != null){
      Object.keys(this.form).forEach((key) => {
        this.form[key] = this.user[key]
        console.log(this.form)
      })
    }
  },
}
</script>

<style src="@/assets/scss/pages/register.css"></style>