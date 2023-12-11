<template>
  <div class="row flex flex-row align-center justify-between bg-red-100 w-full py-4 mb-4">
      <h3 class="text-3xl font-bold">Julianna Riofino</h3>
        {{ props.odd }}
        <time class="text-sm">1 dec</time>
        <small class="text-sm">Gränden</small>
      <div class="buttons space-x-2">
        <a href="#" class="uppercase px-2 py-1 text-white bg-gray-700 border-4 border-gray-700 text-sm">
          Biljetter
        </a>
        <a href="#" class="uppercase px-2 py-1 border-4 border-gray-700 text-sm">
          Mer info 
        </a>
      </div>
    </div>
</template>
<script setup>
  const props = defineProps(['odd'])
</script>
