<template> 
   <div class="wrapper">
    <div class="content"> 
   <div class="container">

   
   <div class="imgfon">
     <img src="../img/homefon.png" alt=""> 
     <div class="imgfon__top"> 
      <router-link to="/about" class="headername__text" href="">о компании   </router-link>
      <router-link to="/reg" class="headername__text" href="">  войти</router-link>
    </div>             
      <div class="imgfon__bot"><p class="headername__text" href="">учись, играй, знакомься </p></div>
    </div>
  <div class= "headername">
    <div class="headername__text"> место встречи</div>
  </div>
  
  <div class="description">
    <div class="description__lr">
     <div class="description__text">
        <h1>Место Встречи</h1>
        <h3>выйди на новый уровень общения </h3>   
      </div> 
    </div>
  </div>

  <div class="description">
   <router-link to="/areg" class="btn_rl">зарегистрироваться</router-link> 
  </div>

  <div class="carousel1">
    <v-carousel :carousel_data="sliderItems"/> 
  </div>

  <div><h2>ТОП - 5</h2> </div>

  <div class="carousel2">
    <v-carouselTop :carousel_data="sliderTop"/> 
  </div>

  <div><h2>КАТЕГОРИИ</h2></div>

  <div class="categori">
    <a href="" class="categori__el">спорт </a>
    <a href="" class="categori__el">обучение</a>
    <a href="" class="categori__el">дети</a>
    <a href="" class="categori__el">наука</a>
    <a href="" class="categori__el">музыка</a>
    <a href="" class="categori__el">другое</a>
  </div>

</div>
  <footer class="footer">
      <div class="container">
        <div class="footer__text">
       
        </div>
      </div>
      
    </footer>
    </div>
    </div>
</template>

<script>

import vCarousel from '../components/v-carousel.vue'
import vCarouselTop from '../components/v-carouselTop.vue'

export default {
  name: 'App',
  components:{
    vCarousel,
    vCarouselTop
  },
  data(){
    return{
      sliderItems:[
        {id: 1, name: 'img1', img:'1.png'},
        {id: 2, name: 'img2', img:'2.png'},
        {id: 3, name: 'img3', img:'3.png'},
        {id: 4, name: 'img4', img:'4.png'},
      ],
      sliderTop:[
        {id: 5, name: 'img5', img:'5.png'},
        {id: 6, name: 'img6', img:'6.png'},
      ]
    }
  },
}
</script>

<style scoped >
a{
  text-decoration: none;
}
h1{
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 119px;
  color: #000000;
}
h2{
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 119px;
  color: #000000;
}
h3{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
}
.description{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.imgfon{
  position: absolute;
  text-align: center;
  right: 0px;
  top: 0px;
  height: 700px;
}
.imgfon img{
  height: 100%;
}
.imgfon__top{
  position: absolute;
  top: 20px;
  right: 16px;
}
.imgfon__bot{
  position: absolute;
  bottom: 40px;
  right: 16px;
}

.description__text{
  width: 670px;
  height: 234px;
}

.description__lr{
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.headername{
  margin-top:40px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.headername__text{
  margin-right: 15px;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%; 

  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #000000;
}

.carousel1{
  margin-top: 30px;
  margin-bottom: 100px;
}

.carousel2{
  margin-top: 50px;
  margin-bottom: 100px;
}

.categori{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 700px;
  max-width: 900px;
  align-content: space-around;
  justify-content: space-between;
  margin-bottom: 60px;
}
a.categori__el {
  height: 200px;
  width: 350px;
  display: flex;
  font-family: auto;
  font-size: 40px;
  font-weight: bold;
  color: rgb(0 0 0);
  text-decoration: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  outline: none;
  /*border: 1px solid rgba(0,0,0,.1);*/
  border-radius: 20px;
  background: #B9B9B9;
  transition: all .218s ease 0s;
  justify-content: center;
  align-items: center;
}
a.categori__el:hover {
  color: rgb(24,24,24);
  /*border: 1px solid rgb(198,198,198);*/
  background: #a0a0a0 ;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
}
a.categori__el:active {
  color: rgb(51,51,51);
  /*border: 1px solid rgb(204,204,204);*/
  background: rgb(238,238,238);
  box-shadow: 0 1px 2px rgba(0,0,0,.1) inset;
}
</style>
