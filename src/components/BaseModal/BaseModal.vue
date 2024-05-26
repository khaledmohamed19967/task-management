<template>
  <!-- ---------------------------------------------- -->
  <!--- modal -->
  <!-- ---------------------------------------------- -->
  <div class="base-modal" v-if="showModal">
    <button class="base-modal__close" @click="closeModal">x</button>
    <h3>{{ modalTitle }}</h3>
    <div class="base-modal__body">
      <slot />
    </div>
  </div>

  <!-- ---------------------------------------------- -->
  <!--- overlay -->
  <!-- ---------------------------------------------- -->
  <div class="overlay" v-if="showModal" @click="closeModal"></div>
</template>

<script setup>
defineProps({
  showModal: { type: Boolean, default: false, required: true },
  modalTitle: { type: String, required: true }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close', false)
}
</script>

<style scoped src="./BaseModal.scss"></style>
