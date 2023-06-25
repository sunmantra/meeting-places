<template>
    <div class="blufon">
        <div class="fonreg">
            <div class="fonreg__btn">
 
                <input class="imputbar" id="name" type="text" placeholder="  ИМЯ" name="login" required>
                <input class="imputbar" id="surname" type="text" placeholder="  ФАМИЛИЯ" name="password" required> 
                <input class="imputbar" id="mail" type="text" placeholder="  ПОЧТА" name="login" required>
               <p>Придумайте пароль от 8 символов</p>
                <input class="imputbar" id="password" type="text" placeholder="  ПАРОЛЬ" name="password" required> 
                <input class="imputbar" id="password2" type="text" placeholder="  ПОВТОРИТЕ ПАРОЛЬ" name="password2" required>    
            </div>
            <div class="fonreg__btn">
                <a class="btn_rl" href="">войти</a>
                <a class="regtext" href="">регистрация</a>
            </div>
        </div>
    </div>
    
</template>

<script>

</script>

<style scoped>
.blufon{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    background: #00BCD6;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.fonreg{
    display: flex;
    width: 676px;
    height: 539px;
    background: #e6e6e6ae;
    border: 1px solid #C6C6C6;
    border-radius: 15px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
}
.imputbar{ 
    width: 283.02px;
    height: 38px;
    background: #E6E6E6;
    border: 1px solid #C6C6C6;
    border-radius: 4px;
    margin-top: 20px;
}
.regtext{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #000000;
    border: 1px solid #C6C6C6;
    text-decoration: none;
}
.fonreg__btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
}
</style>