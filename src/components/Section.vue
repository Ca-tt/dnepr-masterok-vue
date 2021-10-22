<template>
   <section class="prices-page">
        <section class="title-prices-page">
            <div class="title">
                <h2 class="title">НАШИ УСЛУГИ И ЦЕНЫ</h2>
            </div>
            <div class="categories">
                <p class="category">Цена услуг по вскрытию замков  зависит от конструкции замка и степени сложности поломки.</p>
                <p class="category">Ложный вызов — 500 грн.</p>
                <p class="category">Простой мастера — 1 час — 1000 грн.</p>
            </div>
        </section>
        <section class="main">
            <div class="service">
                <img src="../img/door-open.jpg" alt="" class="service-img">
                <h3 class="service-title">СРОЧНОЕ ВСКРЫТИЕ ДВЕРЕЙ</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
            </div>
            <div class="service">
                <img src="../img/auto-open.jpg" alt="" class="service-img">
                <h3 class="service-title">СРОЧНОЕ ВСКРЫТИЕ АВТО</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
            </div>
            <div class="service">
                <img src="../img/safe-open.jpg" alt="" class="service-img">
                <h3 class="service-title">СРОЧНОЕ ВСКРЫТИЕ СЕЙФА</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
            </div>
            <div class="service">
                <img src="../img/change-lock.jpg" alt="" class="service-img">
                <h3 class="service-title">ЗАМЕНА ЗАМКОВ</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
            </div>
            <div class="service">
                <img src="../img/change-latch.jpg" alt="" class="service-img">
                <h3 class="service-title">ЗАМЕНА НОЧНОЙ ЗАДВИЖКИ</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
                <a class="to-master" href="">
                    <figure class="give-call">
                        <h5 class="title-of-call">СРОЧНО ВЫЗВАТЬ МАСТЕРА</h5>
                    </figure>
                </a>
            </div>
            <div class="clarify-price">
                <h3 class="clarify">УТОЧНИТЬ СТОИМОСТЬ</h3>
                <p class="calculation">Для точного расчета отправьте фото замка</p>
                <img src="../img/logo-viber.png" class="sn">
                <p class="click-to-send">нажмите для отправки фото</p>
                <a class="to-master" href="">
                    <figure class="send-photo">
                        <h5 class="send">ОТПРАВИТЬ ФОТО</h5>
                    </figure>
                </a>
            </div>
        </section>
   </section>
</template>

<script>

export default {
  name: 'Section',
}
</script>

<style>
    @media screen and (min-width: 1440px){
        .click-to-send{
            font-size: 17px !important;
        }
        .calculation{
            font-size: 17px !important;
        }
        .clarify{
            font-size: 23px !important;
        }
        .clarify-price{
            margin: 10px;
        }
        .sn{
            max-width: 100% !important;
            height: auto !important;
        }
        .service-img{
            width: 380px !important;
            height: 240px !important;
        }
    }
    @media screen and (min-width: 1024px){
        .title{
            font-size: 45px !important;
        }
        .click-to-send{
            font-size: 14px;
        }
        .calculation{
            font-size: 14px;
        }
    }
    @media screen and (min-width: 768px){
        .clarify-price{
            margin-top: 0 !important;
        }
        .service{
            margin: 10px;
        }
        .service-title{
            font-size: 19px !important;
        }
    }
    .service-img{
        border-radius: 7px;
        box-shadow: 0 3px 3px -2px rgb(0 0 0 / 20%), 0 3px 4px 0 rgb(0 0 0 / 14%), 0 1px 8px 0 rgb(0 0 0 / 12%);;
    }
    .to-master{
        text-decoration: none;
    }
    .calculation{
        margin: 0;
        text-align: center;
        margin-bottom: 5px;
    }
    .clarify{
        margin-top: 30px !important;
        text-align: center;
        margin-bottom: 10px;
        font-size: 21px;
        font-weight: 300;
    }
    .clarify-price{
        width: 380px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
    .send{
        text-align: center;
        color: white;
    }
    .send-photo{
        margin-top: 0;
        background-color: #fab005;
        width: 200px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
    .sn{
      margin-top: 10px !important;
      max-width: 100%;
      height: auto;
    }
    .title-of-call{
       text-align: center;
       color: white;
    }
    .give-call{
        background-color: #fab005;
        width: 230px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
    .main{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    h1, h2, h3, h4, h5, h6{
        color: #54617a;
    }
    .explanation-of-service{
        margin: 0;
        text-align: center;
        color: #8d99ae;
        margin-bottom: 5px;
    }
    .service{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
    .service-title{
        margin-top: 10px;
        text-align: center;
        margin-bottom: 10px;
        font-size: 23px;
        color: #54617a;
        font-weight: 600;
    }
    .service-img{
        width: 272px;
        height: 150px;
        margin-top: 20px;
    }
    body{
        font-family: sans-serif;
        margin: 0;
        color: #8d99ae;
    }
    div.title{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    h2.title{
        font-weight: 100;
        font-family: sans-serif;
        font-size: 35px;
        margin-bottom: 10px;
        color: #54617a;
        text-align: center;
    }

    .categories{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .category{
        margin: 5px;
        color: #8d99ae;
        text-align: center;
    }
</style>