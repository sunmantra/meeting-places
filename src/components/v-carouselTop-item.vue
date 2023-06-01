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
    background: #C6C6C6;
    width: 700px;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.v-carousel-item img{
    height: 350px;
    border-radius: 15px;
}
</style>