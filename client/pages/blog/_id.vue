<template>
    <div class="post-page">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-img :src="post.Img" class="img" alt="" />
                    <div class="top">
                        <div class="title">
                            <h2>{{post.Title}}</h2>
                            <h4 class="views"><v-icon>mdi-eye-outline</v-icon>{{post.Views}}</h4>
                            <!-- <p>{{post.Created_at}}</p> -->
                        </div>
                       <div class="user">
                            <div class="d-flex">
                            <partials-member-avatar :img="post.UserImg" @click.prevent="toggle()"/>
                                <div class="name">
                                    <p>نشر بواسطة</p>
                                    <p>{{post.UserName}}</p>
                                </div>
                            </div>
                            <partials-share></partials-share>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12">
                    <v-card>
                        <v-card-text class="content" v-html="post.Content">
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script>

import {price} from '@/utils/Helpers'
import {Post} from '@/repositoreis/global'

export default {
    data(){
        return{
            loading : true,
            post : {},
            tab:2
        }
    },
    methods:{
        price,
        downloadFile(){
           window.open(this.post.File)
        }
    },
    created(){
        Post(this.$route.params.id)
        .then((d) => {
            this.post = d
            this.loading = false
        })
    }
}

</script>


<style src="@/assets/scss/pages/post.css" />
