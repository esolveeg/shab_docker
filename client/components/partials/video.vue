<template>
        <div class="video-partial">
            <no-ssr  placeholder="Loading...">
                <iframe width="100%" height="350" src="https://www.youtube.com/embed/2MiTWgoazy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </no-ssr>
            <div class="desc">
                <h3>محتوي الحلقة</h3>
                <p>لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريدأكسير سيتاشن يللأمكو لابورأس</p>
            </div>
        </div>
</template>
<script>
export default {
    props:['video'],
    data(){
        return {
            ready:false,
            dialog:false,
            videoId:"",
        }
    },
}
</script>
<style  src="@/assets/scss/partials/video.css" />

