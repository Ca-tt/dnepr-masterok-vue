<template>
  <section class="section is-showcase">
    <div class="dimmer">
      <Container>
        <div class="menu">
          <img src="../img/title.png" class="dnepr-class-img" />
          <div class="menu-union">
            <a href="#" class="menu-click"> УСЛУГИ И ЦЕНЫ </a>
            <a href="#" class="menu-click"> НАШИ ПРИЕМУЩЕСТВА </a>
            <a href="#" class="menu-click"> КОНТАКТЫ </a>
          </div>
        </div>

      <div class="title-slide">
        <div class="opening">
          <h1 class="main-title">
            АВАРИЙНОЕ<br />
            ВСКРЫТИЕ ЗАМКОВ
          </h1>
          <ul class="list">
            <li>- ОТКРЫВАЕМ ВСЕ ВИДЫ ЗАМКОВ</li>
            <li>- ПРИЕДЕМ В ТЕЧЕНИИ 20 МИНУТ</li>
            <li>- БЕЗ ПОВРЕЖДЕНИЯ ЗАМКА</li>
            <li>- КОНФИДЕНЦИАЛЬНО</li>
            <li class="tab">от 300 грн</li>
          </ul>
          <div class="buttons">
            <a class="a-m" @click="openModal"> ВЫЗВАТЬ МАСТЕРА </a>
            <ModalWindow/>
            <a href="#" class="c-f"> РАСЧЕТ СТОИМОСТИ </a>
          </div>
        </div>
        <div class="mobile">
          <img src="../img/mobile.png" class="title-image" />
        </div>
      </div>
      </Container>
    </div>
  </section>
</template>


<style scoped>
.section {
  background-image: url("../img/background.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}

.dimmer {
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 100vh;
}

.title-image {
  width: 250px;
}
.dnepr-class-img {
  width: 272px;
  height: 124px;
}
.c-f {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  outline: 2px solid white;
  border-radius: 5px;
}
.c-f:hover {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  background-color: rgba(255, 255, 255, 0.65);
  outline: 2px solid white;
  border-radius: 5px;
}
.buttons {
  display: flex;
}
.a-m {
  text-decoration: none;
  color: white;
  background-color: #fab005;
  border-color: #fab005;
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-right: 30px;
}
.a-m:hover {
  text-decoration: none;
  color: white;
  background-color: rgb(255, 203, 59);
}
.list > li {
  margin-top: 25px;
}
.tab {
  margin-left: 80px;
}
.opening {
  text-align: left;
}
.main-title {
  font-size: 50px;
  color: white;
  font-weight: 600;
  margin-bottom: 0;
}
.list {
  list-style-type: none;
  padding: 0;
  color: white;
  font-size: 20px;
}
.title-slide {
  display: flex;
  justify-content: space-evenly;
}
.menu-click {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  font-size: 17px;
  font-weight: 600;
}
.menu-click:hover {
  text-decoration: none;
  color: white;
}
.menu-union {
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  margin-left: 50px;
}
.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
@media screen and (max-width: 1024px) {
  .main-title {
    font-size: 40px;
  }
  .title-slide {
    align-items: center;
  }
  .c-f {
    margin-bottom: 55px;
    margin-top: 15px;
  }
  .buttons {
    flex-direction: column;
  }
}
@media screen and (max-width: 769px) {
  .menu-click {
    font-size: 15px;
  }
  .dnepr-class-img {
    width: 232px;
    height: 104px;
  }
  .list {
    font-size: 18px;
    text-align: center;
  }
  .main-title {
    font-size: 30px;
    text-align: center;
  }
  .title-image {
    width: 200px;
    margin-bottom: 20px;
  }
  .menu{
    display: flex;
    flex-direction: column;
  }
  .title-slide{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .menu-union{
    margin-left: 0;
    margin-top: 10px;
  }
  .menu-click{
    font-size: 17px;
  }
  .buttons{
    justify-content: center;
    align-items: center;
  }
  .a-m{
    margin: 0;
  }
  .c-f{
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 426px) {
  .a-m {
    margin-right: 0;
  }
  .buttons {
    justify-content: center;
    align-items: center;
  }
  .main-title,
  .list {
    text-align: center;
  }
  .title-slide {
    flex-direction: column;
  }
  .dnepr-class-img {
    margin-top: 20px;
    width: 252px;
    height: 110px;
  }
  .section {
    background-image: url("../img/door-background.jpg");
    min-height: 100vh;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
  }
  .menu-union{
    flex-direction: column;
    width: 100%;
  }
  .menu-click{
    margin-bottom: 10px;
    font-size: 20px;
  }
}
@media screen and (max-width: 376px) {
  .title-image {
    width: 180px;
  }
}
@media screen and (max-width: 321px) {
  .title-image {
    width: 170px;
  }
  .c-f {
    margin-bottom: 30px;
  }
  .main-title {
    font-size: 26px;
  }
  .list {
    font-size: 17px;
  }
}
</style>

<script>
import Container from '../components/layout/Container';
import ModalWindow from "./ModalWindow.vue";
export default {
  name: "Title",
  methods: {
    openModal() {
      this.$refs.modal.open();
    },
  },
  components: {
    Container,
    ModalWindow,
  }
};
</script>
