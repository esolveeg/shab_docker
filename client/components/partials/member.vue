<template>
   <div class="member">
       <div class="img" :style="{borderColor : user.Color}">
           <img :src="user.Img" alt="الشاب الريادي">
       </div>
       <h2>{{user.Name_ar}}</h2>
   </div>
</template>
<script>
export default {
    props:['user']
}
</script>
<style scoped src="@/assets/scss/partials/member.css">