<template>
    <div class="blufon">
       <div class="top">
            <router-link to="/" class="top__name" href="">место встречи</router-link>
            <router-link to="/my" class="top__my" href="">мой аккаунт <div class="top__img"><img src="../img/carousel/avatar.png" alt=""></div> </router-link> 
       </div>
       <div class="boodyel">
            <div class="boodyel__list">
                <div class="boodyel__menu">
                    <div class="menu">категория<select class="menu__kategori" v-model="user">
                        <option class="menu__element">Любая</option>
                        <option class="menu__element">Кино</option>
                        <option class="menu__element">Спорт</option>
                        <option class="menu__element">Музыка</option>
                        <option class="menu__element">Обучение</option>
                        <option class="menu__element">Наука</option>
                        <option class="menu__element">Дети</option>
                        <option class="menu__element">Животные</option>
                        <option class="menu__element">Анимация</option>
                        <option class="menu__element">Рукоделие</option>
                        <option class="menu__element">Игры</option>
                        <option class="menu__element">Знакомства</option>
                        <option class="menu__element">Природа</option></select>
                    </div> 
                    <div class="menu">возраст<select class="menu__kategori" v-model="user">
                        <option class="menu__element">ну</option>
                        <option class="menu__element">Bob</option>
                        <option class="menu__element">Sam</option></select>
                    </div> 
                    <div class="menu">стоимость<select class="menu__kategori" v-model="user">
                        <option class="menu__element">Tom</option>
                        <option class="menu__element">Bob</option>
                        <option class="menu__element">Sam</option></select>
                    </div> 
                </div>
                <div class="list__bloc">
                        <router-link to="/cartel" class="list__element"> 
  
                            <img src="../img/cart/1.png" alt="">
                            <div>
                                <p>Цена: бесплатно   Категория: природа, 50+</p> 
                                <h2 >Поход на столбы</h2>
                                <p>10:00, ocт.Турбаза</p>
                            </div>
                        </router-link>
                        <router-link to="/cartel" class="list__element"> 
                            <img src="../img/cart/2.png" alt="">
                            <div>
                                <p>Цена: 100p   Категория: наука</p> 
                                <h2 >лекция “краткая история времени”</h2>
                                <p>18:30, мвц Сибирь</p>
                            </div>
                        </router-link>
                        <router-link to="/cartel" class="list__element"> 
                            <img src="../img/cart/3.png" alt="">
                            <div>
                                <p>Цена: бесплатно   Категория: игры</p> 
                                <h2 >Турнир CSGO</h2>
                                <p>20:00, онлайн</p>
                            </div>
                        </router-link>
                        <router-link to="/cartel" class="list__element">
                            <img src="../img/cart/4.png" alt="">
                            <div>
                                <p>Цена: бесплатно   Категория: музыка</p> 
                                <h2 >Гитарник</h2>
                                <p>18:00, Центральный парк</p>
                            </div>
                        </router-link>
                        <router-link to="/cartel" class="list__element"> 
                            <img src="../img/cart/1.png" alt="">
                            <div>
                                <p>Цена: бесплатно   Категория: природа, 50+</p> 
                                <h2 >Поход на столбы</h2>
                                <p>10:00, ocт.Турбаза</p>
                            </div>
                        </router-link>
                </div>

            </div> 
            <div class="boodyel__cart"></div>
       </div>
    </div>
</template>

<script>

</script>

<style scoped>
p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.16em;
    text-transform: uppercase;

    color: #000000;
   
}
h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.16em;
   

    color: #000000;
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
.boodyel{
    width: 1180px;
    display: flex;
   
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
}
.boodyel__list{
    width: 590px;
    height: 600px;
    background: #D9D9D9;
    border-radius: 10px;
}
.boodyel__cart{
    width: 500px;
    height: 600px;

    background: #D9D9D9;
    border-radius: 10px;
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
  text-decoration: none;
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
.top__img img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-left: 10px;
}
.boodyel__menu{
    width: 100%;
    height: 50px;
    display: flex;
    background: #D9D9D9;
    border-radius: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #888888;
}
.menu{
    height: 50px;
    display: flex;
    background: #D9D9D9;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.16em;
    text-transform: uppercase;

    color: #000000;
}
.menu__kategori{
    width: 80px;
    height: 30px;
    margin-left: 10px;
    background: #F2F2F2;
    border-radius: 5px;
    border: 0px;
    text-transform: uppercase;
}
.menu__element{
    width: 90px;
    height: 20px;
    margin-left: 10px;
    background: #F2F2F2;
    border-radius: 5px;
    border: 1px;

    justify-content: space-between;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
}
.list__bloc{
    height: 540px;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: scroll; /* прокрутка по вертикали */
    overflow-x: hidden;
}
.list__element{
    height: 180px;
    width: 550px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    background: #F2F2F2;
    border: 1px solid #A8A8A8;
    border-radius: 10px;
    text-decoration: none;
}
.list__element img{
    margin-left: 20px;
    margin-right: 20px;
    height: 100px;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>