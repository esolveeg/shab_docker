<template>
    <div class="member-avatar">
        <img :src="img" alt="">
    </div>
</template>


<script>
export default {
    props:['img']
}
</script>

<style scoped src="@/assets/scss/partials/member-avatar.css">