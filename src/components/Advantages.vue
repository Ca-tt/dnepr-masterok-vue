<template>
    <section>
        <div class="advantages">
            <div class="title">
                <h2 class="title">НАШИ ПРЕИМУЩЕСТВА</h2>
                <p class="category">Компания Днепр-замок отличается опытом и профессиональным подходом. Для своих клиентов мы предоставляем максимально комфортные условия предоставления услуг.</p>
            </div>
            <div class="adv-list">
                <div class="adv-list-fst">
                    <div class="adv-block">
                        <div class="adv-icon">
                            <font-awesome-icon icon="sort-numeric-down" class="icon"/>
                        </div>
                        <div class="adv-text">
                            <h3>Порядочность и конфиденциальность</h3>
                            <p>Мы гарантируем сохраность Вашей личной информации. В нашей команде работают проверенные мастера.</p>
                        </div>
                    </div>
                    <div class="adv-block">
                        <div class="adv-icon">
                            <font-awesome-icon icon="money-bill-alt" class="icon"/>
                        </div>
                        <div class="adv-text">
                            <h3>Наличный или безналичный расчет</h3>
                            <p>Оплатить наши услуги Вы сможете любым удобным способом. Работаем без предоплат.</p>
                        </div>
                    </div>
                </div>
                <div class="adv-list-snd">
                    <div class="adv-block">
                        <div class="adv-icon">
                            <font-awesome-icon icon="id-card" class="icon"/>
                        </div>
                        <div class="adv-text">
                            <h3>Профессионализм</h3>
                            <p>Опытные мастера знающие свое с легкостью помогут Вам открыть заком любой сложности за 10-20 минут.</p>
                        </div>
                    </div>
                    <div class="adv-block">
                        <div class="adv-icon">
                            <font-awesome-icon icon="lock-open" class="icon"/>
                        </div>
                        <div class="adv-text">
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
    .advantages {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
    }

    .advantages > .title {
        /* width: 55%; */
        text-align: center;
    }

    .advantages > .title > .category {
        line-height: 1.7;
    }

    .adv-list {
        display: flex;
        flex-direction: column;
    }

    .adv-list-fst, .adv-list-snd {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .adv-block {
        display: flex;
        flex-direction: column;
        width: 90%;
    }

    .adv-icon .icon {
        width: 55px;
        height: 55px;
        margin: 15px;
    }

    .adv-text h3 {
        color: #f5ac00;
    }

    .adv-text p {
        font-size: 0.9em;
    }

    @media screen and (min-width: 768px) {
        .advantages > .title {
            width: 70%;
        }

        .adv-list-fst, .adv-list-snd {
            flex-direction: row;
            justify-content: space-around;
        }

        .adv-block {
            flex-direction: row;
            align-items: center;
            width: 45%;
        }

        .adv-text {
            text-align: left;
        }
    }

    @media screen and (min-width: 1024px) {
        .advantages {
            margin-bottom: 100px;
        }

        .advantages > .title {
            width: 720px;
        }

        .adv-text p {
            font-size: 1em;
        }
    }

    @media screen and (min-width: 1440px) {
        .adv-text h3 {
            font-size: 1.5em;
        }

        .adv-text p {
            font-size: 1.2em;
        }
    }
</style>