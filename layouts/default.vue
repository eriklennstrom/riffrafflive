<template>
  <div class="min-h-screen">
    <div class="bg-layer-2 mt-3 md:mt-5 ml-3 md:ml-16 mr-3 md:mr-5">
      <nav class="text-lg px-6 py-6">
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
          class="container mx-auto md:mt-10 md:mb-14 md:flex items-center justify-between"
        >
          <div class="mt-10 md:mt-0">
            <ul class="flex space-x-8 text-3xl text-red-400 font-bold">
              <li data-aos="fade-left" data-aos-delay="1000">
                <NuxtLink to="/" class="hover:text-white transition"
                  >Hem</NuxtLink
                >
              </li>
              <li data-aos="fade-left" data-aos-delay="1200">
                <NuxtLink to="#events" class="hover:text-white transition"
                  >Events</NuxtLink
                >
              </li>
              <li data-aos="fade-left" data-aos-delay="1400">
                <a
                  href="https://www.instagram.com/riff_raff_live/"
                  target="_blank"
                  class="hover:text-white transition"
                  ><font-awesome-icon :icon="['fab', 'instagram']"
                /></a>
              </li>
              <li data-aos="fade-left" data-aos-delay="1600">
                <a
                  href="https://www.facebook.com/people/RIFF-RAFF-LIVE/61552929441389/"
                  target="_blank"
                  class="hover:text-white transition"
                  ><font-awesome-icon :icon="['fab', 'facebook-f']"
                /></a>
              </li>
            </ul>
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
