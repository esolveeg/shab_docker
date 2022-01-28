<template>
    <div class="icon-text">
        <div class="icon">
            <v-icon>{{item.Icon}}</v-icon>
        </div>
            <h2>
                {{item.Title}}
            </h2>
            <p>{{item.Value}}</p>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>
<style scoped src="../../assets/scss/partials/icon-text.css" />
