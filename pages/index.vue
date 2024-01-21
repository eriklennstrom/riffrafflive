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
    </div>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "Riff Raff Live!",
  ogTitle: "Riff Raff Live!",
  description: "Riff Raff Live events.",
  ogDescription: "Riff Raff Live events.",
  ogImage: "/images/logo.webp",
  twitterCard: "summary_large_image",
});
const events = ref([
  {
    id: 1,
    title: "Ward Hayden & The Outliers (US)",
    subtitle: "Klubb Rootsy",
    date: "1:a feb",
    location: "Gränden Käk & Bärs",
    img: "",
    body: "Oemotståndliga Ward Hayden & The Outliers gjorde en succéturné här våren 2023 och önskemålen, eller rent av kraven, att de ska komma tillbaka snart har varit många och högljudda. Så, i januari 2024 återvänder Ward Hayden och hans band! Med sin bitterljuva hybrid av traditionell country, klassisk rock 'n' roll och nutida Americana har de blivit publikfavoriter i Skandinavien. I samband med turnén släpps även Ward Hayden & The Outliers nya album. En platta där Hayden tagit ett stort kliv framåt som låtskrivare och där bandet vidgat sin musikaliska palett ytterligare. De medryckande upptempo-låtarna vi vant oss vid kompletteras nu med några storslagna ballader som tydligt visar att Ward Hayden & The Outliers vuxit till sig utan att förlora sin spontana charm.",
    ticketLink: "https://secure.tickster.com/en/e1wdtzwvpk3g0yr/products",
    published: true,
  },
  {
    id: 2,
    title: "Trapper Schoepp",
    date: "20:e mars",
    location: "Gränden Käk & Bärs",
    img: "",
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    ticketLink: "https://hej.se",
    published: true,
  },
  {
    id: 3,
    title: "Jesper Lindell",
    date: "11:e april",
    location: "Gränden Käk & Bärs",
    img: "",
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    ticketLink: "#",
    published: true,
  },
  {
    id: 4,
    title: "Pink Stones",
    date: "24:e april",
    location: "Plats: TBA",
    img: "",
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    ticketLink: "#",
    published: true,
  },
  {
    id: 5,
    title: "Our Man In The Field",
    date: "2 maj",
    location: "Plats: TBA",
    img: "",
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    ticketLink: "#",
    published: true,
  },
]);
const heroEvent = computed(() => {
  return events.value.slice(0, 1)[0];
});
const restOfTheEvents = computed(() => {
  return events.value.slice(1);
});
</script>
<style>
html {
  color: #e3e3e3;
}
body {
  background: #121212;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
