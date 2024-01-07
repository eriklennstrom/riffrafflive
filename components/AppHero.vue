<template>
  <div
    class="hero bg-red-400 text-white flex flex-col md:flex-row justify-between"
  >
    <div class="md:w-1/2 px-8 py-6 flex flex-col content-between">
      <div class="titles flex flex-col">
        <small class="uppercase text-2xl mb-2">{{
          props.event.subtitle ? props.event.subtitle : "Kommande Event"
        }}</small>
        <h1 class="text-5xl">
          {{ props.event.title }}
        </h1>
      </div>
      <div class="mt-4 mb-6 text-sm">
        <time class="text-sm">{{ props.event.date }}</time>
        <small class="text-sm px-2">|</small>
        <small class="text-sm">{{ props.event.location }}</small>
      </div>
      <div class="buttons space-x-2 mt-10">
        <BaseButton
          text="Biljetter"
          size="lg"
          :fill="true"
          variant="light"
          :link="props.event.ticketLink"
        />
        <!-- <BaseButton -->
        <!--   text="Mer info" -->
        <!--   size="lg" -->
        <!--   variant="light" -->
        <!--   class="bg-red-400" -->
        <!-- /> -->
      </div>
    </div>
    <div class="md:w-1/2">
      <img
        src="/images/ward.webp"
        alt="Ward Hayden & The Outliers (US) - press photo"
        class="py-8 ml-auto px-8 w-full md:w-auto"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["event"]);
</script>
