<template>
  <section>
    <Container>
      <div class="communication">
        <div class="title">
          <h2 class="title" data-v-3e51d18e="">ВЫЗОВ МАСТЕРА</h2>
        </div>
        <div class="com-container">
          <div class="kyivstar">
            <div class="logo">
              <img src="../img/kyivstar.png" alt="">
            </div>
            <div class="number">
              <a href="#">067 135 15 47</a>
            </div>
          </div>
          <div class="vodafone">
            <div class="logo">
              <img src="../img/vodafone.png" alt="">
            </div>
            <div class="number">
              <a href="#">099 053 88 64</a>
            </div>
          </div>
          <div class="call-back">
            <div class="backcall">
              <ModalWindow button-text="Обратный звонок"></ModalWindow>
            </div>
            <div class="call-soon">
              <p>Перезвоним в течении 3-5 минут</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>


<script>
import Container from '../components/layout/Container';
import ModalWindow from "@/components/ModalWindow";

export default {
  name: 'MasterCall',
  components: {
    ModalWindow,
    Container
  }
}

</script>

<style lang="scss" scoped>
@import '../scss/layout/media-querries';

.communication {
  margin-bottom: 50px;
}

.com-container {
  display: flex;
  flex-direction: column;
}

.kyivstar, .vodafone, .call-back {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  // маржины не нужны на десктопе, убрал их
  @include to-desktop {
    margin-bottom: 1rem;
  }
}

.call-back {

  // тут тоже маржины не нужны на больших экранах
  // только мешают выровняться по флексу по вертикали
  @include to-desktop {
    // маржины должны быть в одном правиле
    margin-top: 30px;
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }
}

.logo, .backcall {
  margin-bottom: 15px;
}

.number a {
  text-decoration: none;
  color: #54617A;
  font-size: 20px;
}

.backcall a {
  color: white;
  text-decoration: none;
  padding: 12px 20px;
  background-color: #FAB619;
  border-radius: 5px;
  font-size: 12px;
}

.backcall a:hover {
  background-color: #FAC019;
}

.call-soon p {
  color: #54617A;
}

.logo img {
  max-width: 100%;
}

@media screen and (min-width: 768px) {
  .com-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
  }

  .kyivstar, .vodafone, .call-back {
    width: 30%;
  }

  .backcall a {
    font-size: 15px;
  }

  .number a {
    font-size: 22px;
  }
}

@media screen and (min-width: 1024px) {
  .communication {
    margin-bottom: 100px;
  }

  .number a {
    font-size: 25px;
  }

  .logo img {
    width: 170px;
  }

  .logo {
    margin-bottom: 0;
  }

  .call-soon p {
    font-size: 18px;
  }
}

@media screen and (min-width: 1440px) {
  .backcall a {
    font-size: 20px;
  }

  .number a {
    font-size: 25px;
  }

  .call-soon p {
    font-size: 18px;
  }

  .logo img {
    width: 180px;

  }
}
</style>
