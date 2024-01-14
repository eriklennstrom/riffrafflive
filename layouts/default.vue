<template>
  <div class="min-h-screen">
    <div class="frame text-gray-900 mt-3 md:mt-5 ml-3 md:ml-16 mr-3 md:mr-5">
      <nav class="text-lg px-6 py-6">
        <div
          class="container mx-auto md:mt-28 md:mb-24 md:flex items-center justify-between"
        >
          <div class="md:absolute md:right-14 flex justify-center">
            <NuxtLink to="/">
              <img
                src="/images/logo.webp"
                alt="Ward Hayden & The Outliers (US) - press photo"
                class="w-28"
              />
            </NuxtLink>
          </div>
          <div class="mt-10 md:mt-0">
            <ul class="flex space-x-8 text-3xl text-red-400 font-bold">
              <li><NuxtLink to="/" class="hover:text-gray-900 transition">Hem</NuxtLink></li>
              <li><NuxtLink to="#events" class="hover:text-gray-900 transition">Events</NuxtLink></li>
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
  background: rgba(246, 246, 246, 1);
}
</style>
