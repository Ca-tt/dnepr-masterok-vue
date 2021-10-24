<template>
  <header>
     <div class="open-lock">
      <div class="header-icon">
        <font-awesome-icon icon="lock" />
      </div>
       <div>Открываем замки любой сложности</div>
    </div>
    <div class="inf">
      <div>
        <div class="header-icon clock">
          <font-awesome-icon icon="clock" />
        </div>
        <div class="all-time">Работаем круглосуточно</div>
      </div>
      <div>
        <div class="header-icon">
          <font-awesome-icon icon="mobile" />
        </div>
        <div class="tel-number">
          <a href="">067 135 15 47</a>
        </div>
      </div>
      <div>
        <div class="header-icon">
          <font-awesome-icon icon="mobile" />
        </div>
        <div class="tel-number">
          <a href="">099 053 88 64</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #222222;
    height: 40px;
    font-size: 0.9em;
  }

  .open-lock, .inf div {
    display: flex;
  }

  .open-lock {
    margin-left: 75px;
  }

  .inf {
    display: flex;
    margin-right: 75px;
  }

  /* .all-time, .tel-number {
    margin: 0 15px;
  } */

  .inf > div {
    margin-left: 15px;
    align-items: center;
  }

  .tel-number a {
    color: white;
  }

  .all-time, .open-lock {
    color: white;
  }

  .header-icon {
    color: #999999;
    margin-right: 10px;
    /* width: 1em; */
  }

  .clock {
    width: 1em;
  }

  @media (max-width: 1024px) {
    header {
      font-size: 0.75em;
    }
  }

  @media (max-width: 767px) {
    header {
      display: none;
    }
  }
</style>

<script>

export default {
  name: 'Header',

}
</script>
