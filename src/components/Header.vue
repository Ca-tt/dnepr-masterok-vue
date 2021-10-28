<template>
  <header class="main-header">
    <main class="header-navigation">
      <div class="left-navbar">
        <div class="header-icon">
          <font-awesome-icon icon="lock" />
        </div>
        <span>Открываем замки любой сложности</span>
      </div>
      <div class="right-navbar">
        <div class="rightnavbar-block">
          <div class="header-icon">
            <font-awesome-icon icon="clock" />
          </div>
          <span>Работаем круглосуточно</span>
        </div>
        <div class="rightnavbar-block">
          <div class="header-icon">
            <font-awesome-icon icon="mobile" />
          </div>
          <nav class="call-number">
            <a href="">067 135 15 47</a>
          </nav>
        </div>
        <div class="rightnavbar-block">
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
.left-navbar,
.right-navbar,
.header-navigation,
.rightnavbar-block {
  display: flex;
  align-items: center;
}

.main-header {
  background-color: #222222;
  max-height: 40px;
  font-size: .8rem;
}

.header-navigation {
  padding: 12px;
  justify-content: space-around;
  max-width: 88%;
  margin: 0 auto;
}

.rightnavbar-block {
  padding: 0 15px;
}

.header-icon {
  font-size: 18px;
  color: #999;
  margin-right: 10px;
}

.svg-inline--fa.fa-w-16 {
  width: 0;
  max-width: 18px;
}

.main-header,
a {
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
  name: "Header",
};
</script>
