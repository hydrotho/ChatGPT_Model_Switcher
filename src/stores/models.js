import { reactive } from 'vue'

const extraModels = [
  {
    slug: 'text-davinci-002-render-sha-mobile',
    title: 'GPT-3.5 (Mobile)',
    description: 'An experimental model that does not guarantee usability',
    tags: ['gpt3.5', 'mobile', 'unofficial']
  },
  {
    slug: 'gpt-4-mobile',
    title: 'GPT-4 (Mobile)',
    description: 'An experimental model that does not guarantee usability',
    tags: ['gpt4', 'mobile', 'unofficial']
  }
]

export const models = reactive({
  all: [],
  update(newModels) {
    this.all = newModels.concat(
      extraModels.filter(
        (model) => newModels.some((m) => m.tags.includes('gpt4')) || !model.tags.includes('gpt4')
      )
    )
  }
})
