<template>

  <div>

    <ModalButton :text="buttonText"
                  @click.native="openModal"></ModalButton>

    <sweet-modal ref="modal" overlay-theme="dark">
      <div class="modal">
        <div class="modal-head">
          <h1 class="topic">ВЫЗОВ МАСТЕРА</h1>
        </div>
        <div class="modal-body">
          <label class = "enter-tel">Введите ваш номер телефона</label>
          <input class="tel-input" placeholder="+38(0__) ___-__-__" type="tel"
                v-mask="['+38(0##) ###-##-##']"/>
        </div>
        <a href="" class="send">ОТПРАВИТЬ</a>
        <p>*перезвоним в течении 5 минут</p>
        <p>Нет времени ждать звонка?<br> Нажмите чтоб позвонить:</p>
        <h2 class="topic">067 135 15 47</h2>
        <h2 class="topic">099 053 88 64</h2>
      </div>
    </sweet-modal>
  </div>

</template>

<script>
import ModalButton from "@/components/ModalButton";

export default {
  name: "ModalWindow",
  components: {
    ModalButton,
  },
  props: ['buttonText'],
  methods: {
    openModal() {
      this.$refs.modal.open()
    }
  },
};

</script>

<style>

.sweet-content{
  padding-top: 0px;
}

.sweet-modal{
  width: 21% ; 
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

</style>
