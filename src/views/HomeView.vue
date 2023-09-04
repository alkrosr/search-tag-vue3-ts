<template>
  <main class="main">
    <app-button
        v-if="!isModalOpen"
        class="button--primary"
        @click="submit"
    >
      Click me
    </app-button>

    <modal-tags :data="dataStore.data" @close="isModalOpen = false" v-else/>

  </main>
</template>
<script setup lang="ts">
import AppButton from '@/common/components/AppButton.vue';
import {ref} from "vue";
import ModalTags from '@/components/ModalTags.vue';
import {useStoreData} from "@/store/data.js";

const isModalOpen = ref(false)
const dataStore = useStoreData()

void dataStore.getData()

const submit = () => {
  console.log("submit")
  isModalOpen.value = true
}
</script>
<style lang="scss" scoped>
.main {
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
