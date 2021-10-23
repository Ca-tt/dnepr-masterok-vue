<template>
   <section class="advertisment">
       <div class="ad-part">
          <font-awesome-icon icon="truck" class="icon" />
          <h2 class="ad-title">20 мин</h2>
          <h3 class="title-part">ПРИБЫТИЕ МАСТЕРА</h3>
       </div>
       <div class="ad-part">
          <font-awesome-icon icon="lock-open" class="icon" />
          <h2 class="ad-title">до 30 мин</h2>
          <h3 class="title-part">ОТКРЫТИЕ ЗАМКА</h3>
       </div>
       <div class="ad-part">
          <font-awesome-icon icon="check-circle" class="icon" />
          <h2 class="ad-title">100%</h2>
          <h3 class="title-part">РЕЗУЛЬТАТ</h3>
       </div>
       <div class="ad-part">
          <font-awesome-icon icon="user-circle" class="icon" />
          <h2 class="ad-title">на 100%</h2>
          <h3 class="title-part">ОФИЦИАЛЬНО</h3>
       </div>
   </section>
</template>

<style>
  @media screen and (max-width: 426px){
    .advertisment{
      margin-top: 40px !important;
      margin-bottom: 40px !important;
    }
  }
  @media screen and (max-width: 1024px){
    .ad-part{
      width: 220px !important;
    }
    .ad-title{
      font-size: 30px !important;
    }
    .title-part{
      font-size: 18px !important;
    }
  }
    .svg-inline--fa.fa-w-16 {
      width: 70px;
    }
    .svg-inline--fa.fa-w-18 {
      width: 70px;
    }
    .svg-inline--fa.fa-w-20 {
      width: 70px;
    }
    .title-part{
      color: #f5ac00;
      font-size: 20px;
      margin: 0;
    }
    .ad-title{
      color: #4a4a4a;
      font-size: 35px;
      font-weight: 400;
      margin-bottom: 17px;
    }
    .ad-part{
      width: 288px;
      margin-bottom: 25px;
    }
    .icon{
      height: 70px;
      width: 70px;
      color: #54617a;
    }
    .advertisment{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 80px;
        margin-bottom: 80px;
      }
</style>