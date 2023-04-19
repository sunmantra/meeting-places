<template> 
   <div class="description__img">
     <img src="../img/homefon.png" alt="">   
  </div>
  <div class= "headername">
    <div class="headername__text"> место встречи</div>
    <div>
      <a class="headername__text" href="">о компании </a>
      <a class="headername__text" href="">войти</a>            
    </div>
  </div>
  
  <div class="description">
  <div class="description__lr">
     <div class="description__text">
      <h1>Место Встречи</h1>
      <h2>Lem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices commodo sagittis lorem magnis in elementum. Felis nisl vitae nisl ultrices sem fames. </h2>   
    </div>
    
    <a class="btn_rl">зарегистрироваться</a>
  </div>
  
  <div class="description__lr">
   
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style scoped >
h1{
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 119px;
  color: #000000;
}
h2{
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
.description__img img{
  position: absolute;
  width: 600px;
  top: 0px;
  right: 0px;
 z-index: 1;
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
  z-index: 2;

}
.headername__text{
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%; 

  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #000000;


}
</style>
