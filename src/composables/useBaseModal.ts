import { ref } from 'vue'

const modalStatus = ref<boolean>(false)
export default function useBaseModal() {
  const toggleModalStatus = () => {
    modalStatus.value = !modalStatus.value
  }

  return {
    modalStatus,
    toggleModalStatus
  }
}
