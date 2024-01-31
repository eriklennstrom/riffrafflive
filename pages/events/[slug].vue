<template>
  <div
    class="bg-red-400 text-white flex flex-col md:flex-row justify-between max-h-500"
  >
    <img
      src="/images/ward.webp"
      alt="Ward Hayden & The Outliers (US) - press photo"
      class="object-cover p-2 w-full md:w-auto"
    />
  </div>
  <div class="py-6">
    <h1 class="text-3xl md:text-5xl">{{ event.title }}</h1>
  </div>
  <div class="grid gap-4 grid-cols-5">
    <article class="p-5 col-span-3 bg-layer-2">
      <p
        class="whitespace-pre-line first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left"
      >
        {{ event.body }}
      </p>
    </article>
    <aside class="col-span-2 p-5">
      <h2 class="text-2xl">Information & Köp</h2>
      <ul>
        <li>
          <p>{{ event.date }}</p>
        </li>
        <li>
          <p>{{ event.location }}</p>
        </li>
      </ul>
      <div id="embed-iframe"></div>
      <BaseButton text="Köp biljett" :fill="true" :link="event.ticketLink" />
    </aside>
  </div>
</template>
<script setup>
useHead(
  {
    script: [
      {
        src: "https://open.spotify.com/embed/iframe-api/v1",
        type: "text/javascript",
        async: true,
        onload(el) {
          console.log(el);
        },
      },
    ],
  },
  { mode: "client" },
);
import events from "/events.json";
const route = useRoute();
const event = events.find((ev) => ev.slug === route.params.slug);
//
// onSpotifyIframeApiReady = (IFrameAPI) => {
//   console.log("wtf");
//   const element = document.getElementById("embed-iframe");
//   const options = {
//     uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
//   };
//   const callback = (EmbedController) => {};
//   IFrameAPI.createController(element, options, callback);
// };
</script>
