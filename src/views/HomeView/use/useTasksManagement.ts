import { computed, ref } from 'vue'

const tasksList = ref<ITaskCard[]>([])
const itemToEdit = ref<ITaskCard>({})

export default function useTasksManagement() {
  // handle tasks list filters
  const todoList = computed(() => tasksList.value.filter((el) => el.status === 'pending'))
  const inProgressList = computed(() => tasksList.value.filter((el) => el.status === 'inProgress'))
  const doneList = computed(() => tasksList.value.filter((el) => el.status === 'done'))

  // handle create item
  const createTask = (formData: ITaskCard) => {
    tasksList.value.push(formData)
  }

  // handle delete item
  const deleteTask = (taskId: string) => {
    tasksList.value = tasksList.value.filter((el: ITaskCard) => el.id !== taskId)
  }

  // handle edit item
  const editTask = (taskData: ITaskCard) => {
    const targetTaskByIndex = tasksList.value.findIndex((el: ITaskCard) => el.id === taskData.id)
    tasksList.value[targetTaskByIndex] = taskData
  }

  return {
    tasksList,
    deleteTask,
    editTask,
    createTask,
    doneList,
    todoList,
    inProgressList,
    itemToEdit
  }
}
