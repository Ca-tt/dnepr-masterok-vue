<template>
<<<<<<< HEAD
    <header>
       
    </header>
=======
  <header>
      <div class="open-lock">
        <div><i class="fas fa-lock-open"></i></div>
        <div>Открываем замки любой сложности</div>
      </div>
      <div class="inf">
        <div>
          <div></div>
          <div class="all-time">Работаем круглосуточно</div>
        </div>
        <div>
          <div></div>
          <div class="tel-number">
            <a href="">067 135 15 47</a>
          </div>
        </div>
        <div>
          <div></div>
          <div class="tel-number">
            <a href="">099 053 88 64</a>
          </div>
        </div>
      </div>
  </header>
>>>>>>> ddb59a9948f311f6904f732d2cc8323ac205f48b
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

  .open-lock {
    margin-left: 75px;
  }

  .inf {
    display: flex;
    margin-right: 75px;
  }

  .all-time, .tel-number {
    margin: 0 15px;
  }

  .tel-number a {
    color: white;
  }

  .all-time, .open-lock {
    color: white;
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