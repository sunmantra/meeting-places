<template>
    <div class="v-carousel-item">
        <img :src="require('../img/carousel/' + item_data.img)" alt="">
    <!--
        <div class="imgtext">
         <p v-if="item_data.id===5">уроки танцев</p>
         <p v-else-if="item_data.id===6">Dataset-конференция</p>
         <p v-else-if="item_data.id===7">уроки танцев</p>
    </div>
    -->
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
   
    width:840px ;
    height: 450px ;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.v-carousel-item img{
    height: 430px;
    width: 840px;
   
}
.imgtext{
    
    
}
.imgtext p{
    color: var(--text-2-day, #FFF);
    text-align: center;
    font-size: 48px;
    font-family: Oswald;
    font-weight: 700;
    letter-spacing: 7.68px;
    text-transform: uppercase;
    
}
</style>