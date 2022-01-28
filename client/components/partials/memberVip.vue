<template>
 <div class="vip" :style="`background-image:url(${user.Img})`">
     <h2>{{user.Name_ar}}</h2>

     <p>{{user.Breif}}</p>
 </div>
</template>
<script>
export default {
    props:['user'],
 
}
</script>

<style scoped>
.vip{
    background-size: cover;
    height: 300px;
    background-position: center;
    background-color: var(--primary);
    border-radius: 15px;
    position: relative;
    box-shadow: var(--box-shadow);
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease-in;
    z-index: 5;
}
.vip:hover {
    transform: scale(1.04);
}
.vip:hover p{
    height: auto;
}
.vip:hover::before{
     background-color: rgba(0,0,0,.6);
}
p {
    height: 0;
    overflow: hidden;
    transition: all .3s ease-in;

}

h2 , p{
    z-index: 3;
    padding: 0 20px;
    transition: all .3s ease-in;
}
.vip::before{
    content:"";
    width:100%;
    height:100%;
    z-index: 1;
    border-radius: 15px;
    top:0;
    left:0;
    position: absolute;
    transition:  background-color .3s ease;
   

}
</style>