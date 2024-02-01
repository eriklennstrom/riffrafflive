<template>
  <div class="min-h-screen">
    <div class="bg-layer-2 md:mt-5 md:ml-16 md:mr-5">
      <nav class="text-lg px-6 md:py-6">
        <div
          class="w-full md:right-14 flex justify-center"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <NuxtLink to="/">
            <img
              src="/images/logo-horizontal.webp"
              alt="Riff Raff Live! logo"
            />
          </NuxtLink>
        </div>

        <div
          class="container mx-auto my-4 md:my-0 md:mt-10 md:mb-14 md:flex items-center justify-between"
        >
          <div
            class="flex space-x-8 justify-center md:justify-start text-3xl text-red-400 font-bold"
          >
            <NuxtLink
              data-aos="fade-left"
              data-aos-delay="1000"
              to="/"
              class="hover:text-white transition"
              >Hem</NuxtLink
            >
            <NuxtLink
              data-aos="fade-left"
              data-aos-delay="1200"
              to="#events"
              class="hover:text-white transition"
              >Events</NuxtLink
            >
            <a
              data-aos="fade-left"
              data-aos-delay="1400"
              href="https://www.instagram.com/riff_raff_live/"
              target="_blank"
              class="hover:text-white transition"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>

            <a
              data-aos="fade-left"
              data-aos-delay="1600"
              href="https://www.facebook.com/people/RIFF-RAFF-LIVE/61552929441389/"
              target="_blank"
              class="hover:text-white transition"
              ><font-awesome-icon :icon="['fab', 'facebook-f']"
            /></a>
          </div>
        </div>
      </nav>
      <main class="container mx-auto mb-5">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
html {
  color: #e3e3e3;
}
body {
  background: #121212;
}
</style>
