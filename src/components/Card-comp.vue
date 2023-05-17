<template>
    <div class="blufon">
        <div class="fonreg">
            <div class="fonreg__btn">
                <input class="login" type="text" placeholder="  ЛОГИН" name="login" required>
                <input class="password" type="text" placeholder="  ПАРОЛЬ" name="password" required>   
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

</style>