<template>
    <div class="v-carousel-item">
        <img :src="require('../img/carousel/' + item_data.img)" alt="">
        <div class="text_about">
         <div v-if="item_data.id===1">
            - организовывай собственные мероприятия <br>
            - участвуй в мероприятиях других <br>
            - посмотри, какие события сейчас рядом 
            
         </div>
         <p v-else-if="item_data.id===2">- заводи новые знакомства <br>
            - расширяй кругозор <br>
            - ищи новые увлечения и хобби <br>
            - учись и развивай своё творчество вместе с нами!  </p>
         <p v-else-if="item_data.id===3">  Настоящее хобби – это то, чем приятно заниматься всегда </p>
         <p v-else> написать текст </p>
        
        </div>
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
.text_about{
    width: 360px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140.18%;

    display: flex;
    align-items: center;
    color: #000000;
}
</style>