<template>
    <div class="header">     
        <div class="header__blok">
            <div class="header__name">
                <h1>
                  HUACU  
                </h1>
                </div>
            <div class="header__img"><img src="../img/Icon.png" alt="icon"></div>
        </div>   
    </div>
</template>

<script>
export default{
    
}

</script>

<style>
header{
    width:100%;
}
.header__blok{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    height: 100%;
    max-width: 1200px;
    border: 2px solid #a2b2d5;
}
.header__name h1{

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
   
    /*background-image:  linear-gradient(90deg, #564ED5 0%, #784FD2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
    color:#564ED5 ;
 
}
.header__img{
   
    width: 40px;
    height: 40px;
    
    border: 2px solid #a2b2d5;
}
</style>