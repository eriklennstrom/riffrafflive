<script lagn="ts" setup>
const props = defineProps({
  text: String,
  size: {
    type: String,
    default: "md",
  },
  variant: {
    type: String,
    default: "dark",
  },
  fill: {
    type: Boolean,
    default: false,
  },
  link: String,
  disabled: Boolean
});
</script>
<template>
  <a
    :href="link"
    target="_blank"
    class="group relative inline-flex border focus:outline-none w-full sm:w-auto btn uppercase text-sm"
    :class="fill ? 'fill' : '', variant === 'light' ? 'light' : 'dark', disabled ? 'disabled' : ''"
  >
    <span
      v-bind="$attrs"
      class="px-2 py-1 inline-flex items-center justify-center self-stretch"
      :class="size === 'lg' ? 'px-3 py-2 text-lg' : ''"
    >
      {{ text }}
    </span>
  </a>
</template>
<style lang="postcss" scoped>
.btn {
  .disabled {
    @apply cursor-not-allowed opacity-40;
}
  span {
    @apply transform transition-transform border;
  }
  &.dark {
    @apply border-gray-700;
    span {
      @apply border-gray-700 bg-gray-100;
    }
    &.fill {
      span {
        @apply text-white bg-gray-700 border-gray-700;
      }
    }
  }
  &.light {
    @apply border-white;
    &.fill {
      span {
        @apply text-gray-900 bg-white border-white;
      }
    }
  }
  &:hover {
    span {
      @apply -translate-y-1 -translate-x-1;
    }
  }
}
</style>
