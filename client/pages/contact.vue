<template>
  <div class="contact">
    <v-container>
      <div class="wrapper">
        
          <div>
           
              <v-form ref="contactForm" v-model="valid">
                <v-row>
                  <!-- {{user}} -->
                  <v-col cols="12">
                    <h2 class="app-title">اتصل بنا</h2>
                  </v-col>
                  <v-col cols="12" v-show="error != null">
                    <p class="app-error">{{ error }}</p>
                  </v-col>
                  <v-col
                    cols="12"
                    v-for="(input, index) in inputs"
                    :key="index"
                  >
                    <v-text-field
                      :label="input.label"
                      :ref="input.key"
                      v-model="form[input.key]"
                      :value="input.value"
                      :disabled="input.disabled"
                      :rules="
                        typeof contactUsValidation[input.key] != 'undefined'
                          ? contactUsValidation[input.key]
                          : []
                      "
                      :hint="input.hint ? input.hint : ''"
                      :error-messages="errors[input.key]"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      :label="msg.label"
                      @keyup.enter="valid ? update : ''"
                      v-model="form[msg.key]"
                      rows="3"
                      :error-messages="errors[msg.key]"
                      outlined
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12" class="text-center">
                    <v-btn
                      :disabled="!valid"
                      :loading="loading"
                      @click.prevent="send"
                      class="app-btn"
                      >ارسال
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
          
          </div>
        
       
          <div class="info-wrapper">

            <div class="app-info mb-10">
              <h2 class="app-title">
                معلومات الاتصال
              </h2>
              <div class="ul">
                <li>
                <p><v-icon>mdi-message-outline</v-icon> البريد الاكتروني :</p>
                <p> info@alshabalriyadi.com</p>
                </li>
                <li>
                <p><v-icon class="phone">mdi-phone-outline</v-icon>رقم الجوال :</p>
                <p> 966551651833</p>
                </li>
                <li>
                <p><v-icon>mdi-map-outline</v-icon> العنوان :</p>
                <p> المملكة العربية السعودية ، جدة حي الحمراء </p>
                </li>
              </div>
          </div>
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3711.252705208692!2d39.17083100000001!3d21.536972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc28366ddfd733bfc!2zMjHCsDMyJzEwLjQiTiAzOcKwMTAnMjIuMSJF!5e0!3m2!1sen!2sus!4v1639798735386!5m2!1sen!2sus"
              frameborder="0"
            ></iframe>
          
          </div>
       
      </div>
    </v-container>
  </div>
</template>


<script>
import { required } from '@/utils/Helpers'
import { contactUsValidation } from '@/utils/validations'
import { snackBar } from '@/utils/Helpers'
export default {
  data() {
    const Role_id = parseInt(this.$route.query.role)
    return {
      error: null,
      loading: false,
      stepper: 1,
      valid: false,
      snackBar,
      contactUsValidation,
      inputs: [
        {
          label: 'الاسم ',
          key: 'name',
          value: '',
        },
        {
          label: 'البريد الالكتروني',
          key: 'email',
          value: '',
        },
        {
          label: 'الموضوع',
          key: 'subject',
          value: '',
        },
      ],

      msg: {
        label: 'الرسالة',
        key: 'msg',
      },
      form: {
        name: null,
        email: null,
        subject: null,
        msg: null,
      },
      errors: {},
      form: {},
      required,
    }
  },
  methods: {
    send() {
      this.$store.commit('ui/snackBar' , 'تم ارسال رسالتك بنجاح سنقوم بالرد في اقرب وقت')
      this.$refs.contactForm.reset()
     
    },
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
    Object.keys(this.form).forEach((key) => {
      this.errors[key] = []
    })
  },
}
</script>

<style src="@/assets/scss/pages/contact.css"></style>