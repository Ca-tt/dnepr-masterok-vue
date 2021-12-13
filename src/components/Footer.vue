<template>
  <footer class="footer-main">
    
    <Container>
      <Row class="columns-between two-columns">
        
        <div class="column footer-info">
          <font-awesome-icon icon="map-marker-alt" class="footer-icon fa-2x"/>
          <h6 class="dnepr">Працюємо по м. Дніпро</h6>
        </div>

        <div class="column footer-info">
          <font-awesome-icon icon="envelope" class="footer-icon fa-2x"/>
          <h6 class="mail">info@dnepr-сlass.com.ua</h6>
          <a href="#" class="third-section"><h6 class="confidentiality">Політика конфіденційності</h6></a>
        </div>

        <div class="column footer-info">
          <font-awesome-icon icon="mobile" class="footer-icon fa-2x"/>
          <h6 class="number1">067 135 15 47</h6>
          <h6 class="number2">099 053 88 64</h6>
        </div>

        <div class="column footer-info">
          <font-awesome-icon icon="laptop" class="footer-icon fa-2x"/>
          <h6 class="dn-class">Сайт розроблений</h6>
          <a href="#" class="fourth-section">
            <h6 class="developers">EXPND Team</h6>
          </a>
        </div>
      </Row>

    </Container>
  </footer>
</template>

<style lang="scss">
@import '../scss/layout/media-querries';

.developers {
  margin-top: .5rem;
  color: #000;
}

.dn-class {
  color: white;
  margin-top: 0;
}

.number1 {
  color: white;
}

.number2 {
  color: white;
  margin-top: .5rem;
}

.confidentiality {
  color: black;
  margin-top: .5rem;
}

.third-section, .fourth-section {
  text-decoration: none;
}

.mail {
  color: white;
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
  color: white;
}

.dnepr, .mail, .number1, .number2, .developers, .dn-class, .confidentiality {
  font-size: 15px;
}

.footer-icon {
  margin: 20px;
  color: #000;
}

.footer-main {
  background-color: #8DA0BC;
  padding: 2rem 0;
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