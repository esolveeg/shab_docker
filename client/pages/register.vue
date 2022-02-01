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
              <v-col
                cols="12"
                md="6"
                v-for="(input, index) in inputs"
                :key="index"
              >
                <v-text-field
                  :label="input.label"
                  :ref="input.key"
                  v-model="form[input.key]"
                  :value="input.value"
                  :type="input.key == 'Password' ? 'password' : 'text'"
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
              <v-col cols="12" md="6">
                <v-text-field
                  label="تاريخ الابتداء"
                  value="1/1/2022"
                  :disabled="true"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="تاريخ الابتداء"
                  value="1/1/2023"
                  :disabled="true"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" class="text-center">
                <v-btn
                  :disabled="!valid"
                  :loading="loading"
                  @click.prevent="stepper = 2"
                  class="app-btn  w-full"
                  >ارسال الطلب</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-stepper-content>

        <v-stepper-step :complete="stepper > 2" step="2">
          <div class="d-flex justify-space-between w-full">
            <span>اختر نوع البطاقة </span>
          </div>
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <div class="text-center d-flex align-center justify-center">
                  <v-chip class="ma-2" color="indigo" text-color="white">
                    <v-avatar left>
                      <v-icon>mdi-overscan</v-icon>
                    </v-avatar>
                    الكترونية
                  </v-chip>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="text-center d-flex align-center justify-center">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-chip
                          class="ma-2"
                          color="grey"
                          text-color="white"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-avatar left>
                            <v-icon>mdi-printer-outline</v-icon>
                          </v-avatar>
                          مطبوعة
                        </v-chip>
                      </template>
                      <span>غير مفعل الان</span>
                    </v-tooltip>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-btn color="primary mt-4 app-btn w-full" @click="stepper=3"> استمرار </v-btn>
        </v-stepper-content>
        <v-stepper-step :complete="stepper > 3" step="3">
          <div class="d-flex justify-space-between w-full">
            <span>ارسال طلب البطاقة</span>
          </div>
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <p>تحويل بنكي</p>
                  <ul>
                    <li>آيبان : SA9010000012472813000102</li>
                    <li>الحساب : 12472813000102</li>
                  </ul>
                </v-col>
                <v-col cols="6">
                  <p>دفع الكتروني</p>
                  <ul>
                    <li>غير مفعل ف الوقت الحالي</li>
                  </ul>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-btn color="primary mt-4 app-btn w-full" @click="register"> تاكيد </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-container>
    <!-- <div class="img">
                <partials-member-avatar  :img="user.Img"/>
        </div> -->
  </div>
</template>


<script>
import { price } from '@/utils/Helpers'
import { required } from '@/utils/Helpers'
import { updateUserValidation } from '@/utils/validations'
import { RegisterUser } from '@/repositoreis/user'
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
      // addOn:0,
      snackBar,
      updateUserValidation,
      inputs: [
        {
          label: 'الاسم باللغة العربية',
          key: 'Name_ar',
          value: '',
        },
        {
          label: 'الاسم باللغة الانجليزية',
          key: 'Name',
          value: '',
        },

        {
          label: 'الهاتف',
          key: 'Phone',
          value: '',
          hint: 'سيتم استخدام الهاتف لتجيل الدخول علي الموقع ',
        },
        {
          label: 'كلمة السر',
          key: 'Password',
          value: '',
        },
        {
          label: 'البريد الالكتروني',
          key: 'Email',
          value: '',
          hint: 'سيتم استخدام البريد الالكتروني لتفعيل العضوية ',
        },
      ],

      breif: {
        label: 'النبذة التعرفية',
        key: 'Breif',
      },
      form: {
        Name: null,
        Name_ar: null,
        Serial: 2000100,
        Role_id: null,
        Phone: null,
        Password: null,
      },
      errors: {},
      required,
    }
  },

  computed: {
    ...mapGetters({
      roles: 'ui/roles',
      user: 'user/user',
    }),
  },
  methods: {
    register() {
      this.loading = true
      RegisterUser(this.form)
        .then((d) => {
          this.error = null
          this.loading = false
          this.$store.commit(
            'ui/snackBar',
            'تم استلام الطلب بنجاح سنقوم بالتواصل معك'
          )
          this.$router.push('/')
        })
        .catch((e) => {
          console.log(e)
        })
    },
    price,
    // validate() {
    //   const nameArr = this.form.Name_ar.split(" ")
    //   console.log(this.countLeadingSpaces(this.form.Name_ar))
    // },
  },
  // watch: {
  //   form:{
  //       handler: function(val)  {
  //         this.validate()
  //       },
  //       deep:true
  //   }
  // },
  created() {
    if (this.user != null) {
      this.$store.commit('ui/snackBar', 'انت بالفل مشترك')
      this.$router.push('/')
      return
    }
    const roleId = parseInt(this.$route.query.role)
    this.form.Role_id = roleId
    let serial = 2000100
    if (roleId == 2) serial = 2200100
    if (roleId == 1) serial = 2400100
    this.form.Serial = serial
    Object.keys(this.form).forEach((key) => {
      this.errors[key] = []
    })
  },
}
</script>

<style src="@/assets/scss/pages/register.css"></style>