<template>
  <main>
    <!-- ---------------------------------------------- -->
    <!--- Page header -->
    <!-- ---------------------------------------------- -->
    <section class="task-management__header">
      <p>Task Management</p>
      <button @click="toggleModalStatus">Create new task</button>
    </section>

    <!-- ---------------------------------------------- -->
    <!--- Page header -->
    <!-- ---------------------------------------------- -->
    <section class="task-management__columns">
      <div class="task-management__todo-list">
        <task-card v-for="task in todoList" :key="task.id" :task-data="task" />
      </div>

      <div class="task-management__todo-list">
        <task-card v-for="task in inProgressList" :key="task.id" :task-data="task" />
      </div>

      <div class="task-management__todo-list">
        <task-card v-for="task in doneList" :key="task.id" :task-data="task" />
      </div>
    </section>

    <!-- ---------------------------------------------- -->
    <!--- update and create modal -->
    <!-- ---------------------------------------------- -->
    <base-modal
      :modal-title="itemToEdit?.id ? 'Edit Task' : 'Create New Task'"
      @close="toggleModalStatus"
      v-if="modalStatus"
      :show-modal="modalStatus"
    >
      <task-form-create-and-update />
    </base-modal>
  </main>
</template>

<script setup lang="ts">
import BaseModal from '../../components/BaseModal/BaseModal.vue'
import useBaseModal from '../../composables/useBaseModal'
import TaskFormCreateAndUpdate from './components/TaskFormCreateAndUpdate/TaskFormCreateAndUpdate.vue'
import useTasksManagement from './use/useTasksManagement'
import TaskCard from './components/TaskCard/TaskCard.vue'

const { modalStatus, toggleModalStatus } = useBaseModal()
const { todoList, inProgressList, doneList, itemToEdit } = useTasksManagement()
</script>

<style scoped>
.task-management__header {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task-management__columns {
  display: flex;
  gap: 25px;
  min-width: 25%;
  height: 100vh;
}

.task-management__todo-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  padding: 1rem;
  background-color: #f2f2f2;
}
</style>
