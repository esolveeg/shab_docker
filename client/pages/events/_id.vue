<template>
<div class="event-page">
<h2 v-if="loading">loading</h2>
<v-container>
    <div class="event-wrapper">
        <div class="desc">
            <div class="title">
                <div class="right">
                    <h2 >{{event.Title}}</h2>
                    <span>{{event.CatName}}</span>
                </div>
            </div>
            <div v-html="event.Breif"></div>
        </div>
        <div class="left">
        <div class="img">
            <img :src="event.Img" alt="الشاب الريادي">
        </div>

        <div class="video">
            <no-ssr  placeholder="Loading...">
                <iframe width="100%" height="250" :src="event.Video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </no-ssr>
        </div>
        <div class="subscribe" @click.prevent="subscribeModal = true">
            <v-btn class="app-btn" >اشترك</v-btn>
            <div class="price">
                  {{price(event.Price)}}
              </div>
        </div>
        </div>
    </div>
</v-container>
<v-dialog v-model="subscribeModal" width="500" class="py-12 text-center">
    
           <v-stepper v-model="stepper" :vertical="false">
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
          <v-btn color="primary" class="mt-4" @click="subscribe"> تاكيد </v-btn>
        </v-stepper-content>

      </v-stepper>
           
</v-dialog>

</div>
</template>

<script>
import {price} from '@/utils/Helpers'
import { mapGetters } from 'vuex'
import { snackBar } from '@/utils/Helpers'
import { required } from '@/utils/Helpers'
import { updateUserValidation } from '@/utils/validations'
import {Event} from '@/repositoreis/global'
export default {
    data(){
        return{
             error: null,
            loading : true,
            subscribeModal : false,
            event:"",
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
    methods:{
        price,
        subscribe(){
            this.$store.commit('ui/snackBar', 'تم استلام الطلب بنجاح سنقوم بالتواصل معك')
            this.$router.push("/")
        }
    },
    mounted(){
        console.log(this.$route.params.id)
        Event(this.$route.params.id)
        .then((val) => {
            console.log(val)
            this.event = val
            this.loading = false
        })
    },
    created() {
    if(this.user != null){
      Object.keys(this.form).forEach((key) => {
        this.form[key] = this.user[key]
        this.stepper = 2
      })
    }
  },
    
}
</script>

<style scoped src="@/assets/scss/pages/event.css" />
