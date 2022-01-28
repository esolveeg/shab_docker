<template>
    <footer>
      <v-container>
   <v-row>
            <v-col cols="6" md="3">
                <ul>
                    <li><nuxt-link to="/">
                        الرئيسية
                    </nuxt-link></li>
                    
                     <li><nuxt-link to="/blog">
                        المدونة
                    </nuxt-link></li>
                     <li><nuxt-link to="/ryadeen">
                        الشبكة  التنفيذية
                    </nuxt-link></li>
                    <li><nuxt-link to="/contact">
                        اتصل بنا
                    </nuxt-link></li>
                    
                    
                    
                </ul>
            </v-col>
            <v-col cols="6" md="3">
                <ul>
                     <li><nuxt-link to="/memberships">
                        العضويات
                    </nuxt-link></li>
                    <li><nuxt-link to="/about">
                        من نحن
                    </nuxt-link></li>
                     <li  v-if="user == null"><a
                        @click.prevent="$store.commit('ui/loginModal', true)">
                        تسجيل الدخول
                    </a></li>
                     <li  v-if="user == null"><nuxt-link to="/consultunts">
                       المستشارن
                    </nuxt-link></li>
                    <li v-else><nuxt-link to="/profile" >
                     {{user.Name_ar}}
                    </nuxt-link></li>
                    
                </ul>
            </v-col>
            <v-col cols="6" md="3">
                <ul>
                   
                     <li><nuxt-link to="/projects">
                        المشاريع
                    </nuxt-link></li>
                    <li><nuxt-link to="/members">
                      الاعضاء
                    </nuxt-link></li>
                     <li><nuxt-link to="/videos">
                        الفيديوهات
                    </nuxt-link></li>
                    
                </ul>
            </v-col>
            
             <v-col cols="6" md="3" class="follow">
                 <h2>تابعنا هنا</h2>
                <ul >
                   <a href="https://www.youtube.com/channel/UCTymSdrvBrQy4RxFap1d_ow" target="_blank"> <v-icon>mdi-youtube</v-icon></a>
                   <a href="https://twitter.com/AlshabAlriyadi" target="_blank"> <v-icon>mdi-twitter</v-icon></a>
                   <a href="https://www.instagram.com/alshabalriyadi/" target="_blank"> <v-icon>mdi-instagram</v-icon></a>
                </ul>
            </v-col>
        </v-row>
        <v-row justify="center" class="copyrights">
            <p>© 2021 جميع الحقوق محفوظة الي BUSINESS PRO </p>
            <img src="@/assets/images/powerd.png">
        </v-row>
      </v-container>
     
    </footer>
</template>
<script>
import { mapGetters } from 'vuex'
import Nav from '@/utils/Nav'
import AccountNav from '@/utils/AccountNav'
export default {
  data() {
    return {
      active: false,
      menu: false,
      accountItems: AccountNav,
      items: Nav,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
      userLoading: 'user/loading',
      loggedIn: 'user/loggedIn',
    }),
  },
  methods: {
    toggle() {
      this.menu = !this.menu
    },
    logout() {
      if (process.client) {
        localStorage.removeItem('token')
      }
      this.$store.commit('user/user', null)
      this.$store.commit('ui/snackBar', 'تم تسجيل الخروج بنجاح')
      if (this.$route.name == 'profile') this.$router.push({ name: 'index' })
    },
  
  },
  
}
</script>