<template>
    <div class="project-p" >
        <div class="top" @click.prevent="open">
            <div class="img">
                <img :src="project.Img" :alt="project.title">
            </div>
            <div class="logo">
                <img :src="project.Logo" :alt="project.title">
            </div>
        </div>
        <div class="bottom">
            <h2 @click.prevent="open">{{project.Title}}</h2>
            <div class="flag">
                <div>
                    <v-icon>mdi-flag</v-icon>
                    {{project.Status}}    
                </div>
                 <v-btn @click.prevent="edit" v-if="$route.name == 'profile'" class="edit-btn" text><v-icon>mdi-application-edit-outline</v-icon>تعديل</v-btn>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    props:['project'],
    methods:{
        edit(){
            this.$store.commit('projects/editId' ,this.project.Id)
            this.$store.commit('ui/projectModal' ,true)
        },
        open(){
            this.$router.push({name : 'projects-id' , params:{id : this.project.Id}})
        }
    }
}
</script>
<style scoped src="../../assets/scss/partials/project.css" />
