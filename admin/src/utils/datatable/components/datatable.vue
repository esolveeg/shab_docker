<template>
  <div>
   
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="primary-text mb-4">{{$t(table.title)}}</h2>
            <p class="">{{$t(table.description)}}</p>
          </v-col>
          <v-col cols="12">
          <v-data-table
            :headers="table.headers"
            :items="table.data"
            :loading="table.loading"
            dense
            :search="table.search"
            class="elevation-4"
            fixed-header
            height="400px"
          >
            <template v-slot:top >
               <app-form :form="table.filters" @change="filter" v-if="table.hasFilters"/>
               <div class="pa-4">
                <v-btn v-if="!table.error && table.hasFooter && (!table.hasFilters || table.filters.valid)" color="primary" class="w-full my-4" @click.prevent="showTotals">{{$t('show_totals')}}</v-btn>
               </div>
               <v-container v-if="table.searchable">
                 <v-text-field
                  v-model="table.search"
                  prepend-icon="mdi-magnify"
                  :label="$t('search')"
                  single-line
                  hide-details
                ></v-text-field>
               </v-container>
            </template>
            <template v-slot:body v-if="table.error">
              <tr class="text-center py-4">
                <td :colspan="table.headers.length">
                  {{ $t("error_getting_data") }}
                </td>
              </tr>
            </template>
             <template v-slot:no-data  v-if="table.hasFilters && !table.filters.valid">
                  {{ $t("select_data") }}
            </template>
            <template slot="body.append" v-if="table.hasFooter && table.data.length > 0">
              <tr class="text-center md-hidden black--text bg-gredient">
                <th
                  class="text-center text-color"
                  v-for="(header, index) in table.headers"
                  :key="index"
                >
                  <span v-if="index == 0 && !header.total">
                    {{ $t("totals") }}
                  </span>
                  <span v-else-if="!header.isTotal"> </span>
                  <span v-else>
                    {{ currency(header.total) }}
                  </span>
                </th>
              </tr>
            </template>
            <template v-slot:[`item.Img`]="{ item }">
              <v-img :src="item.Img"></v-img>
            </template>
            <template v-slot:[`item.Actions`]="{ item }" >
              <div class="actions">

                  <v-btn
                    v-if="table.hasEdit"
                    @click.prevent="$router.push({name:`${$route.name}-edit` , params:{id:item.Id}})"
                    color="primary"
                    class="mr-4"
                  >
                  <v-icon
                    small
                  >
                    mdi-pencil
                  </v-icon>
                  <!-- {{$t('table.edit')}} -->

                </v-btn>
                <v-btn
                    v-if="table.hasView"
                    @click.prevent="$router.push({name:`${$route.name}-view` , params:{id:item.Id}})"
                    color="warning"
                    class="mr-4"
                  >
                  <v-icon
                    small
                  >
                    mdi-eye
                  </v-icon>
                  <!-- {{$t(' table.view')}} -->

                </v-btn>
              </div>
            </template>
          </v-data-table>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog
      v-model="dialog"
      width="400"
    >
      <v-card>
        <v-card-title class="text-h5 primary">
          {{$t('totals')}}
        </v-card-title>

        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    {{$t('key')}}
                  </th>
                  <th class="text-left">
                    {{$t('total')}}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(header , index) in totalsHeaders"
                  :key="index"
                >
                  <td>{{ header.text }}</td>
                  <td>{{ currency(header.total) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- <v-btn @click.prevent="table.getData()">reload</v-btn> -->
  </div>
</template>

<script lang="ts">
import Datatable from "@/utils/datatable/datatable";
import { Header } from "@/utils/datatable/datatableInterface";
import { currency } from "@/utils/helpers";
import AppForm from '@/utils/form/components/Form.vue'

import Vue from "vue";
export default Vue.extend({
  props: {
    table: Datatable,
  },
  data() {
    return {
      dialog : false
    }
  },
  components:{
    AppForm
  },
  computed:{
    totalsHeaders(){
      return this.table.headers.filter((header:Header) => {
        return header.isTotal ? header : ''
      })
    }
  },
  methods: {
    currency: (x: number) => currency(x),
    filter(val:any){
      // reset headers totals to avoid sum bug
      // if we dont do this the class will add the totals to thee preevios data totals
      this.table.headers.forEach((header:Header) => {
        header.total = 0
      })
        this.table.getData()
    },
    showTotals(){
      this.dialog=true
    }
  },
});
</script>