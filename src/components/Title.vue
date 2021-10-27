<template>
  <section class="title-page">
      <div class="menu">
          <img src="../img/title.png" class="dnepr-class-img">
          <div class="menu-union">
            <a href="#" class="menu-click">
                УСЛУГИ И ЦЕНЫ
            </a>
            <a href="#" class="menu-click">
                НАШИ ПРИЕМУЩЕСТВА
            </a>
            <a href="#" class="menu-click">
                КОНТАКТЫ
            </a>
          </div>
      </div>
      <div class="title-slide">
          <div class="opening">
              <h1 class="main-title">АВАРИЙНОЕ<br> ВСКРЫТИЕ ЗАМКОВ</h1>
              <ul class="list">
                  <li>- ОТКРЫВАЕМ ВСЕ ВИДЫ ЗАМКОВ</li>
                  <li>- ПРИЕДЕМ В ТЕЧЕНИИ 20 МИНУТ</li>
                  <li>- БЕЗ ПОВРЕЖДЕНИЯ ЗАМКА</li>
                  <li>- КОНФИДЕНЦИАЛЬНО</li>
                  <li class="tab">                     от 300 грн</li>
              </ul>
              <div class="buttons">
                <a href="#" class="a-m">
                        <figure class="master-c">
                            <h3>ВЫЗОВ МАСТЕРА</h3>
                        </figure>
                </a>
                <a href="#" class="c-f">
                        <figure class="price">
                            <h3>РАСЧЕТ СТОИМОСТИ</h3>
                        </figure>
                </a>
              </div>
          </div>
          <div class="mobile">
              <img src="../img/mobile.png">
          </div>
      </div>
  </section>
</template>

<style>
    .list>li{
        margin-top: 25px;
    }
    .tab{
        margin-left: 80px;
    }
    .opening{
        text-align: left;
    }
    .main-title{
        font-size: 50px;
        color: white;
        font-weight: 600;
        margin-bottom: 0;
    }
    .list{
        list-style-type: none;
        padding: 0;
        color: white;
        font-size: 20px;
    }
    .title-slide{
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
    }
    .menu-click{
        text-decoration: none;
        color: rgba(255,255,255,.65);
        font-size: 17px;
        font-weight: 600;
    }
    .menu-click:hover{
        text-decoration: none;
        color: white;
    }
    .menu-union{
        width: 500px;
        display: flex;
        justify-content: space-evenly;
        margin-left: 50px;
    }
    .menu{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .dnepr-class-img{
        width: 272px;
        height: 124px;
    }
    .title-page{
        background-image: url("../img/background.jpg");
        min-height: 100vh;
        background-color: rgba(146, 147, 161, 0.81);
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
    }
</style>