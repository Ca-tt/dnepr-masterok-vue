<template>
  <footer id="site-footer" class="footer-main">
    
    <Container>
      <Row class="columns-between columns-v-top">
        
        <div class="column footer-info">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="footer-icon" version="1.1" viewBox="0 0 24 24">
            <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z" />
          </svg>
          <h6 class="dnepr">Працюємо по м. Дніпро</h6>
        </div>

        <div class="column footer-info">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="footer-icon" version="1.1" viewBox="0 0 24 24"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
          <h6 class="mail"><a href="mailto:call@dnepr-сlass.com.ua">call@dnepr
            -сlass.com.ua</a></h6>
          <a @click.prevent="openModal" href="#privacy"
             class="third-section"><h6
              class="confidentiality">Політика конфіденційності</h6></a>
        </div>

        <div class="column footer-info">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="footer-icon" version="1.1" viewBox="0 0 24 24"><path d="M22,3H2A2,2 0 0,0 0,5V19A2,2 0 0,0 2,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M8,6A3,3 0 0,1 11,9A3,3 0 0,1 8,12A3,3 0 0,1 5,9A3,3 0 0,1 8,6M14,18H2V17C2,15 6,13.9 8,13.9C10,13.9 14,15 14,17V18M17.85,14H19.5L21,16L19,18C17.7,17 16.73,15.61 16.28,14C16.1,13.36 16,12.69 16,12C16,11.31 16.1,10.64 16.28,10C16.73,8.38 17.7,7 19,6L21,8L19.5,10H17.85C17.63,10.63 17.5,11.3 17.5,12C17.5,12.7 17.63,13.37 17.85,14Z" /></svg>
          <a :href="this.$phoneNumbersLinks.kievstar" class="number1">{{
              this.$phoneNumbers.kievstar }}</a>
          <a :href="this.$phoneNumbersLinks.vodafone" class="number2">{{
              this.$phoneNumbers.vodafone }}</a>
        </div>

          <!-- icon -->
<!--          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="footer-icon" viewBox="0 0 24 24"><path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" /></svg>-->
        <figure class="column footer-info copyrights">

          <div class="img-wrapper rounded">
            <img class="text-icon footer-icon"
                     src="./../img/expand/EXPND-logo-black.png"
               alt="логотип команды Expand">
          </div>

          <h6 class="dn-class">Сайт розробила</h6>
            <p><a href="#" class="fourth-section">команда EXPAND</a></p>
        </figure>
      </Row>

    </Container>

    <!-- Sweet Modal -->
    <sweet-modal ref="modal" overlay-theme="dark">
      <PrivacyPolicy></PrivacyPolicy>
    </sweet-modal>

  </footer>
</template>

<script>
import Container from "./../components/layout/Container";
import Row from "./..//components/layout/Row";
import PrivacyPolicy from "./modals/PrivacyPolicy";

export default {
  name: 'Footer',
  components: {
    PrivacyPolicy,
    Row,
    Container,
  },
  data() {
    return {
    }
  },
  methods: {
    openModal() {
      this.$refs.modal.open();
    },
    closeModal() {
      this.$refs.modal.close();
    },
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import '../scss/layout/media-querries';

.row.columns-v-top {
  align-items: flex-start;
}

.developers {
  margin-top: .5rem;
  color: #000;
}

.dn-class {
  color: white;
  margin: 0 0 .5rem 0;
}

.number1, .number2 {
  margin-top: .5rem;
  color: white;
  text-decoration: none;
}

.confidentiality {
  color: black;
  margin-top: .5rem;
}

.third-section, .fourth-section {
    text-decoration-color: black;
}

.mail a {
  color: white;
}

.confidentiality {
  margin: 5px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

.copyrights {
  p {
    margin: 0;
  }

  a {
    color: white;
  }
}

.footer-icon {
  color: #000;
  margin: 1rem 0;
  max-width: 60px;
}

.img-wrapper {
  text-align: center;
}

.footer-main {
  background-color: #8DA0BC;
  padding: 2rem 0;
}

/* Sweet Modal styles */
footer {
  .sweet-modal-overlay {
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  .sweet-modal {
    max-width: 90%;
    background: rgba(255, 2555, 255, 0.9);

    .sweet-content {
      padding: 0;

      .modal-text {
        padding: 1em;
        font-size: 1.1em;
      }

      p {
        text-align: left;
      }

      h2, h3 {
        text-align: center;
        font-size: 1.75em;
      }
    }
  }

}

</style>