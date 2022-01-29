<template>
<v-container>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text>

      <v-row>

        <v-col class="m-chart"  lg="3" md="6" cols="12">
          <app-mini-chart  class="mm-chart" :chart="todaysRevenue" />
        </v-col>
        <v-col class="m-chart"  lg="3" md="6" cols="12">
          <app-mini-chart  class="mm-chart" :chart="onlineRevenue" />
        </v-col>
        <v-col class="m-chart"  lg="3" md="6" cols="12">
          <app-mini-chart  class="mm-chart" :chart="empRevenue" />
        </v-col>
        <v-col class="m-chart"  lg="3" md="6" cols="12">
          <app-mini-chart  class="mm-chart" :chart="grossProfit" />
        </v-col>
      </v-row>
        </v-card-text>

      </v-card>

    </v-col>

    <v-col cols="12">
      <app-chart :chart="monthlySales" />
    </v-col>
    <v-col cols="12" md="6">
      <app-chart :chart="dailySales" />
    </v-col>
    <v-col cols="12" md="6">
      <app-chart :chart="topSales" />
    </v-col>
  </v-row>
</v-container>
</template>

<script lang="ts">
import AppChart from '@/utils/chart/components/Chart.vue'
import AppMiniChart from '@/utils/chart/components/MiniChart.vue'
import Vue from "vue";
import monthlySales from '@/charts/line/monthlySales'
import todaysRevenue from '@/charts/line/mini/todaysRevenue'
import onlineRevenue from '@/charts/bar/mini/onlineRevenue'
import grossProfit from '@/charts/line/mini/grossProfit'
import empRevenue from '@/charts/bar/mini/empRevenue'
import dailySales from '@/charts/bar/dailySales'
import topSales from '@/charts/pie/topSales'


export default Vue.extend({
  name: "Home",
  data(){
    return {
      monthlySales,
      topSales,
      todaysRevenue,
      grossProfit,
      empRevenue,
      onlineRevenue,
      dailySales
    }
  },
  components:{
    AppChart,
    AppMiniChart
  }
});
</script>
