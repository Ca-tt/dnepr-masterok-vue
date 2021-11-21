<template>
  <div>
    <ModalButton :text="buttonText" @click.native="openModal"></ModalButton>

    <!-- check this prop hide-close-button="true"-->
    <sweet-modal ref="modal" :hide-close-button="true">
      <div class="modal-head">
        <p class="topic">ВЫЗОВ МАСТЕРА</p>
        <span class="modal-close" @click="closeModal">&times;</span>
      </div>
      <div class="modal-body">
        <!-- пока что закомментирую твой action -->
        <!-- <form action="Сheck.php" method="post">-->
        <form id="form" @submit.prevent="sendEmail">
          <label class="enter-tel">Введите ваш номер телефона</label>
          <!-- не telephone, а number. Двоюшник -->
          <!-- и мы никогда не пишем css в питоновском стиле
            (не user_telephone, а user-phone или user-number)
          -->
          <input id="phoneNumber" name="phoneNumber" class="call-input"
                 placeholder="+38(0__) ___-__-__" type="tel"
                 v-mask="['+38(0##) ###-##-##']"/>
          <button type="submit" class="modal-send">ОТПРАВИТЬ
          </button>
          <!--
            не нужно коммитить не работающий код, который еще и выдает ошибки, Саша
            в консоле ошибок быть не должно
           -->
          <!--          <div class="moving-icon">-->
<!--            <font-awesome-icon icon="loader"/>-->
<!--          </div>-->
        </form>
      </div>
      <p class="bottom-line">*Перезвоним в течение часа</p>
      <p>
        Нет времени ждать звонка?<br/>
        Нажмите чтоб позвонить:
      </p>
      <a><h2 class="number">067 135 15 47</h2></a>
      <a><h2 class="number">099 053 88 64</h2></a>
    </sweet-modal>
  </div>
</template>
<style>
.sweet-content {
  padding-top: 0 !important;
  /*костыль ПАМАГИТЕ*/
  padding-bottom: 20px !important;
  /*костыль ПАМАГИТЕ*/
}

.sweet-modal-overlay {
  background-color: rgba(10, 10, 10, 0.8);
}

.sweet-modal {
  max-width: 20%;
  max-height: 97%;
  min-width: 220px;
  color: #000;
  font-family: Roboto, sans-serif;
  overflow-y: auto;
  position: fixed;
}

.sweet-modal::-webkit-scrollbar {
  width: 0;
}

.bottom-line {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
}

.modal-head {
  display: flex;
  justify-content: center;
}

.modal-close {
  width: 30px;
  height: 30px;
  border: 1px solid honeydew;
  border-radius: 20px;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 15px 1px rgb(2 2 2 / 75%);
  text-shadow: 0px 0px 0px rgb(0 0 0 / 23%);
  background-color: rgba(0, 0, 0, 0.52);
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
}

.modal-close:hover {
  font-size: 13px;
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.number {
  color: orange;
}

.modal-send {
  color: white;
  font-size: 0.8em;
  text-decoration: none;
  background-color: #fab005;
  padding: 11px 20px;
  border-radius: 2px;
}

.call-input {
  padding: 20px;
  max-width: 350px;
  font-size: 22px;
  border: none;
  display: flex;
  text-align: center;
  outline: 0;
}

.topic {
  color: #000;
  font-family: Verdana;
  font-size: 28px;
}

.moving-icon {
  display: none;
}

@media screen and (max-width: 1023px) {
  .sweet-modal {
    max-width: 90%;
    margin-left: 15px;
    max-height: 97%;
    min-width: 220px;
    color: #000;
    font-family: Roboto, sans-serif;
    overflow-y: auto;
    position: fixed;
  }

  .sweet-modal::-webkit-scrollbar {
    width: 0;
  }

  .bottom-line {
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
  }

  .modal-head {
    display: flex;
    justify-content: center;
  }

  .modal-close {
    width: 30px;
    height: 30px;
    border: 1px solid honeydew;
    border-radius: 20px;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 15px 1px rgb(2 2 2 / 75%);
    text-shadow: 0px 0px 0px rgb(0 0 0 / 23%);
    background-color: rgba(0, 0, 0, 0.52);
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
  }

  .modal-close:hover {
    font-size: 13px;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .number {
    color: orange;
  }

  .modal-send {
    color: white;
    font-size: 0.8em;
    text-decoration: none;
    background-color: #fab005;
    padding: 11px 20px;
    border-radius: 2px;
  }

  .call-input {
    padding: 20px;
    max-width: 350px;
    font-size: 22px;
    border: none;
    display: flex;
    text-align: center;
    outline: 0;
  }

  .topic {
    color: #000;
    font-family: Verdana;
    font-size: 28px;
  }

.body-center{
  display: flex;
  align-items: baseline;
}

/* две одинаковых медиа. Не нужно их множить, как кроликов =) */
@media screen and (min-width: 1023px) {
  .sweet-modal{
    max-width: 400px;
  }
}

  @media screen and (max-width: 1023px) {
    .sweet-modal {
      max-width: 90%;
    }
  }
}
</style>
<script>
import ModalButton from "@/components/ModalButton";
import emailjs from 'emailjs-com';
emailjs.init("user_n00IFqkCIrHm6D3teTlZD");

export default {
  name: "ModalWindow",
  data() {
    return {
      phoneNumber: '',
    }
  },
  components: {
    ModalButton,
  },
  props: ["buttonText"],
  methods: {
    openModal() {
      this.$refs.modal.open();
    },
    closeModal() {
      this.$refs.modal.close();
    },
    // СПЕЦИАЛЬНО отключил отправка на имейл, чтобы не тратить
    // ресурс. Пока бесплатных 200 имейлов, клиенту будет приятно.

    // sendEmail(e) {
    //   try {
    //     emailjs.sendForm('service_u6tq2om',
    //         'template_e8qp568',
    //         e.target,
    //         'user_n00IFqkCIrHm6D3teTlZD', {
    //         phoneNumber: this.phoneNumber
    //     })
    //   } catch (error) {
    //     console.log({error})
    //   }
    //   this.phoneNumber = ''
    // },
  },
};
</script>