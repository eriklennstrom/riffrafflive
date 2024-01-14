<template>
  <div>
    <div class="md:hidden row flex flex-col md:flex-row align-center justify-between w-full py-4 px-3" v-for="event in events" :class="event.id % 2 !== 0 ? '' : 'bg-gray-200'">
      <h3 class="text-lg font-bold">{{ event.title }}</h3>
      <div>
        <time class="text-sm">{{ event.date }}</time>
        <span class="px-1">|</span>
        <small class="text-sm">{{ event.location }}</small>
      </div>
      <div class="buttons flex space-x-2 float-right pr-4 mt-3">
        <BaseButton text="Biljetter" :fill="true" :link="event.ticketLink" />
        <BaseButton text="Mer info" disabled />
      </div>
    </div>
  <table class="hidden md:table table-auto xl:table-fixed w-full">
    <tbody>
      <tr
        class="py-6"
        v-for="(event, index) in events"
        :class="index % 2 !== 0 ? '' : 'bg-gray-200'"
          data-aos="fade-up" :data-aos-delay="(index + 1) * 200"
      >
        <td class="py-8 pl-4 w-2/6">
          <h3 class="text-lg font-bold">{{ event.title }}</h3>
        </td>
        <td class="w-2/12">
          <time class="text-sm">{{ event.date }}</time>
        </td>
        <td class="w-1/6">
          <small class="text-sm">{{ event.location }}</small>
        </td>
        <td class="w-1/4">
          <div class="buttons flex space-x-2 float-right pr-4">
            <BaseButton text="Biljetter" :fill="true" :link="event.ticketLink" />
            <BaseButton text="Mer info" disabled />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<script setup>
const props = defineProps(["events"]);
</script>
