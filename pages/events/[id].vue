<template>
  <div
    class="bg-red-400 text-white flex flex-col md:flex-row justify-between max-h-500"
  >
    <img
      :src="'/images/' + event.img"
      :alt="event.title + ' - press photo'"
      class="object-cover p-2 w-full object-top"
    />
  </div>
  <div class="py-6 px-4">
    <h1 class="text-3xl md:text-5xl">{{ event.title }}</h1>
  </div>
  <div class="grid gap-4 md:grid-cols-5">
    <article class="col-span-3">
      <div class="p-5 bg-layer-2">
        <p
          class="whitespace-pre-line first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
        >
          {{ event.body }}
        </p>
      </div>
      <iframe
        class="mt-3 mb-5"
        style="border-radius: 0px"
        :src="
          'https://open.spotify.com/embed/artist/' +
          event.spotify +
          '?utm_source=generator&theme=0'
        "
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </article>
    <aside class="col-span-2 p-5 order-first md:order-none">
      <h2 class="text-xl font-bold">Information & Köp</h2>
      <ul class="mb-5">
        <li class="py-2">
          <p>{{ event.date }}</p>
        </li>
        <li>
          <p>{{ event.location }}</p>
        </li>
      </ul>
      <BaseButton
        class="w-full"
        size="lg"
        text="Köp biljett"
        :fill="true"
        variant="red"
        :link="event.ticketLink"
      />
    </aside>
  </div>
</template>
<script setup>
import events from "/events.json";
const route = useRoute();
const event = events.find((ev) => ev.slug === route.params.id);
useSeoMeta({
  title: event.title + " - Riff Raff Live!",
  ogTitle: event.title + " - Riff Raff Live!",
  description: event.body,
  ogDescription: event.body,
  ogImage: "/images/" + event.img,
  twitterCard: "/images/" + event.img,
});
</script>
