<template>

  <div>

    <ModalButton :text="buttonText"
                  @click.native="openModal"></ModalButton>

    <!-- не нужно делать пробелы между равно, Саш-->
    <sweet-modal ref="modal">
      <div class="modal-head">
        <h1 class="topic">ВЫЗОВ МАСТЕРА</h1>
      </div>
      <!-- зачем здесь пустой параграф? -->
      <p>&nbsp;</p>
      <div class="modal-body">
        <label class = "enter-tel">Введите ваш номер телефона</label>
        <input class="tel-input" placeholder="+38(0__) ___-__-__" type="tel"
               v-mask="['+38(0##) ###-##-##']"/>
      </div>
      <a href="" class="send">ОТПРАВИТЬ</a>
      <p>*перезвоним в течении 5 минут</p>
      <!--
        тег hr считается дурным тоном
        браузеры могут перестать его поддерживать
      -->
      <hr/>
      <p>Нет времени ждать звонка?<br> Нажмите чтоб позвонить:</p>
      <h2 class="topic">067 135 15 47</h2>
      <h2 class="topic">099 053 88 64</h2>
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
  padding-top: 0px !important; /* костыль: !important зло */
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

h2{
  color: orange;
}

/* ужасный стиль кода */
p , .enter-tel{
  color: gray;
  font-family: inherit
}

</style>
