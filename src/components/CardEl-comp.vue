<template>
    <div class="blufon">
       <div class="top">
            <router-link to="/" class="top__name" href="">место встречи   </router-link>
            <router-link to="/my" class="top__my" href="">мой аккаунт <div class="top__img"><img src="../img/carousel/avatar.png" alt=""></div> </router-link> 
        </div>
       <div class="boodyel">
            <div class="boodyel__left">
                <div class="boodyel__photo"><img src="../img/icon/cardel.png" alt=""></div>
                <div id="example-1">
                    <p style="margin-left: 25px;">к-во участников: {{ counter }}</p>
                    <button  style="border: 0px;" v-on:click="counter += 1" class="btn_rl">участвовать</button >
                </div>
            </div> 
            <div class="boodyel__R">
                <div class="textlist">
                    <h2 >Цена:</h2><p>бесплатно</p>
                    <h2 style="margin-left: 40px;">категория:</h2> <p>природа,  50+</p>
                </div>
                <div class="textlist">
                    <h2 style="font-size: 24px;">поход на столбы</h2>
                </div>
                <div class="textlist">
                    <h2>место встречи:</h2> <p> ост. Турбаза, 10:00 , 27.06.23</p>
                </div>
                <div class="textlist">
                    <h2>описание:</h2>
                </div>
                <p style="width: 600px;"> Добрый день, меня зовут Ирина, предлагаю в этот
                     понедельник прогуляться по центральным столбам, 
                     вас ждут веселые истории, красивые виды и чаепитие 
                     под скалой “Перья”.</p>
                <div class="textlist">
                    <h2>организатор:</h2><p>Ирина Дымченко</p>
                </div>
                

            
                <div class="Chat">
                    <div class="mess">
                        <div class="mess__one">
                            <img 
                            style="margin-top: 4px;
                            margin-left:5px ;" src="../img//icon/olga.png" alt="">
                            <div  style="display: flex;
                            flex-direction: column;
                             align-items: flex-start;">
                                <h1 style="font-size: 10px;">Ольга Ахмедова</h1>
                                <h1>Мы с мужем обязательно придем!</h1>
                            </div>  
                        </div>
                    </div>

                    <div style="display: flex;
                                flex-direction: row;
                                align-items: center;">
                        <input placeholder="  СООБЩЕНИЕ" class="textpole" >
                        <div class="strel"><img src="../img//icon/strel.png" alt=""></div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  el: '#example-1',
   data(){
    return{
    counter: 20
  }
}
}
</script>

<style scoped>
h1{
    color: #000;
    font-size: 13px;
    font-family: Inter;
    font-weight: 500;
    letter-spacing: 1.24px;
    margin: 0px 0px 0px 10px;
}
.Chat{
  background: #bab9b9;
  border-radius: 15px;
  width: 650px;
  height: 280px;
  display: flex;
  flex-direction: column;
    align-items: self-start;
}
.textpole {
  background: #ffffff;
  border-radius: 0px 0px 0px 15px ;
  width: 600px;
  height: 36px;
  border: 0px;
}
.mess{
    width: 100%;
    height: 245px;
}
.mess__one{
    border-radius: 7px;
    background: #D9D9D9;
    width: 320px;
    height: 41px;
    flex-shrink: 0;
    margin-top: 30px;
    margin-left: 30px;
    display: flex;
}
.strel{
    background: #ffffff;
  border-radius: 0px 0px 15px  0px;
  width: 47px;
  height: 37px;
  border: 0px;
}
h2{
    color: #000;
    font-size: 20px;
    font-family: Inter;
    font-weight: 500;
    letter-spacing: 3.84px;
    text-transform: uppercase;
    margin-top: 10px;
}
.top__my:hover{
    color: #ffffff; 
    transition: all .218s ease 0s;
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
    text-decoration: none;
}
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
    color: var(--text-night, #000000);
    text-align: left;
    font: 500 20px/140% "Oswald", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
}
.top__name:hover{
  transition: all .300s ease 0s;
  color: rgb(255, 255, 255);
}

.top__img img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
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
    width: 450px;
    height: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-between;
}
.boodyel__R{
    width: 650px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.boodyel__photo{
    width: 100%;
    height: 300px;
    background: #dfdfdf;
    border-radius: 20px;
}
.boodyel__photo img{
    width: 100%;
}
.textlist{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
}

p{
    color: #000;
    font-size: 14px;
    font-family: Inter;
    font-weight: 500;
    letter-spacing: 2.24px;
 
}
</style>