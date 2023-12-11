<template>
  <div class="">
    <AppHero />
    <div class="upcoming mt-10">
      <h2 class="text-2xl font-bold">Kommande event</h2>
      <div class="grid grid-cols-3 gap-10 mt-6">
        <EventCard v-for="index in 3" :key="index" />
      </div>
      <EventTable class="mt-4" v-for="index in 10" :key="index + 'asd'" :odd="index % 2 !== 0" />
    </div>
  </div>
</template>
