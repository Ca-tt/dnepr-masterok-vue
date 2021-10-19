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
            <div class="service"></div>
            <div class="service"></div>
            <div class="service"></div>
            <div class="service"></div>
            <div class="service"></div>
        </section>
   </section>
</template>

<script>

export default {
  name: 'Section',
}
</script>

<style>
    body{
        font-family: sans-serif;
        padding: 5%;
    }
    div.title{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    h2.title{
        font-weight: 100;
        font-family: sans-serif;
        font-size: 45px;
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