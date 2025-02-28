const show = ref(false)
const message = ref('')
const color = ref('info')

export const useSnackbar = () => {
  const clear = () => {
    show.value = false
    message.value = ''
    color.value = 'info'
  }

  const error = (msg: string) => {
    show.value = true
    message.value = msg
    color.value = 'error'
  }
  const info = (msg: string) => {
    show.value = true
    message.value = msg
    color.value = 'info'
  }
  const success = (msg: string) => {
    show.value = true
    message.value = msg
    color.value = 'success'
  }
  const warning = (msg: string) => {
    show.value = true
    message.value = msg
    color.value = 'warning'
  }

  return {
    show,
    message,
    color,
    clear,
    error,
    info,
    success,
    warning,
  }
}
