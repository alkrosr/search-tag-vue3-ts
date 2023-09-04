<template>
  <div class="modal_wrapper" ref="modalWrapper">
    <div class="modal">
      <div class="modal__header">
        <div class="modal__header-title">
          <h4>Добавление тегов</h4>
        </div>
        <div class="modal__header-subtitle">
          Вы можете добавить ещё <span>19</span>
        </div>
      </div>
      <div class="modal__line"></div>
      <div class="modal__content">
        <form action="#" class="modal__search">
          <label>Название тега</label>
          <input
                type="text"
                name="search"
                placeholder="Поиск"
                autocomplete="off"
                @input="searchTags( $event.target.value)"
            />
        </form>
        <div class="modal__result">
          <span>Стекло</span>
          <span>Стекло автомобильное</span>
          <span>Остекление</span>
          <span>Стеклянная ваза</span>
          <span>Зеркало</span>
        </div>
      </div>
      <div class="modal__line"></div>
      <div class="modal__selected">
        <span>Стекло <icon-close/></span>
        <span>Стекло автомобильное <icon-close/></span>
        <span>Остекление <icon-close/></span>
        <span>Стеклянная ваза <icon-close/></span>
        <span>Зеркало <icon-close/></span>
      </div>
      <div class="modal__line"></div>
      <div class="modal__footer">
        <app-button class="button--primary">Сохранить</app-button>
        <app-button class="button--border" @click="closeModal">Отмена</app-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useDetectOutsideClick from '../hooks/useDetectOutsideClick.ts'
import {computed, ref} from "vue";
import IconClose from "@/components/icons/IconClose.vue";
import AppButton from "@/common/components/AppButton.vue";

const modalWrapper = ref("")
const emit = defineEmits("close")
const props = defineProps({
  data: Array
})

// const tags = computed(() => {
//   let tags;
//
//   props.data?.forEach(d => {
//     if (d.subcategories?.tags?) {
//       t
//     }
//   })
// })

const closeModal = () => {
  emit('close')
}

useDetectOutsideClick(modalWrapper, () => {
  closeModal()
})

const searchTags = (value: string) => {
  console.log("searchTags value", value)
}


</script>
<style lang="scss" scoped>
.modal_wrapper {
  position: relative;

  width: 100%;
  height: 100%;

  background: #8C8F97;

  .modal {
    position: absolute;
    z-index: 100;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    overflow-x: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    width: 540px;

    margin: 0 auto;

    background-color: #ffffff;
    border-radius: 10px;
    -webkit-box-shadow: 0 4px 8px rgba(54, 123, 245, 0.24);
    box-shadow: 0 4px 8px rgba(54, 123, 245, 0.24);

    &__line {
      width: 100%;
      height: 1px;

      background: #ECEDF2;
    }

    &__header {
      padding: 40px 40px 0 40px;

      &-title {
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;

        color: #16171B;

        padding-bottom: 12px;
      }
      &-subtitle {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;

        color: #8C8F97;

        padding-bottom: 20px;
        span {
          color: #404144;

          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px;
        }
      }
    }

    &__content {
      padding: 40px 40px 0 40px;
      margin-bottom: 20px;
      .modal__search {
        position: relative;
        margin-bottom: 20px;
        label {
          position: absolute;
          height: 20px;
          padding: 0 5px;

          top: 0;
          left: 18px;

          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: 16px;

          color: var(--text-input-label-color);
        }
        input[type=text] {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          box-sizing: border-box;
          border: 2px solid var(--border-input-color);
          border-radius: 4px;
        }
      }
      .modal__result {
        display: flex;
        flex-wrap: wrap;
        span {
          height: 32px;
          padding: 4px 12px;
          align-items: center;

          border-radius: 4px;
          background: #F6F6F9;

          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;

          cursor: pointer;
          margin-right: 8px;
          margin-bottom: 9px;
        }
      }

    }

    &__selected {
      padding: 24px 40px 16px 40px;
      display: flex;
      flex-wrap: wrap;
      span {
        display: flex;
        align-items: center;

        height: 32px;
        padding: 4px 8px 4px 12px;

        border-radius: 4px;
        background: #F6F6F9;

        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;

        cursor: pointer;
        margin-right: 8px;
        margin-bottom: 9px;

        svg {
          margin-left: 5px;
        }
      }
    }

    &__footer {
      padding: 40px 40px 30px 40px;

      display: flex;
    }
  }

}


</style>
