<template>
    <div class="blufon">
        <div style=" width: 100%;
    margin-left: 350px;
    margin-top: 40px;">
            <router-link to="/" class="mesto" href="">место встречи</router-link>
        </div>
         <div class="acont">
            <div class="photo">
                <div style="width: 250px;
                    height: 146px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    background: var(--el-2-day, #B9B9B9);"><p style="
                    color: #000;
                    text-align: center;
                    font-size: 96px;
                    font-family: Open Sans;
                    letter-spacing: 15.36px;
                    text-transform: uppercase;
                    margin-top: 20px;
                    ">+</p>
                </div>
                <p>Фото</p>
            </div>
            <div class="textpola">
                <div style="display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: space-evenly; ">
                    
                    <div style="display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;">
                        <input v-model="psaww" class="password" type="text" placeholder="  Название" name="password" required>  
                        <input v-model="psaww" class="password" type="text" placeholder="  Приватность" name="password" required>  
                        <input v-model="psaww" class="password" type="text" placeholder="  Цена" name="password" required>  
                        <input v-model="psaww" class="password" type="text" placeholder="  Возрастная категория" name="password" required>  
                
                    </div>
                   <div style="display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;">
                        <input v-model="psaww" class="password" type="text" placeholder="  Категория" name="password" required>  
                        <input v-model="psaww" class="password" type="text" placeholder="  Адрес" name="password" required>  
                        <input v-model="psaww" class="password" type="text" placeholder="  Приватность адреса" name="password" required>  
                
                    </div>
                </div>
                <div class="opis">
                     <p>Описание:</p>
                
                     <textarea    
                    style="width:700px; 
                    height: 150px;
                    resize: none; 
                    border-radius: 8px;  
                    background: #B9B9B9;  "  
                   v-model="message" placeholder="введите несколько строчек"></textarea>
                </div>
            </div>
        </div>
        <div style=" width: 100%;
            margin-left:325px;
            margin-top: 0px;">
            <router-link to="/cart" class="btn_rl" href="">Создать  </router-link>
        </div>   
    </div>
</template>

<script>
</script>

<style scoped>

p{
    color: #000;
    font-size: 20px;
    font-family: Inter;
    font-weight: 500;
    letter-spacing: 3.2px;
    text-transform: uppercase;
}
.mesto {
    color: var(--text-night, #000000);
    text-align: left;
    font: 500 20px/140% "Oswald", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
}
.mesto:hover{
  transition: all .300s ease 0s;
  color: rgb(255, 255, 255);
}

.acont{
    width: 80%;
    height: 500px;
    margin-left: 50px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}
.photo{
    width: 250px;
    height: 500px;

}
.textpola{
    width: 900px;
    height: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
.password{
    width: 283.02px;
    height: 38px;
    background: #B9B9B9;
    border: 1px solid #7e7e7e;
    border-radius: 4px;
    margin-top:25px ;
}
.opis{
    display: flex;
    width: 700px;
    height: 500px;
    margin-left: 100px;
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-start;
}
</style>