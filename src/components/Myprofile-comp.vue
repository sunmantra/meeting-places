<template>
    <div class="cese">
        <div class="cese__struct">
            <div class="left">
                <div class="logname">
                    <img src="../img/user.jpg" alt="">
                <h1>Фамилия Имя</h1> 
                </div>
                <div class="statistic">
                    <h1>статистика </h1>
                    <li>всего игр сыграно:<div class="statistic__all">44</div></li>
                    <li>к-во побед:<div class="statistic__win"></div>44</li>
                    <li>к-во поражений:<div class="statistic__defeat">44</div></li>
                </div>
                </div>
                <div class="right">
                    <div class="right__chat">

                    </div>
 
                </div>
        </div>
        
        <div class="btn">
        <a class="btn_rl">назад</a>
        <a class="btn_rl">Create</a>
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 44px;
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

    color: #FFFFFF;
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

.statistic li{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/*right*/
.right{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.right__chat{
    width: 300px;
    height: 400px;
    background: #171717;
    border-radius: 15px;
}

</style>