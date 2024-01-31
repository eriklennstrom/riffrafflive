<template>
  <div>
    <div id="events">
      <Transition>
        <AppHero :event="heroEvent" />
      </Transition>
      <div class="upcoming mt-10 pb-10 px-3 lg:px-0">
        <h2 class="text-2xl font-bold mb-4">Kommande event</h2>
        <EventTable :events="restOfTheEvents" />
      </div>
      <AppForm />
    </div>
  </div>
</template>
<script setup>
import events from "/events.json";
useSeoMeta({
  title: "Riff Raff Live!",
  ogTitle: "Riff Raff Live!",
  description: "Riff Raff Live events.",
  ogDescription: "Riff Raff Live events.",
  ogImage: "/images/logo.webp",
  twitterCard: "summary_large_image",
});
const heroEvent = computed(() => {
  return events.slice(0, 1)[0];
});
const restOfTheEvents = computed(() => {
  return events.slice(1);
});
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
