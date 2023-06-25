<template>
    <div class="blufon">
        <router-link to="/" class="f2" href="">место встречи</router-link>
        <div class="f3">
        сибирский федеральный университет<br />Институт космических и информационных
        технологий<br />кафедра вычислительной техники
        </div>

        <div class="f4">
        МЕСТО ВСТРЕЧИ - проект, разработанный в качестве дипломной, бакалаврской
        работы.<br /><br />разработчик: Черных Дарья Александровна<br /><br />Руководитель:
        Сиротинина Наталья Юрьевна
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
.f2 {
  color: var(--text-night, #e6e6e6);
  text-align: left;
  font: 500 16px/140% "Oswald", sans-serif;
  text-transform: uppercase;
  position: absolute;
  left: 94px;
  top: 50px;
  text-decoration: none;
}
.f2:hover{
  transition: all .300s ease 0s;
  color: rgb(255, 255, 255);
}
.f3 {
  color: var(--text-night, #e6e6e6);
  text-align: center;
  font: 500 24px/140% "Oswald", sans-serif;
  text-transform: uppercase;
  position: absolute;
  margin: 0 auto; 
  top: 388px;
}
.f4 {
  color: var(--text-night, #e6e6e6);
  text-align: left;
  font: 500 16px/140% "Oswald", sans-serif;
  /*text-transform: uppercase;*/
  position: absolute;
  left: 94px;
  top: 600px;
}
</style>