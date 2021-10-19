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
                <img src="daniil/Vue/dnepr-masterok-vue/src/assets/q.jpg" alt="" class="service-img">
                <h3 class="service-title">СРОЧНОЕ ВСКРЫТИЕ ДВЕРЕЙ</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
            </div>
            <div class="service">
                <img src="daniil/Vue/dnepr-masterok-vue/src/assets/q.jpg" alt="" class="service-img">
                <h3 class="service-title">СРОЧНОЕ ВСКРЫТИЕ ДВЕРЕЙ</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
            </div>
            <div class="service">
                <img src="daniil/Vue/dnepr-masterok-vue/src/assets/q.jpg" alt="" class="service-img">
                <h3 class="service-title">СРОЧНОЕ ВСКРЫТИЕ ДВЕРЕЙ</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
            </div>
            <div class="service">
                <img src="daniil/Vue/dnepr-masterok-vue/src/assets/q.jpg" alt="" class="service-img">
                <h3 class="service-title">СРОЧНОЕ ВСКРЫТИЕ ДВЕРЕЙ</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
            </div>
            <div class="service">
                <img src="daniil/Vue/dnepr-masterok-vue/src/assets/q.jpg" alt="" class="service-img">
                <h3 class="service-title">СРОЧНОЕ ВСКРЫТИЕ ДВЕРЕЙ</h3>
                <p class="explanation-of-service">Стоимость от 400 грн<br>
                зависит от степени сложности замка</p>
                <a class="to-master">
                    <figure class="give-call">
                        <h5 class="title-of-call">СРОЧНО ВЫЗВАТЬ МАСТЕРА</h5>
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
        font-size: 17px;
        color: #54617a;
    }
    .service-img{
        width: 272px;
        height: 150px;
        margin-top: 20px;
    }
    body{
        font-family: sans-serif;
        padding: 5%;
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