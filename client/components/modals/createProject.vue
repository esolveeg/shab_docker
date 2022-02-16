<template>
    <v-row justify="center">
      <v-dialog
      v-model="modal"
      max-width="80%"
    >
      <v-card class="radius">
        <v-card-text>
          <v-container>
            <v-form ref="projectForm" :valid="valid">
                <v-row>
                    <v-col cols="12" class="my-8">
                        <h2 class="app-title">مشروع جديد</h2>
                    </v-col>
                <v-col cols="12" md="6">
                    <p class="app-error" v-show="error !=null">{{error}}</p>
                    <v-text-field
                    :rules="createProjectValidation.Title"
                    label="اسم المشروع"
                    @keyup.enter="$refs.cat.focus()"
                    v-model="form.Title"
                    :error-messages="errors.Title"
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select
                    label="التصنيف"
                    ref="cat"
                    @keyup.enter="$refs.phone.focus()"
                    :items="cats"
                    :loading="catLoading"
                    :rules="createProjectValidation.CategoryId"
                    item-text="Name"
                    item-value="Id"
                    v-model="form.CategoryId"
                    :error-messages="errors.CategoryId"
                    outlined
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="رقم الهاتف"
                    ref="phone"
                    @keyup.enter="$refs.status.focus()"
                    :rules="createProjectValidation.Phone"
                    v-model="form.Phone"
                    :error-messages="errors.Phone"
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select
                    label="حالة المشروع"
                    ref="status"
                    @keyup.enter="$refs.fund.focus()"
                    :items="statuses"
                    :rules="createProjectValidation.Status"
                    v-model="form.Status"
                    :error-messages="errors.Status"
                    outlined
                    ></v-select>
                </v-col>
                 <v-col cols="12" md="6">
                    <v-text-field
                    label="راس مال المشروع"
                    ref="fund"
                    @keyup.enter="$refs.city.focus()"
                    :rules="createProjectValidation.Fund"
                    type="number"
                    v-model="form.Fund"
                    :error-messages="errors.Fund"
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select
                    label="المدينة"
                    ref="city"
                    @keyup.enter="$refs.location.focus()"
                    :items="cities"
                    :loading="citiesLoading"
                    item-text="Name"
                    :rules="createProjectValidation.CityId"
                    item-value="Id"
                    v-model="form.CityId"
                    :error-messages="errors.CityId"
                    outlined
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field
                    label="الموقع الجغرافي"
                    ref="location"
                    :rules="createProjectValidation.Location"
                    v-model="form.Location"
                    :error-messages="errors.Location"
                    outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                      <v-file-input
                        accept="pdf/*"
                        ref="file"
                        v-model="form.File"
                        :rules="editId == null ? createProjectValidation.File : []"
                        label="ملف تعريفي عن المشروع"
                    outlined
                    ></v-file-input>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <!-- <v-img width="100" :src="img"></v-img> -->
                  <v-file-input
                        accept="image/*"
                        ref="image"
                        v-model="form.Img"
                        :rules="editId == null ? createProjectValidation.Img : []"
                        label="صورة عن المشروع"
                    outlined
                    ></v-file-input>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-file-input
                        accept="image/*"
                        ref="image"
                        v-model="form.Imgs"
                        multiple
                        label="صور متعددة عن المشروع"
                        outlined
                    ></v-file-input>
                </v-col>
                <v-col cols="12" md="6" lg="4">
                  <v-file-input
                        accept="image/*"
                        :rules="createProjectValidation.Logo"
                        ref="logo"
                        v-model="form.Logo"
                        label="شعار المشروع"
                    outlined
                    ></v-file-input>
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-textarea
                      label="نبذة عن المشروع"
                      @keyup.enter="$refs.status.focus()"
                      :rules="createProjectValidation.Breif"
                      v-model="form.Breif"
                      :error-messages="errors.Breif"
                      outlined
                      rows="3"
                      ref="breif"
                      ></v-textarea>
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn  :loading="loading" @click.prevent="submit" class="app-btn">اضافة</v-btn>
                </v-col>
                </v-row>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import editCreateProject from  '@/mixins/editCreateProject'

  export default {
   mixins:[editCreateProject]
  }
</script>

