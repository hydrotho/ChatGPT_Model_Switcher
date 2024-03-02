import { createApp } from 'vue'
import App from './App.vue'

import { models } from './stores/models'
import { state } from './stores/state'

// Start Mounting App to DOM

let app = null

function mountApp(mountPoint) {
  if (app) {
    app.unmount()
    app = null
  }

  const rootContainer = document.createElement('div')
  rootContainer.className = 'flex items-center gap-2'
  rootContainer.id = 'chatgpt-model-switcher'

  const wrapper = document.createElement('div')
  wrapper.className = 'flex gap-2 pr-1'
  wrapper.appendChild(rootContainer)
  wrapper.appendChild(mountPoint.removeChild(mountPoint.lastChild))

  mountPoint.appendChild(wrapper)

  app = createApp(App)
  app.mount(rootContainer)
}

new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      const mountPoint = document.querySelector('main div.sticky')
      if (
        mountPoint &&
        Array.from(mountPoint.childNodes).some((child) => child.hasChildNodes()) &&
        !document.getElementById('chatgpt-model-switcher')
      ) {
        mountApp(mountPoint)
        break
      }
    }
  }
}).observe(document.body, {
  subtree: true,
  childList: true
})

// Start Proxying Fetch Requests

const CONVERSATION_API_URL = '/backend-api/conversation'
const MODELS_API_URL = '/backend-api/models'

async function handleModelsApi(fetchPromise) {
  return fetchPromise.then(async (response) => {
    if (response.ok) {
      const data = await response.clone().json()
      models.update(data.models)
    }
    return response
  })
}

window.fetch = new Proxy(window.fetch, {
  apply: async function (target, that, args) {
    let resource = args[0]
    let options = args[1]

    if (state.isEnabled && resource.endsWith(CONVERSATION_API_URL) && options.method === 'POST') {
      const requestBody = JSON.parse(options.body)
      requestBody.model = state.selectedModelSlug

      options = { ...options, body: JSON.stringify(requestBody) }
      args[0] = resource
      args[1] = options
    }

    const fetchPromise = Reflect.apply(target, that, args)

    if (resource.includes(MODELS_API_URL) && options.method === 'GET') {
      return handleModelsApi(fetchPromise)
    }

    return fetchPromise
  }
})
