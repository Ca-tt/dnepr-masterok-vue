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
              <!--
                Убрал тег <br>. Считается дурным тоном, ведь
                с ним тяжелее делать гибкие переходы текста

                Хотя в твоем случае можно было и оставить
                Так что не костыль =)
                C ним лучше, честно.
              -->
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
              <a href="#" class="c-f"> РАСЧЕТ СТОИМОСТИ </a>
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

//.column {
//
//  &.left-column {
//    @include from-tablet {
//      flex: 1 0 50% !important; /*костыль. Подумаю, как исправить этот стыд */
//    }
//  }
//}

/*
  Блоки должны идти в CSS в таком же порядке, как и в ХТМЛ
  вытянут этот блок с низу, он был под.buttons
*/
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

// кнопки по центру только планшета
.buttons {
  @include mobile-only {
    text-align: center;
  }

  @include from-desktop {
    display: flex;
    align-items: baseline;
  }
}

/*
  Название классов не оч. Объясню, почему

  Мне, как разработчику, который не писал этот код, не ясно,
  что такое .c-f: кнопка, секция, блок-контейнер?

  Старайся давайть названия для блоков по следующей методе:
  - что за элемент (секция, кнопка)
  - что делает на сайте (колонка, ряд, контейнер)
  - в каком состоянии находится (оранжевая, синяя, большая, маленькая)

*/

/*
  Сократил код кнопки за счет того, что
  не использовал flex.

  Чтобы выровнять текст по центру, использовал паддинги
  В ховере был тот же код, что и для элемента без наведения.

  Убрал этот код.
*/

.c-f {
  // max width почти всегда лучше width
  max-width: 250px;
  // используйте относительные единицы, когда можно
  // они гибкие и меняются от размера шрифта
  padding: 1em 2em;
  display: inline-block;
  text-decoration: none;
  color: white;
  text-align: center;
  outline: 2px solid white;
  border-radius: 5px;

  /*
    В sass можно делать даже так:
    - вкладывать один элемент в другой
    - и использовать название родительского класса (&)
   */

  &:hover {
    background-color: rgba(255, 255, 255, 0.65);
  }
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

/* решели с Лешей, что space-between будет выглядить лучше*/
//.title-slide {
//display: flex;
//justify-content: space-between;
//}

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

  //.title-slide {
  //  align-items: center;
  //}
  /*
    маржины указываем только нижние
    верхние и нижние в куче слипаются между собой
    и не дают нужного оступа
    почитай про margin collapse, пожалуйста,
    чтобы понять, зачем так начали делать
  */


  //.c-f {
  //  margin-bottom: 55px;
  //  margin-top: 15px;
  //}

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

  //.title-slide {
  //  display: flex;
  //  flex-direction: column;
  //  align-items: center;
  //  justify-content: center;
  //}

  .menu-union {
    margin-left: 0;
    margin-top: 10px;
  }

  .menu-click {
    font-size: 17px;
  }

  // теперь это не нужно
  //.buttons {
  //  justify-content: center;
  //  align-items: center;
  //}

  .a-m {
    margin: 0;
  }

  .c-f {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 426px) {
  .a-m {
    margin-right: 0;
  }

  // в этом тоже больше нет необходимости
  //.buttons {
  //  justify-content: center;
  //  align-items: center;
  //}

  .main-title,
  .list {
    text-align: center;
  }

  //.title-slide {
  //  flex-direction: column;
  //}

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