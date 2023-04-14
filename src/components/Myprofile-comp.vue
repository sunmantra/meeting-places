<template>
    <div class="cese">
        <div class="cese__struct">
            <div class="left">
                <div class="logname">
                <img src="../img/user.jpg" alt="">
                <h1>логиннаме</h1> 
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
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;

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

    color: #8472C8;

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
.btn{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

</style>