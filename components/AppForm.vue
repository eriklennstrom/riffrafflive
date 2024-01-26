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
    <form @submit.prevent="formSubmit" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6"
            >Förnamn</label
          >
          <div class="mt-2.5">
            <input
              required
              v-model="formData.firstName"
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
              v-model="formData.surName"
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
              v-model="formData.email"
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
              v-model="formData.tel"
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
              v-model="formData.message"
              name="message"
              id="message"
              rows="4"
              class="block form-bg w-full border-0 px-3.5 py-2 ring-0 focus:ring-0 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div class="rounded-md bg-red-50 p-4 mt-5" v-if="showError">
        <div class="flex">
          <div class="ml-3">
            <p class="text-sm font-medium text-green-800">Något gick fel, vänligen försök igen.</p>
          </div>
        </div>
      </div>
      <div class="rounded-md bg-green-50 p-4 mt-5" v-if="showSuccess">
        <div class="flex">
          <div class="ml-3">
            <p class="text-sm font-medium text-green-800">Tack för ditt meddelande, vi återkommer så snart vi kan!</p>
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
<script setup>
const showSuccess = ref(false)
const showError = ref(false)
const formData = ref({
  firstName: '', 
  surName: '',
  tel: '',
  email: '',
  message: ''
})
async function formSubmit () {
  showError.value = false
  showError.value = false
  const payload = new FormData();
  payload.append('firstName', formData.value.firstName)
  payload.append('surName', formData.value.surName)
  payload.append('tel', formData.value.tel)
  payload.append('email', formData.value.email)
  payload.append('message', formData.value.message)
  await $fetch('https://usebasin.com/f/a23d5bda0a91', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
    },
    body: payload,
  }).then(() => {
    showSuccess.value = true
  }).catch(() => {
    showError.value = true
  })
}
</script>
<style>
.form-bg {
  background: rgba(255,255,255,0.07);
}
</style>
