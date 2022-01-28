<template>
    <div class="share d-flex">

        <v-icon>mdi-twitter</v-icon>
        <v-icon>mdi-instagram</v-icon>
        <v-icon>mdi-facebook</v-icon>
        <v-btn text @click="copy">
            <span  v-if="!copied">نسخ الرابط</span>
            <span v-else>تم النسخ</span>

            </v-btn>
    </div>
</template>



<script>
export default {
    data(){
        return {
            copied : false
        }
    },
    methods:{
        async copy(){
            await navigator.clipboard.writeText(window.location);
            this.copied = true
     

        }
    }
}
</script>
<style>
.share .d-flex{
    margin-top: 20px;
}
    .share .v-icon{
        margin-right: 10px;
        font-size: 18px;
        cursor: pointer;
    }
    .share .v-btn{
        background-color: #fff;
        margin-right: 10px;
    }
</style>