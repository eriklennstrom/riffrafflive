<template>
  <div class="isolate px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
        Kontakta oss
      </h2>
      <p class="mt-2 text-lg leading-8">
        Har du några frågor om våra event, om Riff Raff Live! eller är ett band
        som vill spela? Tveka inte att kontakta oss!
      </p>
    </div>
    <form action="https://formspree.io/f/xnqejjdd" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6"
            >Förnamn</label
          >
          <div class="mt-2.5">
            <input
              required
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6"
            >Efternamn</label
          >
          <div class="mt-2.5">
            <input
              required
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              required
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="block text-sm font-semibold leading-6">Telefon nummer</label>
          <div class="relative mt-2.5">
            <input
              required
              type="tel"
              name="phone-number"
              id="phone-number"
              autocomplete="tel"
              class="block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6">Meddelande</label>
          <div class="mt-2.5">
            <textarea
              required
              name="message"
              id="message"
              rows="4"
              class="block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          class="group relative inline-flex border focus:outline-none w-auto btn uppercase text-sm fill dark"
        >
          <span class=" inline-flex items-center justify-center self-stretch px-3 py-2 text-lg">
            Skicka
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<style>
.form-bg {
  background: rgba(255,255,255,0.07);
}
</style>
