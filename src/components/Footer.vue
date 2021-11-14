<template>
  <footer class="footer-main">
    <!--
      тоже костыль (footer-main)
      лучше придумать один раз паддинги для секции
      (is-showcase или что-то в этом духе)
    -->
    <Container>
      <Row class="columns-between two-columns">
        <!-- добавляй пустую линию между повторяющимися элементами -->
        <div class="column footer-info">
          <font-awesome-icon icon="map-marker-alt" class="footer-icon"/>
          <h6 class="dnepr">Работаем по г. Днепр</h6>
        </div>

        <div class="column footer-info">
          <font-awesome-icon icon="envelope" class="footer-icon"/>
          <h6 class="mail">info@dnepr-сlass.com.ua</h6>
          <a href="#" class="third-section"><h6 class="confidentiality">Политика
            конфиденциальности</h6></a>
        </div>

        <div class="column footer-info">
          <font-awesome-icon icon="mobile" class="footer-icon"/>
          <h6 class="number1">067 135 15 47</h6>
          <h6 class="number2">099 053 88 64</h6>
        </div>

        <div class="column footer-info">
          <a href="#" class="fourth-section">
            <h6 class="developers">Сайт разработан командой EXPND
            </h6>
          </a>
          <h6 class="dn-class">© 2021 Дамир, Леша, Даня, Саша</h6>
        </div>
      </Row>

    </Container>
  </footer>
</template>

<style lang="scss">
@import '../scss/layout/media-querries';

.footer-main {
  padding: 2rem 0;
}

@media screen and (max-width: 426px) {
  /*.footer-info {
  /*  margin: 20px;*/
  /*}*/

}

@media screen and (max-width: 768px) {
  .dnepr, .mail, .number1, .number2, .developers, .dn-class, .confidentiality {
    /*font-size: 13px !important;*/
  }
}

.developers {
  margin-bottom: .5rem;
}

.dn-class {
  color: #fab005;
  margin-top: 0;
}

.number1 {
  color: #fab005;
}

.number2 {
  color: #fab005;
}

.confidentiality, .developers {
  color: white;
}

.third-section, .fourth-section {
  text-decoration: none;
}

.mail {
  color: #fab005;
}

.confidentiality {
  margin: 5px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include to-desktop {
    margin: 0 0 1rem 0;
  }
}

.dnepr {
  color: #fab005;
}

.dnepr, .mail, .number1, .number2, .developers, .dn-class, .confidentiality {
  font-size: 15px;
}

.footer-icon {
  margin: 0 0 1em 0;
  color: #fab005;
}

.footer-main {
  display: flex;
  justify-content: space-evenly;
  background-color: black;
}

</style>

<script>

import Container from "@/components/layout/Container";
import Row from "@/components/layout/Row";

export default {
  name: 'Footer',
  components: {Row, Container},
}
</script>