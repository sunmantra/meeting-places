<template>
    <div class="blufon">
       <div class="top">
            <router-link to="/" class="top__name" href="">место встречи   </router-link>
            <div class="top__my">мой аккаунт <div class="top__img">img</div></div>
       </div>
       <div class="boodyel">
            <div class="boodyel__left">
                <div class="boodyel__photo">фото мероприятия</div>
                <div class="btn_rl">участвовать</div>
            </div> 
            <div class="boodyel__R">
                <div class="textlist">
                    <p >Цена</p>
                    <p>категория</p>  
                </div>
            </div>
       </div>
    </div>
</template>

<script>

</script>

<style scoped>
.top{
    display: flex;
    width: 1180px;
    height: 60px;
    margin-bottom: 20px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
}

.top__name{
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
.top__my{
    display: flex;
    margin-right: 15px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #000000;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-between;
}
.top__img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: #ffffff;
    margin-left: 10px;
}
.boodyel{
    width: 1180px;
    display: flex;
   
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
}

.boodyel__left{
    width: 400px;
    height: 600px;
    display: flex;
    background: #6b6b6b;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-between;
}
.boodyel__R{
    width: 650px;
    height: 600px;

    background: #6b6b6b;
}
.boodyel__photo{
    width: 400px;
    height: 300px;
    background: #dfdfdf;
    border-radius: 20px;
}
.textlist{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
}

.textlist p{
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