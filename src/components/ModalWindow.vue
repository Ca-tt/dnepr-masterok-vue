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
        <label class="enter-tel">Введите ваш номер телефона</label>
        <input
          class="call-input"
          placeholder="+38(0__) ___-__-__"
          type="tel"
          v-mask="['+38(0##) ###-##-##']"
        />
        <a class="modal-send">ОТПРАВИТЬ</a>
        <div class="moving-icon">
          <font-awesome-icon icon="lock"
            class="
              Тут
              должна
              быть
              анимированая
              иконка
              но
              я
              хз
              как
              ёе
              добавить(:
            "
          />
        </div>
      </div>
      <p class="bottom-line">*перезвоним в течении 5 минут</p>
      <p>
        Нет времени ждать звонка?<br />
        Нажмите чтоб позвонить:
      </p>
      <h2 class="number">067 135 15 47</h2>
      <h2 class="number">099 053 88 64</h2>
    </sweet-modal>
  </div>
</template>
<style>
.sweet-content {
  padding-top: 0 !important; /*костыль ПАМАГИТЕ*/
  padding-bottom: 20px !important; /*костыль ПАМАГИТЕ*/
}

.sweet-modal-overlay {
  background-color: rgba(10, 10, 10, 0.8);
}

.sweet-modal {
  max-width: 18%;
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

.modal-close:hover{
  font-size: 13px;
}

.sweet-modal {
  max-width: 25%;
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

@media screen and (max-width: 1024px) {
  .sweet-modal {
    max-width: 90%;
    margin-left: 20px; /*костыль ПАМАГИТЕ*/
  }
}
</style>
<script>
import ModalButton from "@/components/ModalButton";

export default {
  name: "ModalWindow",
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
    // moving(){
    //   const moviicon = this.querySelector(".moving-icon");
    //   moviicon.style.display = "flex";
    // }
  },
};
</script>


