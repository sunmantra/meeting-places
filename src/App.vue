<template>
  <div class="wrapper">
    <Header class="heads">
    </Header>  

    <div class="content">
      <div class="container">
        <div class="description"> 
          <RouterView/>
        </div>
      </div>
    </div>

    <!--<footer class="footer">
      <div class="container">
        <div class="footer__text">
       
        </div>
      </div>
      
    </footer>-->
  </div>
</template>

<script>
import Header from './components/Header-comp.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
html{
  height: 100%;
}
body{
  margin: 0px;
  font-family: 'Inter';
  height: 100%;
}
#app{
height: 100%;
}
.wrapper{
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}
.heads{
  background: #171717;
  height: 90px;
}
.content{
  flex: 1 1 auto;
  background: #2D2D2D;
  height: 100%;
}
.footer{
  height: 100px;
  background: #171717;
}
.container{
  max-width: 1180px;
  margin: 0px auto;
  height: 100%;
}
.description{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.btn_rl{
  margin: 20px;
  margin-top:40px;
  width: 250px;
  height: 50px;

  background: #D9D9D9;
  border-radius: 15px;


  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  letter-spacing: 0.16em;
  text-transform: uppercase;

  color: rgb(52, 51, 51);
}
</style>
