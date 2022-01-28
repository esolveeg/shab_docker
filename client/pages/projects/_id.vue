<template>
<div class="project">
    <v-container>
        <v-row>
            <!-- <v-col cols="12" class="img">
                    <img :src="project.Img" alt="">
            </v-col> -->
            <v-col cols="12" md="8">
                <div class="top">
                    <div class="title">
                        <img :src="project.Logo" alt="">
                        <div class="d-flex justify-space-between">
                            <h2>{{project.Title}}</h2>
                            <h3><v-icon>mdi-flag</v-icon>متعثر</h3>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <v-card class="radius">
                        <v-tabs
                            fixed-tabs
                            v-model="tab"
                            dark
                        >
                            <v-tab>
                            التفاصيل
                            </v-tab>
                            <v-tab>
                            راس المال
                            </v-tab>
                            <v-tab v-if="project.File">
                            ملف تعريفي
                            </v-tab>
                            <v-tab v-if="project.Imgs">
                            المعرض
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab">
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text class="breif">{{ project.Breif }}</v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text class="fund">{{ price(project.Fund) }}</v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item v-if="project.File">
                                <v-card flat>
                                    <v-card-text >
                                        <v-btn class="app-btn" @click.prevent="downloadFile">
                                            تحميل الملف
                                        </v-btn>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item v-if="project.File">
                                <v-card flat>
                                    <v-card-text >
                                        <div class="gallery">
                                            <v-img v-for="img in project.Imgs.split(',')" :key="img" :src="`${img}`" @click.prevent="openImg(img)"/>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>
                </div>
                <!-- {{project}} -->
            </v-col>
            <v-col cols="12" md="4">
              <div class="meta">
                  <h2>معلومات الاتصال</h2>
                  <div class="email">
                      <v-icon>mdi-message</v-icon>
                      <div class="meta__info">
                          <p>البريد الالكتروني</p>
                          <p>{{project.Email}}</p>
                      </div>
                  </div>
                  <div class="phone">
                      <v-icon>mdi-phone</v-icon>
                      <div class="meta__info">
                          <p>الهاتف</p>
                          <p>{{project.Phone}}</p>
                      </div>
                  </div>
              </div>
                    <iframe :src="project.Location" frameborder="0"></iframe>
              <div class="share">
                <partials-share/>
              </div>

            </v-col>
            <!-- <v-col cols="12" class="map">
                <v-card>
                </v-card>
            </v-col> -->
        </v-row>
    </v-container>
    <v-dialog
      v-model="dialog"
      width="700"
      class="dialog"
    >
        <v-img :src="activeImg"/>
        <span class="dialog-close" @click.prevent="closeImg"><v-icon >mdi-close</v-icon></span>
    </v-dialog>
</div>
</template>

<script>

import {price} from '@/utils/Helpers'
import {Project} from '@/repositoreis/global'

export default {
    data(){
        return{
            loading : true,
            project : {},
            activeImg:"",
            dialog:false,
            tab:2
        }
    },
    methods:{
        price,
        downloadFile(){
           window.open(this.project.File)
        },
        openImg(img){
            this.activeImg = img
            this.dialog = true
        },
        closeImg(){
            this.activeImg = ''
            this.dialog = false
        }
    },
    created(){
        Project(this.$route.params.id)
        .then((d) => {
            this.project = d
            this.loading = false
        })
    }
}

</script>


<style src="@/assets/scss/pages/project.css" />
