<template> 
  
  <div class="description__lr">
    <div class="description__img">
      <img src="../img/game.png" alt="game">   
    </div>
    <a class="btn_rl">Мобильная версия</a>
  </div>
  
  <div class="description__lr">
    <div class="description__text">
      <h1>
        Hues and Cues — это яркая игра, в которой перед игроками стоит задача объяснить цвета словами.
      </h1>
      <h2>Используя только подсказки из одного и двух слов, игроки пытаются заставить других угадать определенный оттенок из ХХХ цветов на игровом поле. Чем ближе догадки к цели, тем больше очков заработает и загадывающий, и угадывающий. Поскольку все воображают цвета по-разному, соединять цвета и подсказки никогда не было так весело! </h2>   
    </div>
    <a class="btn_rl">Играть</a>
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #FFFFFF;
}
h2{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #FFFFFF;
}
.content{
  flex: 1 1 auto;
  background: #2D2D2D;
  height: 100%;
}
.footer{
  height: 100px;
  background: #171717;
}
.container{
  max-width: 1180px;
  margin: 0px auto;
  height: 100%;
}
.description{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.description__img img{
  width: 250px;
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
</style>
