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
                        ВЫЗВАТЬ МАСТЕРА
                    </a>
                    <a href="#" class="c-f">
                        РАСЧЕТ СТОИМОСТИ
                    </a>
              </div>
          </div>
          <div class="mobile">
              <img src="../img/mobile.png" class="title-image">
          </div>
      </div>
  </section>
</template>

<style>
    .title-image{
        width: 700px;
        height: 550px;
    }
    .dnepr-class-img{
        width: 272px;
        height: 124px;
    }
    .c-f{
        width: 250px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        outline: 2px solid white;
        border-radius: 5px;
    }
    .c-f:hover{
        width: 250px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        background-color: rgba(255,255,255,.65);
        outline: 2px solid white;
        border-radius: 5px;
        margin-left: 30px;
    }
    .buttons{
        display: flex;
    }
    .a-m{
        text-decoration: none;
        color: white;
        background-color: #fab005;
        border-color: #fab005;
        width: 250px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        margin-right: 30px;
    }
    .a-m:hover{
        text-decoration: none;
        color: white;
        background-color: rgb(255, 203, 59);
    }
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
    .title-page{
        background-image: url("../img/background.jpg");
        min-height: 100vh;
        background-color: rgba(146, 147, 161, 0.81);
        background-position: center center;
        background-attachment: fixed;
        background-size: cover;
    }
    @media screen and (max-width: 1024px){
        .main-title{
            font-size: 40px;
        }
        .title-slide{
            justify-content: flex-end;
            align-items: center;
        }
        .title-image{
        width: 500px;
        height: 400px;
        }
        .c-f{
            margin-bottom: 55px;
            margin-top: 15px;
        }
        .buttons{
            flex-direction: column;
        }
    }
    @media screen and (max-width: 769px){
        .menu-click{
            font-size: 15px;
        }
        .dnepr-class-img{
            width: 232px;
            height: 104px;
        }
        .list{
            font-size: 18px;
        }
        .main-title{
            font-size: 30px;
        }
        .title-image{
        width: 400px;
        height: 330px;
        }
    }
</style>