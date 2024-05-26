<template>
  <form @submit.prevent="submitForm">
    <div class="input-wrapper">
      <label>Title</label>
      <input v-model="formData.data.title" />
    </div>

    <div class="input-wrapper">
      <label>Description</label>
      <textarea v-model="formData.data.description" />
    </div>

    <div class="task-form__actions">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive, defineEmits, PropType, onMounted, onUnmounted } from 'vue'
import useTasksManagement from '../../use/useTasksManagement'
import useBaseModal from '../../../../composables/useBaseModal'

const { itemToEdit, editTask, createTask } = useTasksManagement()
const { toggleModalStatus } = useBaseModal()

const emit = defineEmits(['onSubmit'])

const formData = reactive<{ data: ITaskCard }>({
  data: { description: '', title: '' }
})

const submitForm = () => {
  if (Object.entries(itemToEdit.value).length === 0) {
    formData.data.id = 'id-' + Math.random().toString(36).substr(2, 16)
    formData.data.status = 'pending'
    createTask(formData.data)
  } else {
    editTask(formData.data)
  }
  toggleModalStatus()
}

// handle fill form data in edit case
const fillFormData = () => {
  formData.data = { ...itemToEdit.value }
}

onMounted(() => {
  if (!itemToEdit) return
  fillFormData()
})

onUnmounted(() => (itemToEdit.value = {}))
</script>

<style src="./TaskFromCreateAndUpdate.scss" lang="scss" scoped></style>
