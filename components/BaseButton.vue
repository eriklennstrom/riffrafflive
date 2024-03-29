<script lagn="ts" setup>
const props = defineProps({
  text: String,
  internalLink: {
    type: Boolean,
    default: false,
  },
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
  disabled: Boolean,
});
</script>
<template>
  <NuxtLink
    v-if="internalLink"
    :to="link"
    class="group relative inline-flex border focus:outline-none w-auto btn uppercase text-sm"
    :class="[
      fill ? 'fill' : '',
      variant,
      disabled || link === '#' ? 'disabled' : '',
    ]"
  >
    <span
      v-bind="$attrs"
      class="px-2 py-1 inline-flex items-center justify-center self-stretch"
      :class="size === 'lg' ? 'px-3 py-2 text-lg' : ''"
    >
      {{ text }}
    </span>
  </NuxtLink>

  <a
    v-else
    :href="link"
    target="_blank"
    class="group relative inline-flex border focus:outline-none w-auto btn uppercase text-sm"
    :class="[
      fill ? 'fill' : '',
      variant,
      disabled || link === '#' ? 'disabled' : '',
    ]"
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
  @apply transition;
  &:hover:not(.disabled) {
    @apply border-gray-500;
    &.fill {
      span {
        @apply bg-gray-700 text-white;
      }
    }
    span {
      @apply -translate-y-1 -translate-x-1 bg-white text-gray-700;
    }
  }

  &.disabled {
    @apply cursor-not-allowed opacity-40 pointer-events-none;
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
  &.red {
    @apply border-red-400;
    span {
      @apply border-red-400 bg-gray-100;
    }
    &.fill {
      span {
        @apply text-white bg-red-400 border-red-400;
      }
    }
  }

  &.light {
    @apply border-white bg-transparent;
    &.fill {
      span {
        @apply text-gray-900 border-white;
      }
    }
  }
}
</style>
