<template> 
   <div class="wrapper">
    <div class="content"> 
   <div class="container">

   
   <div class="imgfon">
      <img src="../img/homefon.png" alt=""> 
      <div class="imgfon__sc8"><img src="../img/sc8.png" alt=""></div>
      <div class="imgfon__top"> 
        <router-link id="texthover" to="/about" class="headername__text" href="">о компании   </router-link>
        <router-link id="texthover" to="/reg" class="headername__text" href="">  войти</router-link>
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
        <h3>выйди на новый уровень общения, создавай встречи, находи новых знакомых  </h3>   
      </div> 
    </div>

  </div>

  <div class="description">
   <router-link to="/areg" class="btn_rl">зарегистрироваться</router-link> 
    <div class="strel">
      <img src="../img/homestrel.png" alt=""/>
    </div>
  </div>

  <div class="carousel1">
    <v-carousel :carousel_data="sliderItems"/> 
  </div>

  <div><h2>ТОП - 5</h2> </div>

  <div class="carousel2">
    <v-carouselTop :carousel_data="sliderTop"/> 
  </div>

</div>
  <footer class="footer">
      <div class="container">
        <div style="display: flex;">
            <div class="footer__text">
            <h3>О нас</h3> 
            <p>О компании</p> 
            <p>Контакты</p>
            
          </div>
          <div class="footer__text">
            <h3>"Место Встречи" в соц. сетях</h3> 
            <img style="margin-left: 50px;" src="../img/icon/instagram.svg" alt="">
            <img style="margin-left: 50px;" src="../img/icon/telegram.svg" alt="">
            <img style="margin-left: 50px;" src="../img/icon/twitter.svg" alt="">
          </div>
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
.imgfon__sc8{
  position: absolute;
  text-align: center;
  margin-top: 60px;
  right: 0px;
  top: 0px;
  height: 450px;
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
  margin-left: 50px;
}

.carousel2{
  margin-top: 50px;
  margin-bottom: 100px;
}


#texthover:hover{
  transition: all .218s ease 0s;
  color: rgb(238,238,238);
}

.strel{
  width: 50px;
  margin-right: 45%;
  margin-top: 20px;
}
.strel img{
  width: 50px;
}

.footer__text{
  width: 350px;
  margin-left: 20px;
}

.footer__text p{
  color: var(--text-day, #000);
font-size: 14px;
font-family: Open Sans;
line-height: 140%;
letter-spacing: 2.94px;
text-transform: uppercase;
}
</style>
