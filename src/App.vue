<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet"> 
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap" rel="stylesheet">
  <div>
     <RouterView/> 
   </div>   
    
    
</template>
<script>
/*export default {
  name: 'App',
  components: {
   
  }
}*/
</script>

<style>
html{
  height: 100%;
}
body{
  margin: 0px;
  height: 100%;
}
#app{
height: 100%;
}
.wrapper{
  
  overflow: hidden;
 
  display: flex;
  flex-direction: column;
}
.content{
  flex: 1 1 auto;
  background: #E6E6E6;
  height: 100%;
}
.footer{
  height: 100px;
  background: #C6C6C6;
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

  background: #00BCD6;
  border-radius: 15px;
  cursor: pointer;

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
.btn_rl:hover{
  background: #01adc0;
}
.blufon{
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #E6E6E6;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
