<template>
    <div class="v-carousel-item">
        <img :src="require('../img/carousel/' + item_data.img)" alt="">
    </div>
</template>

<script>
    
    export default{
        name:"v-carousel-item",
        props: {
            item_data:{
                type: Object,
                default:() =>{}
            }
        },
        data(){
            return{}
        },
        computed:{}
    }
</script>

<style scoped>
.v-carousel-item{
   
    width:900px ;
    height: 450px ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
   
}
.v-carousel-item img{
    height: 450px;
    width: 900px;
    
}
</style>