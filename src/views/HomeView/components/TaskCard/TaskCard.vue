<template>
  <div class="task-card__wrapper">
    <div class="task-card__header">
      <p class="task-card__title">{{ taskData.title }}</p>
      <p class="task-card__status">{{ taskData.status }}</p>
    </div>
    <p class="task-card__title">
      {{ taskData.description }}
    </p>

    <div class="task-card__actions">
      <button @click="handleEdit">edit</button>
      <button @click="deleteTask(taskData.id)">delete</button>
      <button @click="editTask({ ...taskData, status: 'inProgress' })">in progress</button>
      <button @click="editTask({ ...taskData, status: 'done' })">done</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue'
import useTasksManagement from '../../use/useTasksManagement'
import useBaseModal from '../../../../composables/useBaseModal'

const props = defineProps({ taskData: { type: Object as PropType<ITaskCard>, required: true } })

const { deleteTask, editTask, itemToEdit } = useTasksManagement()
const { toggleModalStatus } = useBaseModal()

const handleEdit = () => {
  itemToEdit.value = props.taskData
  toggleModalStatus()
}
</script>

<style src="./TaskCard.scss" lang="scss" scoped></style>
