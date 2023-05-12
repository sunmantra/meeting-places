<template>
    <div class="cese">
        <div class="cese__struct">
            <div class="left">
                <div class="logname">
                    <img src="../img/user.jpg" alt="">
                <h1>Фамилия Имя</h1> 
                </div>
                <div class="statistic">
                    <li>Город:<div class="statistic__all">Красноярск</div></li>
                    <li>Возраст:<div class="statistic__win"></div>35</li>
                    <li>Пол:<div class="statistic__defeat">М</div></li>
                </div>
                
                <div class="about">
                </div>
                расскажите о себе
                <div class="child">
                    <h1>ДЕТИ:</h1>
                   <div class="bool">
                  <h1>+</h1>
                   </div>
                </div>
            </div>

            <div class="right">
                <p>мои подписки</p>
                <div class="right__chat">
                </div>
                <p>мои мероприятия</p>
                <div class="right__chat">
                </div>
            </div>
        </div>
   
    </div>   
</template>

<script>
export default{
    
}
</script>

<style scoped >
.cese{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #E6E6E6;
}
.cese__struct{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
}
.left{
width: 50%;
}
h1{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 47px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.16em;
    text-transform: uppercase;

    color: #000000;

}
li{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;

    letter-spacing: 0.16em;
    text-transform: uppercase;

    color: #000000;
}
.logname{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;   
}
.logname img{
    width: 150px;
    z-index: 0;
    border-radius: 50%;
}

.logname h1{
    margin-left: 50px;
}
.statistic{
    margin-top: 30px;
}
.statistic li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
}
/*right*/
.right{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}
.right__chat{
    width: 400px;
    height: 200px;
    background: rgba(217, 217, 217, 0.52);
    border-radius: 15px;
}
.about{
width: 500px;
height: 150px;
margin-top: 30px;
background: rgba(217, 217, 217, 0.52);
border-radius: 20px;
}
.child{
    width: 500px;
    height: 100px;
    margin-top: 30px;
    background: rgba(217, 217, 217, 0.52);
}
.bool{
    width: 40px;
    height: 40px;
    background: #C6C6C6;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>