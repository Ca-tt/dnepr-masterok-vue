<template>
    <section>
        <div class="preferences">
            <div class="title">
                <h2 class="title" data-v-3e51d18e="">НАШИ ПРЕИМУЩЕСТВА</h2>
                <p class="category">Компания Днепр-замок отличается опытом и профессиональным подходом. Для своих клиентов мы предоставляем максимально комфортные условия предоставления услуг.</p>
            </div>
            <div class="pref-list">
                <div class="pref-list-fst">
                    <div class="pref-block">
                        <div class="pref-icon">
                            <font-awesome-icon icon="sort-numeric-down" class="icon"/>
                        </div>
                        <div class="pref-text">
                            <h3>Порядочность и конфиденциальность</h3>
                            <p>Мы гарантируем сохраность Вашей личной информации. В нашей команде работают проверенные мастера.</p>
                        </div>
                    </div>
                    <div class="pref-block">
                        <div class="pref-icon">
                            <font-awesome-icon icon="money-bill-alt" class="icon"/>
                        </div>
                        <div class="pref-text">
                            <h3>Наличный или безналичный расчет</h3>
                            <p>Оплатить наши услуги Вы сможете любым удобным способом. Работаем без предоплат.</p>
                        </div>
                    </div>
                </div>
                <div class="pref-list-snd">
                    <div class="pref-block">
                        <div class="pref-icon">
                            <font-awesome-icon icon="id-card" class="icon"/>
                        </div>
                        <div class="pref-text">
                            <h3>Профессионализм</h3>
                            <p>Опытные мастера знающие свое с легкостью помогут Вам открыть заком любой сложности за 10-20 минут.</p>
                        </div>
                    </div>
                    <div class="pref-block">
                        <div class="pref-icon">
                            <font-awesome-icon icon="lock-open" class="icon"/>
                        </div>
                        <div class="pref-text">
                            <h3>Вскрытие без повреждений</h3>
                            <p>Мы используем только качественный и профессиональный инструмент. Ваши замки остануться целыми и без дефектов.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style>
    .preferences {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }

    .preferences > .title {
        /* width: 55%; */
        text-align: center;
        margin-bottom: 25px;
    }

    .preferences > .title > .category {
        line-height: 1.7;
    }

    .pref-list {
        display: flex;
        flex-direction: column;
    }

    .pref-list-fst, .pref-list-snd {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pref-block {
        display: flex;
        flex-direction: column;
        width: 90%;
    }

    .pref-icon .icon {
        width: 60px;
        height: 60px;
        border: 2px solid #54617A;
        padding: 10px;
        border-radius: 50%;
        margin: 15px;
    }

    .pref-text h3 {
        color: #f5ac00;
    }

    .pref-text p {
        font-size: 0.9em;
    }

    @media screen and (min-width: 768px) {
        .preferences > .title {
            width: 70%;
            margin-bottom: 35px;
        }

        .pref-list-fst, .pref-list-snd {
            flex-direction: row;
            justify-content: space-around;
            margin-bottom: 20px;
        }

        .pref-block {
            flex-direction: row;
            align-items: center;
            width: 45%;
        }

        .pref-text {
            text-align: left;
        }
    }

    @media screen and (min-width: 1024px) {
        .pref-list-fst, .pref-list-snd {
            margin-bottom: 25px;
        }

        .preferences {
            margin-bottom: 100px;
        }

        .preferences > .title {
            width: 720px;
        }

        .pref-text p {
            font-size: 1em;
        }
    }

    @media screen and (min-width: 1440px) {
        .pref-text h3 {
            font-size: 1.5em;
        }

        .pref-text p {
            font-size: 1.2em;
        }
    }
</style>

<script>

export default {
  name: 'Preferences',

}
</script>