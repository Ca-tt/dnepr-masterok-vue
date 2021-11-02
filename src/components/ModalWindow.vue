<template>
  <div>
    <button class="a-m" type="button" @click="openModal">
      Open modal
    </button>

    <sweet-modal ref="modal">
      test text
      <div class="modal-head">
        <h1 class="topic">ВЫЗОВ МАСТЕРА</h1>
<!--        <a @click="showModal = false"><span class="close-modal"> &times; </span></a>-->
      </div>
      <p>&nbsp;</p>
      <div class="modal-body">
        <label>Введите ваш номер телефона</label>
        <input class="tel-mask" placeholder="+38(0__) ___-__-__" type="tel"
               v-mask="['+38(0##) ###-##-##']"/>
      </div>
      <a href="" class="send">ОТПРАВИТЬ</a>
      <p class="underline">*перезвоним в течении 5 минут</p>
      <hr/>
      <p>Нет времени ждать звонка?<br> Нажмите чтоб позвонить:</p>
      <h4 class="topic">067 135 15 47</h4>
      <h4 class="topic">099 053 88 64</h4>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </sweet-modal>
  </div>
</template>

<style>
.vm-titlebar {
  display: none;
}

.vm-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 100;
  font-size: 20px;
}

.close-modal {
  height: 27px;
  width: 27px;
  position: absolute;
  border: 2px solid #ffff;
  background-color: rgba(117, 190, 218, 0.5);
  border-radius: 15px;
  top: -16px;
  right: -14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tel-mask {
  margin-top: 5px;
  border: none;
  font-size: 25px;
  text-align: center;
  outline: 0;
}

.topic {
  color: orange;
}

.underline {
  border-bottom: 1px solid slategrey;
  padding-bottom: 20px;
}

.send {
  margin: 10px;
  display: flex;
  align-items: center;
}

</style>

<script>
import bodyScroll from "body-scroll-freezer";

export default {
  name: "ModalWindow",

  data: function () {
    return {
      showModal: false
    };
  },
  mounted() {
    bodyScroll.init();
  },
  methods: {
    beforeOpen() {
      bodyScroll.freeze();
    },
    beforeClose() {
      bodyScroll.unfreeze();
    },
    openModal() {
      this.$refs.modal.open()
    },
  },
};

</script>

