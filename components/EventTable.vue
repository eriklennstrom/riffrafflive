<template>
  <table class="table-fixed w-full">
    <tbody>
      <tr
        class="py-6"
        v-for="event in events"
        :class="event.id % 2 !== 0 ? '' : 'bg-gray-200'"
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
            <!-- <BaseButton text="Mer info" disabled /> -->
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
const props = defineProps(["events"]);
</script>
