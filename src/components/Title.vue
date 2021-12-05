<template>
  <section class="section is-site-opening is-showcase">
    <div class="dimmer">
      <Container>
        <div class="menu">
          <img src="../img/title.png" class="dnepr-class-img"/>
          <div class="menu-union">
            <a href="#" class="menu-click"> УСЛУГИ И ЦЕНЫ </a>
            <a href="#" class="menu-click"> НАШИ ПРИЕМУЩЕСТВА </a>
            <a href="#" class="menu-click"> КОНТАКТЫ </a>
          </div>
        </div>

        <Row class="title-slide columns-between-tablet">
          <Column class="left-column opening">
            <h1 class="main-title">
              АВАРИЙНОЕ<br>
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
              <ModalWindow buttonText="ВЫЗВАТЬ МАСТЕРА"></ModalWindow>
              <a href="tel:+38 067 135 15 47" class="button cost-calculation"> РАСЧЕТ СТОИМОСТИ </a>
            </div>
          </Column>

          <Column class="mobile right-column">
            <img src="../img/mobile.png" class="title-image"/>
          </Column>
        </Row>
      </Container>
    </div>
  </section>
</template>

<script>
import Container from "../components/layout/Container";
import ModalWindow from "../components/ModalWindow";
import Row from "@/components/layout/Row";
import Column from "@/components/layout/Column";


export default {
  name: "Title",
  components: {
    Column,
    Row,
    Container,
    ModalWindow,
  },
};
</script>

<style lang="scss" scoped>
@import './../scss/layout/media-querries';
@import './../scss/layout/mixins.scss';

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

  .container {
    padding: 2rem 1rem;
  }
}
.opening {
  text-align: left;
}

.title-image {
  width: 250px;
}

.dnepr-class-img {
  width: 272px;
  height: 124px;
}

.buttons {
  @include mobile-only {
    text-align: center;
  }

  @include from-desktop {
    display: flex;
    align-items: baseline;
  }
}

.button.cost-calculation {
  @include for-all-buttons(rgba(255, 255, 255, 0.65), $background-color: transparent);
}


.list > li {
  margin-top: 25px;
}

.tab {
  margin-left: 80px;
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
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-left: 50px;
}

.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

@media screen and (min-width: 1024px) {
  .menu {
    justify-content: space-between;
  }

  .menu-union {
    max-width: 55%;
  }
}

@media screen and (max-width: 1024px) {
  .main-title {
    font-size: 40px;
  }

  .menu-click {
    padding: 0 15px;
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

  .menu {
    display: flex;
    flex-direction: column;
  }

  .menu-union {
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .menu-click {
    font-size: 17px;
  }

  .a-m {
    margin: 0;
  }

  .button.cost-calculation {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 426px) {
  .a-m {
    margin-right: 0;
  }

  .main-title,
  .list {
    text-align: center;
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

  .menu-union {
    flex-direction: column;
    width: 100%;
  }

  .menu-click {
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

  .button.cost-calculation {
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