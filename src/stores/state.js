import { reactive, watch } from 'vue'

const LOCAL_STORAGE_KEY = 'github.com/hydrotho/ChatGPT_Model_Switcher'

function getInitialState() {
  const defaultState = {
    isEnabled: false,
    selectedModelSlug: 'text-davinci-002-render-sha'
  }

  try {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedState) {
      return JSON.parse(savedState)
    }
  } catch (error) {
    console.warn(
      '[ChatGPT_Model_Switcher]',
      'Failed to restore state from localStorage, falling back to default state'
    )
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultState))
  return defaultState
}

export const state = reactive(getInitialState())

watch(state, (newState) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState))
})
