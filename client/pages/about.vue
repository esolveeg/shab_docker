<template>
  <div >
      <section class="about">
        <v-container>
          <v-row v-if="home == null">
            <v-col  cols="12" sm="6" lg="3" v-for="i in 4" :key="i">
              <v-skeleton-loader
                class="mx-auto"
                height="300"
                type="card"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
          <v-row justify="start" align="center" v-else>
            <v-col cols="12" md="5">
              <img class="img" src="http://134.209.230.113:8587/assets/about.jpg" />
            </v-col>
            <v-col cols="12" md="7">
              <h2 class="app-title mb-8">من نحن</h2>
              <p>
                منصة مجتمع الشاب الريادي إحدى برامج ريادة الأعمال في شركة “بزنس
                برو Business Pro l” للاستشارات
              </p>
              <h3>ما يميزنا</h3>
              <p class="features">المنصة الأولى عربياً لرواد الأعمال وأصحاب المشاريع الواعدة التي تجمع رواد الأعمال ومشاريعهم التجارية في منصة واحدة تُسهم في نمو أعمالهم وتحقيق طموحاتهم نحو المستقبل</p>
              
              <h3>اهداف المنصة</h3>
              <ul>
                <li> تمكين المنتسبين من تأسيس مشاريعهم التجارية بالتوافق مع رؤية المملكة 2030. </li>
                <li>تطوير المشاريع لتحقيق النمو والاستدامة المالية. </li>
                <li>رفع مستوى النوعية لمشاريع الأعضاء.</li>
                <li>إحداث تغيير في واقع ريادة الأعمال في المملكة العربية السعودية.</li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </section>
       <section class="goals">
         <v-container>
           <v-row v-if="home == null">
             <v-col cols="12"    sm="6" lg="3" v-for="i in 4" :key="i">
              <v-skeleton-loader
                class="mx-auto"
                height="300"
                type="card"
              ></v-skeleton-loader>
            </v-col>
           </v-row>
           <v-row v-else>
              <v-col
              cols="12"
              sm="6"
              lg="3"
              class="goals"
              v-for="(goal, index) in home.Goals"
              :key="index"
              
            >
              <partials-icon-text :item="goal" />
            </v-col>
           </v-row>
         </v-container>
       </section>
     
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      home: 'ui/home',
    }),
  },
}
</script>
<style>
.about{
  padding: 50px 0;
}
.img{
  width: 100%;
  /* height: 100%; */
}
.goals{
  padding:50px 0 ;
  /* background-color: var(--bg-darker); */
}
h2{
  text-align: right !important;
}
ul,.features{
  padding-right: 20px;
}
</style>