<template>
   <div class="box">
    <div class="strukt">
         <div class="pole">
        </div>
        <div class="chat">
        </div>
        
    </div> 
    <div class="card">
        карточка
        ход
        правила
    </div> 
   </div>
   
</template>

<script>
export default{
    
}
</script>

<style>
.box{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.strukt{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
.pole{
    width: 800px;
    height: 450px;
    background: #ddd;
}
.chat{
    width: 300px;
    height: 450px;

    background: #6C6C6C;
    border: 2px solid #171717;
    border-radius: 20px;
}
.card{
    width: 100%;
    display: flex;
}
</style>
