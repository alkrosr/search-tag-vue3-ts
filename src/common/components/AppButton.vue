<template>
  <button
    class="button"
    :type="type"
  >
    <slot/>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  }
})

</script>
<style lang="scss" scoped>

.button {
  display: block;

  box-sizing: border-box;
  width: 110px;
  height: 40px;
  margin: 0;
  padding: 12px 0;

  cursor: pointer;
  transition: 0.5s;
  text-align: center;

  color: #FFFFFF;
  border: none;

  border-radius: 8px;
  background: var(--primary-862-fde, #862FDE);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  &--primary {
    background-color: var(--primary-862-fde, #862FDE);

    &:hover:not(:active) {
      opacity: .9;
    }

    &:active {
      opacity: .4;
    }
  }

  //&--error {
  //  background-color: $red-600;
  //
  //  &:hover:not(:active) {
  //    background-color: $red-500;
  //    box-shadow: 0px 8px 16px $shadow-600;
  //  }
  //
  //  &:active {
  //    background-color: $red-700;
  //    box-shadow: 0px 4px 8px $shadow-500;
  //  }
  //}

  //&--border {
  //  color: $blue-gray-600;
  //  border: 1px solid $blue-gray-600;
  //  background-color: $white-900;
  //
  //  &:hover:not(:active) {
  //    background-color: $white-900;
  //  }
  //
  //  &:active {
  //    background-color: $white-700;
  //  }
  //}

  &--disabled {
    pointer-events: none;

    opacity: 0.5;
  }
}
</style>
