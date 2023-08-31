<template>
  <div class="modal">
    <div class="modal_wrapper">
      <div class="modal_title">
        <span>Добавление тегов</span>
      </div>
      <div class="modal_subtitle">
        <span>Вы можете добавить ещё 19</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const emit = defineEmits('close')
const closeModal = () => {
  emit('close')
}
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  overflow-x: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  background: #8C8F97;
}

.modal_wrapper {
  position: relative;
  width: 540px;
  margin: 0 auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  -webkit-box-shadow: 0 4px 8px rgba(54, 123, 245, 0.24);
  box-shadow: 0 4px 8px rgba(54, 123, 245, 0.24);
}
</style>
