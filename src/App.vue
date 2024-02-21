<script setup>
import { computed, onMounted, ref } from 'vue'
import { Popover, PopoverButton, PopoverPanel, Switch } from '@headlessui/vue'

import DividerItem from '@/components/DividerItem.vue'
import ModelItem from '@/components/ModelItem.vue'

import ChevronDownIcon from '@/components/icons/IconChevronDown.vue'

import { models } from '@/stores/models'
import { state } from '@/stores/state'

const anchorPopoverPanel = ref()
const stylePopoverPanel = ref()

const groupedModels = computed(() => {
  return [
    models.all.filter(
      (model) => model.tags.includes('gpt3.5') && !model.tags.includes('unofficial')
    ),
    models.all.filter((model) => model.tags.includes('gpt4') && !model.tags.includes('unofficial')),
    models.all.filter((model) => model.tags.includes('unofficial'))
  ].filter((group) => group.length > 0)
})

const selectModel = (slug) => {
  const isOldGpt4 = state.selectedModelSlug.startsWith('gpt-4')
  const isNewGpt4 = slug.startsWith('gpt-4')

  state.selectedModelSlug = slug

  if (!isOldGpt4 && isNewGpt4) {
    window.location.href = 'https://chat.openai.com/?model=gpt-4'
  }
}

onMounted(async () => {
  const rect = anchorPopoverPanel.value.getBoundingClientRect()
  stylePopoverPanel.value = {
    position: 'fixed',
    right: `${document.documentElement.clientWidth - rect.right}px`,
    top: `${rect.bottom}px`
  }
})
</script>

<template>
  <Switch
    v-model="state.isEnabled"
    :class="state.isEnabled ? 'bg-green-600' : 'bg-gray-200'"
    class="cursor-pointer relative shrink-0 rounded-full h-[20px] w-[32px]"
  >
    <span
      :style="state.isEnabled ? 'transform: translateX(14px)' : 'transform: translateX(0.125rem)'"
      class="flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)] h-[16px] w-[16px]"
    ></span>
  </Switch>
  <Popover class="relative">
    <PopoverButton
      class="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-token-main-surface-secondary"
    >
      ChatGPT Model Switcher
      <ChevronDownIcon class="text-token-text-tertiary"></ChevronDownIcon>
    </PopoverButton>

    <div ref="anchorPopoverPanel" class="absolute right-0"></div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="popover mt-2 min-w-[340px] max-w-xs overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-lg"
          :style="stylePopoverPanel"
        >
          <template v-for="(group, index) in groupedModels">
            <ModelItem
              v-for="model in group"
              :key="model.slug"
              :title="model.title"
              :description="model.description"
              :isSelected="model.slug === state.selectedModelSlug"
              @click="selectModel(model.slug)"
            />
            <DividerItem v-if="index < groupedModels.length - 1" :key="index" />
          </template>
        </PopoverPanel>
      </Transition>
    </Teleport>
  </Popover>
</template>
