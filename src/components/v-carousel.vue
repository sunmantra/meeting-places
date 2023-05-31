<template>
    <div class="btncentr">
        <button id="P" @click="prevslide">^</button>
        <div class="wrapp">
            <div class='v-carousel' :style="{'margin-left':'-'+(100*currentSlideIndex)+'%'}">
                <div class="elcar">
                    <v-carousel-item 
                v-for="item in carousel_data"
                :key="item.id"
                :item_data="item"
                />
                </div>
                
            </div> 
            
        </div>
        <button id="N" @click="nextslide">^</button> 
    </div>
    
</template>

<script>
    import vCarouselItem from './v-carousel-item.vue';

    export default{
        name:"v-carousel",
        components:{
            vCarouselItem
        },
        props: {
            carousel_data:{
                type: Array,
                default:() =>[]
            }
        },
        data(){
            return{
                currentSlideIndex:0
            }
        },
        methods:{
            prevslide(){
                if(this.currentSlideIndex>0)
                this.currentSlideIndex--
            },
            nextslide(){
                if(this.currentSlideIndex >= this.carousel_data.length - 1 )
                this.currentSlideIndex=0
                else
                this.currentSlideIndex++
            }
        }
    }
</script>

<style scoped>

.wrapp{
    max-width: 700px;
    max-height: 500px;
    overflow: hidden;
    margin: 0 auto;
    background: yellow;
    border-radius: 20px;
}
.v-carousel {
    display: flex;
    transition: all ease .7s;
}
.elcar{
    display: flex;
}

.btncentr{
    width: 900px;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
}

.btncentr button{
    width: 80px;
    height: 80px;

    background: #888888;
    border-radius: 50px;
    border: 0;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    color: #000000;
}
#P{
    transform: rotate(-90deg);
}
#N{
    transform: rotate(90deg);
}
</style>