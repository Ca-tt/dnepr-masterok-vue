<template>
  <section>
    <div class="backcall"><a href="" id="mybtn">ОБРАТНЫЙ ЗВОНОК</a></div>
    <div class="modal-wrapper" id="mymodal-wrap">
      <div class="popup-content">
        <div class="popup-header">
          <span class="close-modal"> &times; </span>
        </div>
        <div class="popup-body">
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.modal-wrapper {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgb(0, 0, 0, 0.4);
  padding-top: 150px;
}

.popup-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 80%;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

@keyframes animetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
.popup-header {
  color: black;
  display: flex;
  padding: 2px 16px;
}
.close-modal {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  margin-left: auto;
}

.close-modal:hover,
.close-modal:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.popup-body {
  padding: 2px 16px;
  background-color: white;
  height: 100px;
  z-index: 2;
}
</style>

<script>

export default {
  name: "ModalWindow",
};
</script>

