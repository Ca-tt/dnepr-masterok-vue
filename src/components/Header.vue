<template>
  <header class = "main-header">
    <main class = "header-navigation">
     <div class="open-lock">
      <div class="header-icon">
        <font-awesome-icon icon="lock" />
      </div>
       <span>Открываем замки любой сложности</span>
    </div>
    <div class="right-navbar">
      <div class = "rightnavbar-block">
        <div class="header-icon">
          <font-awesome-icon icon="clock" />
        </div>
        <span>Работаем круглосуточно</span>
      </div>
      <div class = "rightnavbar-block">
        <div class="header-icon">
          <font-awesome-icon icon="mobile" />
        </div>
        <nav class="call-number">
          <a href="">067 135 15 47</a>
        </nav>
      </div>
      <div class = "rightnavbar-block">
        <div class="header-icon">
          <font-awesome-icon icon="mobile" />
        </div>
        <nav class="call-number">
          <a href="">099 053 88 64</a>
        </nav>
      </div>
    </div>
    </main>
  </header>
</template>

<style>
  .header-navigation{
    padding: 12px;
    justify-content: space-between;
  }

  .main-header{
    background-color: #222222;
    max-height: 40px;
    font-size: 0.9em;
  }

  .main-header, a{
    color: white;
  }

  .open-lock, .right-navbar , .header-navigation , .rightnavbar-block {
    display: flex;
    align-items: center;
  }

  .open-lock {
    margin-left: 100px;
  }

  .right-navbar {
    margin-right: 100px;
  }

  .rightnavbar-block {
    padding: 0 15px;
  }

  .header-icon {
    width: 10px;
    color: #999999;
    margin-right: 15px;
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
