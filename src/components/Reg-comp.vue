<template>
    <div class="blufon">
        <div class="fonreg">
            <div class="fonreg__btn">
                <input v-model="login" class="login" type="text" placeholder="  ЛОГИН" name="login" required>
                <input v-model="psaww" class="password" type="text" placeholder="  ПАРОЛЬ" name="password" required>   
            </div>
            <div id="btnin" class="fonreg__btn">
                
                <router-link to="/cart" class="btn_rl" href="">войти  </router-link>
                <router-link to="/Areg" class="regtext" href="">регистрация  </router-link>
            </div>
        </div>
    </div>
</template>

<script>

/*export default {
  name: 'App',
  components:{
  
  },
  methods: {
    greet(event) {
      // `this` в методе указывает на текущий активный экземпляр
      alert('Привет, ' + this.name + '!')
      // `event` — нативное событие DOM
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}.mount('#event-with-method')*/

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
    width: 376px;
    height: 439px;
    background: #e6e6e6ae;
    border: 1px solid #C6C6C6;
    border-radius: 15px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
}
.login{ 
    width: 283.02px;
    height: 38px;
    background: #E6E6E6;
    border: 1px solid #C6C6C6;
    border-radius: 4px;
}
.password{
    width: 283.02px;
    height: 38px;
    background: #E6E6E6;
    border: 1px solid #C6C6C6;
    border-radius: 4px;
    margin-top:25px ;
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