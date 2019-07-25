<template>
  <div class="relative w-2/3 mx-auto my-5">
    <select
      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-xl font-semibold text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-state"
    >
      <option>Bhumibol Dam</option>
      <option>Sirikit Dam</option>
      <option>Vajiralongkorn Dam</option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
