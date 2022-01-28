<template>
  <div class="blog">
    <v-container>
      <v-row>
        <!-- <v-col cols="3" class="sm-hidden">
          <v-text-field v-model="form.search" clearable label="بحث"></v-text-field>
          <layouts-side-bar-cats :cats="cats" v-if="!catLoading" @filter="selectCat" @clear="clearCat"/>
          <v-skeleton-loader v-else type="list"></v-skeleton-loader>
        </v-col> -->
        <v-col cols="12" class="py-12 ">
          <v-col cols="12" class="md-hidden">
            <div class="d-flex align-center justify-space-between">
              <h2>اخر الفعاليات</h2>
              <!-- <v-icon  @click.prevent="showFilters">mdi-filter</v-icon> -->
            </div>
          </v-col>
        
          <v-skeleton-loader v-if="loading" type="card"></v-skeleton-loader>
          <div v-else-if="items.length > 0">
            <v-row>
              <v-col cols="12" md="3" v-for="event in items" :key="event.Id">
                <partials-event :event="event" />
              </v-col>
            </v-row>
          </div>
          <div v-else>
            <h2>لا يوجد فغاليات</h2>
          </div>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card tile>
          <v-card-title class="bg-primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click.prevent="filter">حفظ</v-btn>
          </v-card-title>
          <v-card-text>
            <v-text-field
                class="ml-8 md-hidden"
                v-model="form.search"
                label="بحث"
              ></v-text-field>
            <layouts-side-bar-cats :cats="cats" v-if="!catLoading" @filter="selectCat" />
            <v-skeleton-loader v-else type="list"></v-skeleton-loader>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>


<script>
import { Events } from '@/repositoreis/global'
import { mapGetters } from 'vuex'
import filterMixin from  '@/mixins/filter'
export default {
  mixins:[filterMixin],
  computed: {
    ...mapGetters({
      loading: 'event/loading',
      items: 'event/events',
    }),
  },
  data() {
    return {
      catsType :'event'
    }
  },
  methods: {
    getData(){
      Events(this.form).then((d) => {
        this.$store.commit('event/events', d)
        this.$store.commit('event/loading', false)
        console.log(d)
      })
    }
  },
}
</script>