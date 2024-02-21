<script setup>
import CircleIcon from '@/components/icons/IconCircle.vue'
import CircleCheckIcon from '@/components/icons/IconCircleCheck.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3"
    :class="{ '!opacity-100': isSelected }"
  >
    <div class="flex grow items-center justify-between gap-2">
      <div>
        <div class="flex items-center gap-3">
          <div>
            {{ title }}
            <div class="text-token-text-tertiary">{{ description }}</div>
          </div>
        </div>
      </div>
      <component
        :is="isSelected ? CircleCheckIcon : CircleIcon"
        class="icon-md flex-shrink-0"
      ></component>
    </div>
  </div>
</template>
