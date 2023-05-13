<template>
    <div class="blufon">
        <div  class="con">
            <h2>страница не найдена</h2>
            <h1>ERROR 404</h1>
            <div class="string">
                <h2>пожалуйста, вернитесь</h2><a class="btn_wh" href=""><h2>домой</h2> </a>
            </div>
        </div>
       
    </div>
</template>

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
.con{
    display: flex; 
    width: 50%;
    height: 50%;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

.con h1{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 116px;
    letter-spacing: 0.16em;
    text-transform: uppercase;

    color: #FFFFFF;
}
.con h2{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    letter-spacing: 0.16em;
    text-transform: uppercase;

    color: #FFFFFF;
}

.btn_wh{
    margin-left: 15px;
  width: 250px;
  height: 50px;

  background: #eff0f0;
  border-radius: 15px;

  font-family: 'Oswald';
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
  text-decoration: none;
  color:#00BCD6;
}

.btn_wh h2{
 color: #00BCD6;
}

.string{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>