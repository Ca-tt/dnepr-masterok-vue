<template>
  <section id="preferences">
    <div class="preferences">
      <div class="title">
        <h2 class="title" data-v-3e51d18e="">НАШІ ПЕРЕВАГИ</h2>
        <p class="category">
          Компанія masterOK відрізняється досвідом та професійним підходом. Для своїх клієнтів ми надаємо максимально комфортні умови надання послуг.
        </p>
      </div>
      <div class="pref-list">
        <div class="pref-list-fst">
          <div class="pref-block">
            <div class="pref-icon">
              <font-awesome-icon icon="sort-numeric-down" class="icon"/>
            </div>
            <div class="pref-text">
              <h3>Порядність та конфіденційність</h3>
              <p>
                Ми гарантуємо збереження Вашої особистої інформації.
                У нашій команді працюють перевірені майстри.
              </p>
            </div>
          </div>
          <div class="pref-block">
            <div class="pref-icon">
              <font-awesome-icon icon="money-bill-alt" class="icon"/>
            </div>
            <div class="pref-text">
              <h3>Готівковий або безготівковий розрахунок</h3>
              <p>
               Сплатити наші послуги Ви зможете у будь-який зручний спосіб. Працюємо без передоплат.
              </p>
            </div>
          </div>
        </div>
        <div class="pref-list-snd">
          <div class="pref-block">
            <div class="pref-icon">
              <font-awesome-icon icon="id-card" class="icon"/>
            </div>
            <div class="pref-text">
              <h3>Професіоналізм</h3>
              <p>
                Досвідчені майстри знають своє легко допоможуть Вам відкрити
                замки будь-якої складності за 10-20 хвилин. 
              </p>
            </div>
          </div>
          <div class="pref-block">
            <div class="pref-icon">
              <font-awesome-icon icon="lock-open" class="icon"/>
            </div>
            <div class="pref-text">
              <h3>Розкриття без пошкоджень</h3>
              <p>
                Ми використовуємо лише якісний та професійний інструмент. Ваші замки залишаться цілими та без дефектів.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @import '../scss/app/colors';


    .preferences {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
        margin-top: 40px;
    }

    .preferences > .title {
        /* width: 55%; */
        text-align: center;
        margin-bottom: 25px;
    }

    .preferences > .title > .category {
        line-height: 1.7;
    }

    .pref-list {
        display: flex;
        flex-direction: column;
    }

    .pref-list-fst, .pref-list-snd {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .pref-block {
        display: flex;
        flex-direction: column;
        width: 90%;
    }

    .pref-icon .icon {
        width: 60px;
        height: 60px;
        border: 2px solid #54617A;
        padding: 10px;
        border-radius: 50%;
        margin: 15px;
    }

    .pref-text h3 {
        color: $orange;
    }

    .pref-text p {
        font-size: 0.9em;
    }

    @media screen and (min-width: 768px) {
        .preferences > .title {
            width: 70%;
            margin-bottom: 35px;
        }

        .pref-list-fst, .pref-list-snd {
            flex-direction: row;
            justify-content: space-around;
            margin-bottom: 20px;
        }

        .pref-block {
            flex-direction: row;
            align-items: center;
            width: 45%;
        }

        .pref-text {
            text-align: left;
        }
    }

    @media screen and (min-width: 1024px) {
        .pref-list-fst, .pref-list-snd {
            margin-bottom: 25px;
        }

        .preferences {
            margin-bottom: 100px;
        }

        .preferences > .title {
            width: 720px;
        }

        .pref-text p {
            font-size: 1em;
        }
    }

    @media screen and (min-width: 1440px) {
        .pref-text h3 {
            font-size: 1.5em;
        }

        .pref-text p {
            font-size: 1.2em;
        }
    }


.preferences > .title {
  /* width: 55%; */
  text-align: center;
  margin-bottom: 25px;
}

.preferences > .title > .category {
  line-height: 1.7;
}

.pref-list {
  display: flex;
  flex-direction: column;
}

.pref-list-fst,
.pref-list-snd {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pref-block {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.pref-icon .icon {
  width: 60px;
  height: 60px;
  border: 2px solid #54617a;
  padding: 10px;
  border-radius: 50%;
  margin: 15px;
}

.pref-text h3 {
  color: $orange;
}

.pref-text p {
  font-size: 0.9em;
}

@media screen and (min-width: 768px) {
  .preferences > .title {
    width: 70%;
    margin-bottom: 35px;
  }

  .pref-list-fst,
  .pref-list-snd {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .pref-block {
    flex-direction: row;
    align-items: center;
    width: 45%;
  }

  .pref-text {
    text-align: left;
  }
}

@media screen and (min-width: 1024px) {
  .pref-list-fst,
  .pref-list-snd {
    margin-bottom: 25px;
  }

  .preferences {
    margin-bottom: 100px;
  }

  .preferences > .title {
    width: 720px;
  }

  .pref-text p {
    font-size: 1em;
  }
}

@media screen and (min-width: 1440px) {
  .pref-text h3 {
    font-size: 1.5em;
  }

  .pref-text p {
    font-size: 1.2em;
  }
}

</style>

<script>
export default {
  name: "Preferences",
}

</script>