<template>
    <div class="post" @click.prevent="$router.push({name : 'blog-id' , params:{id : post.Id}})">

        <div class="top">
            <div class="img">
                <img :src="post.Img" alt="">
                <p class="cat">{{post.CategoryName}}</p>
            </div>
           
        </div>
        <div class="bottom">
            <h2>{{post.Title}}</h2>
        </div>
        <div class="user">
            <div class="d-flex">
            <partials-member-avatar :img="post.UserImg" @click.prevent="toggle()"/>
                <div class="name">
                    <p>نشر بواسطة</p>
                    <p>{{post.UserName}}</p>
                </div>
            </div>
        </div>
        <div class="date">
            <div>
                <h3><v-icon>mdi-calendar-range-outline</v-icon>01 - 07 - 2021</h3>
                <h3><v-icon>mdi-eye-outline</v-icon>{{post.Views}}</h3>
            </div>
            <v-btn text>التفاصيل</v-btn>
        </div>
    </div>

</template>


<script>
export default {
    props:['post']
}
</script>
<style  src="../../assets/scss/partials/post.css" />
