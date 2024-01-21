<template>
  <div class="min-h-screen">
    <div class="frame mt-3 md:mt-5 ml-3 md:ml-16 mr-3 md:mr-5">
      <nav class="text-lg px-6 py-6">
        <div class="container mx-auto md:mt-28 md:mb-24 md:flex items-center justify-between">
          <div class="md:absolute md:right-14 flex justify-center">
            <NuxtLink to="/">
              <!-- <img -->
              <!--   src="/images/logo_a.webp" -->
              <!--   alt="Ward Hayden & The Outliers (US) - press photo" -->
              <!--   class="w-50 absolute" -->
              <!-- /> -->
              <img
                src="/images/logo2.png"
                alt="Ward Hayden & The Outliers (US) - press photo"
                class="w-36"
              />
            </NuxtLink>
          </div>
          <div class="mt-10 md:mt-0">
            <ul class="flex space-x-8 text-3xl text-red-400 font-bold">
              <li>
                <NuxtLink to="/" class="hover:text-white transition">Hem</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#events" class="hover:text-white transition">Events</NuxtLink>
              </li>
              <li>
                <a href="https://www.instagram.com/riff_raff_live/" target="_blank" class="hover:text-white transition"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
              </li>
              <li>
                <a href="https://www.facebook.com/people/RIFF-RAFF-LIVE/61552929441389/" target="_blank" class="hover:text-white transition"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
              </li>

              <!-- <li><NuxtLink to="#contact">Kontakt</NuxtLink></li> -->
            </ul>
          </div>
        </div>
      </nav>
      <main class="container mx-auto">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
.frame {
  background: rgba(255, 255, 255, 0.05);
}
</style>
