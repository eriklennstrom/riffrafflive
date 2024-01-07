<template>
  <div class="min-h-screen">
    <div class="frame text-gray-900 mt-3 md:mt-5 ml-16 mr-3 md:mr-5">
      <nav class="text-lg px-6 py-6">
        <div class="container mx-auto mt-28 mb-24 flex items-center justify-between">
          <div class="absolute right-14">
          	<NuxtLink to="/">
              <img
                src="/images/logo.webp"
                alt="Ward Hayden & The Outliers (US) - press photo"
                class="w-28"
              />
            </NuxtLink>
          </div>
          <div>
            <ul class="flex space-x-8 text-3xl text-red-400">
              <li><NuxtLink to="/">Hem</NuxtLink></li>
              <li><NuxtLink to="#events">Events</NuxtLink></li>
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
