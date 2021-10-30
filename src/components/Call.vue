<template>
    <section>
        <div class="call-request">
            <div class="request-title">
                <h2>ЗАКАЗАТЬ ЗВОНОК</h2>
                <p>Мы перезвоним в течении 5 минут</p>
            </div>
            <div class="y-tel-number">
                <div class="tel-number-introduce">
                    <div>
                        <p>Введите ваш номер телефона</p>
                    </div>
                    <div>
                       <the-mask :mask="['+38(0##) ###-##-##']" placeholder="+38(0__) ___-__-__" class="tel-input"/>
                    </div>
                </div>
                <div class="tel-number-send">
                    <a href="" class="send">ОТПРАВИТЬ</a>
                </div>
            </div>
        </div>
    </section>
</template>


<style>
    .call-request {
        background-image: url("../img/contactusheader.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
        padding: 25px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* height: 750px; */
    }

    .request-title h2, .request-title p {
        color: white;
    }

    .request-title h2 {
        font-size: 1.8em;
    }

    .tel-number-introduce p {
        font-size: 0.85em;
    }

    .y-tel-number {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #fff;
        height: 151px;
        width: 90%;
        padding: 20px 0px 38px 0px;
        border-radius: 8px;
        color: #7F7F7F;
    }

    .tel-input {
        border: none;
        font-size: 20px;
        margin-right: 0;
        text-align: center;
        outline: 0;
    }

    .send {
        font-size: 0.8em;
        text-decoration: none;
        background-color: #fab005;
        padding: 8px 45px;
        border-radius: 5px;
        box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 5px 8px 0 rgb(0 0 0 / 14%), 0 1px 14px 0 rgb(0 0 0 / 12%);
    }

    @media screen and (min-width: 768px) {
        .call-request {
            padding: 75px 0;
        }

        .request-title {
            margin-bottom: 30px;
        }

        .request-title h2 {
            font-size: 2.9em;
            margin: 0;
        }

        .y-tel-number {
            width: 50%;
            padding: 20px 40px 38px 40px;
        }

        .tel-number-introduce {
            display: flex;
            align-items: center;
            justify-content: space-between; 
        }

        .tel-number-introduce p {
            font-size: 1em;
            text-align: left;
        }

        .tel-number-send {
            display: flex;
            justify-content: flex-end;
        }

        .tel-input {
            font-size: 23px;
        }

        .send {
            padding: 12px 50px;
            font-size: 0.9em;
        }
    }

    @media screen and (min-width: 1024px) {
        .call-request {
            padding: 100px 0;
        }

        .request-title p {
            font-size: 1.2em;
        }

        .tel-input {
            font-size: 25px;
        }
    }

    @media screen and (min-width: 1440px) {
        .request-title h2 {
            font-size: 3.1em;
        }

        .tel-number-introduce {
            font-size: 1.2em;
        }

        .send {
            font-size: 1.1em;
        }
    }
</style>

<script>
  
</script>