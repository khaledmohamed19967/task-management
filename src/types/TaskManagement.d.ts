interface ITaskCard {
  id?: string
  status?: TTaskStatus
  title?: string
  description?: string
}

type TTaskStatus = 'pending' | 'inProgress' | 'done'
