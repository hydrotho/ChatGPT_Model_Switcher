import { readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monkey, { cdn } from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    monkey({
      entry: 'src/main.js',
      userscript: {
        name: {
          '': 'ChatGPT Model Switcher (Supports GPT-4 Mobile and All Available Models)',
          'zh-CN': 'ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）',
          'zh-TW': 'ChatGPT 模型切换器（支持 GPT-4 Mobile 及所有可用模型）'
        },
        namespace: 'https://github.com/hydrotho/ChatGPT_Model_Switcher',
        copyright: '2023, Hydrotho (https://github.com/hydrotho)',
        version: '2.1.0',
        description: {
          '': 'Use the GPT-4 Mobile model on the ChatGPT web interface. It also provides the ability to switch to other models for added flexibility. Generally, this script does not conflict with other popular ChatGPT scripts.',
          'zh-CN':
            '在 ChatGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。',
          'zh-TW':
            '在 ChatGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。'
        },
        icon: (() => {
          const image = readFileSync(
            fileURLToPath(new URL('./src/assets/icon.png', import.meta.url))
          )
          return `data:image/png;base64,${image.toString('base64')}`
        })(),
        grant: ['none'],
        author: 'Hydrotho',
        match: ['http*://chat.openai.com/*'],
        updateURL:
          'https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/dist/chatgpt-model-switcher.user.js',
        downloadURL:
          'https://raw.githubusercontent.com/hydrotho/ChatGPT_Model_Switcher/main/dist/chatgpt-model-switcher.user.js',
        supportURL: 'https://github.com/hydrotho/ChatGPT_Model_Switcher/issues',
        license: 'MIT'
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
