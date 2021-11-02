<template>
    <footer class="footer-main">
      <div class="footer-info">
        <font-awesome-icon icon="map-marker-alt" class="footer-icon" />
        <h6 class="dnepr">Работаем по г. Днепр</h6>
      </div>
      <div class="footer-info">
        <font-awesome-icon icon="envelope" class="footer-icon" />
        <h6 class="mail">info@dnepr-сlass.com.ua</h6>
        <a href="#" class="third-section"><h6 class="confidentiality">Политика конфиденциальности</h6></a>
      </div>
      <div class="footer-info">
        <font-awesome-icon icon="mobile" class="footer-icon" />
        <h6 class="number1">067 135 15 47</h6>
        <h6 class="number2">099 053 88 64</h6>
      </div>
      <div class="footer-info">
        <a href="#" class="fourth-section">
          <h6 class="developers">Сайт разработан в студии<br> PageSpeed.com.ua</h6>
        </a>
        <h6 class="dn-class">© 2020 dnepr-class.com.ua</h6>
      </div>
    </footer>
</template>

<style>
  @media screen and (max-width: 426px){
    .footer-info{
      margin: 20px;
    }
    .footer-main{
      flex-direction: column;
    }
  }
  @media screen and (max-width: 768px){
    .dnepr, .mail, .number1, .number2, .developers, .dn-class, .confidentiality{
      font-size: 13px !important;
    }
  }
  .developers{
    margin-bottom: 5px;
  }
  .dn-class{
    color: #fab005;
    margin-top: 0;
    margin-bottom: 40px;
  }
  .number1{
    margin-top: 20px;
    margin-bottom: 5px;
    color: #fab005;
  }
  .number2{
    margin: 0;
    color: #fab005;
  }
  .confidentiality, .developers{
    color: white;
  }
  .third-section, .fourth-section{
    text-decoration: none;
  }
  .mail{
    margin-top: 15px;
    margin-bottom: 0;
    color: #fab005;
  }
  .confidentiality{
    margin: 5px;
  }
  .dnepr{
    margin: 16px;
    color: #fab005;
  }
  .footer-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dnepr, .mail, .number1, .number2, .developers, .dn-class, .confidentiality{
    font-size: 15px;
  }
  .footer-icon{
    color: #fab005;
  }
  .footer-main{
    display: flex;
    justify-content: space-evenly;
    background-color: black;
  }

</style>

<script>

export default {
  name: 'Footer',

}
</script>