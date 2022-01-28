<template>
<div class="features">
    <v-skeleton-loader type="table" v-if="home == null"></v-skeleton-loader>
    <v-simple-table v-else>
    <template v-slot:default>
      <thead>
        <tr>
            <th></th>
          <th class="text-center">
              <h2>
                المزايا
              </h2>
          </th>
          <th class="text-center " v-if="level == 0 || level == 1">
              <h2 class="mobader">
            مبادر
              </h2>
          </th>
          <th class="text-center " v-if="level == 0 || level == 2">
              <h2 class="tamooh">
            طموح
              </h2>
          </th>
          <th class="text-center " v-if="level == 0 || level == 3">
              <h2 class="ryady">
            ريادي
              </h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in home.Features"
          :key="item.name"
        >
          <td>{{ item.Name }}</td>
          <td>{{ item.Breif }}</td>
          <td v-if="level == 0 || level == 1">
            <v-icon v-if="item.Level == 0">mdi-check</v-icon>
            <v-icon v-else>mdi-close</v-icon>
              
            </td>
          <td v-if="level == 0 || level == 2">
            <v-icon v-if="item.Level < 2">mdi-check</v-icon>
            <v-icon v-else>mdi-close</v-icon>
              
            </td>
          <td v-if="level == 0 || level == 3">
            <v-icon >mdi-check</v-icon>              
            </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>



<script>
import { mapGetters } from 'vuex'
export default {
   props:['level'],
  computed: {
    ...mapGetters({
        home : "ui/home",
    }),
  },
}
</script>
