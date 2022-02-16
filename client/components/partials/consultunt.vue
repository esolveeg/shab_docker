<template>
 <div class="consultunt" >
     <div class="img"  :style="`background-image:url(${user.Img})`">
         
     </div>
     <div class="bottom">
         <h2>{{user.Name_ar}}</h2>
         <span class="job-title">{{user.Title}}</span>
         <p>{{user.Breif}}</p>
     </div>
     <div class="skills">
         <v-chip
      class="chip"
      style="width:100px;text-align:center"
      center
      v-for="skill in user.Skills.split(',')"
      :key="skill"

    >
      {{skill}}
    </v-chip>
   
        
     </div>
 </div>
</template>
<script>
export default {
    props:['user'],
 
}
</script>
<style scoped src="../../assets/scss/partials/consultunt.css" />
