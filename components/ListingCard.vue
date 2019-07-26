<template>
  <div class="max-w-sm w-full lg:max-w-full lg:flex my-5 mx-auto">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-gray-200"
      style="background-image: url('/img/card-left.jpg')"
      :title="name"
    ></div>
    <div
      class="flex-grow border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ name }}</div>
        <p class="text-gray-700 text-base">{{ excerpt }}</p>
      </div>
      <span class="mr-auto text-blue-600 text-sm font-light">Need good weather?</span>
      <div class="bg-gray-200 h-3 w-full rounded-full my-1">
        <div
          class="bg-blue-600 h-3 rounded-full"
          :style="{'width': `${outdoorScoreRequired / 10 * 100}%`}"
        ></div>
      </div>
      <span class="mr-auto text-red-600 text-sm font-light">Popularity</span>
      <div class="bg-gray-200 h-3 w-full rounded-full my-1">
        <div class="bg-red-600 h-3 rounded-full" :style="{'width': `${popularity / 10 * 100}%`}"></div>
      </div>
      <nuxt-link class="btn btn-blue" v-if="id" :to="`/listing/bhumibol/places/${id}`">👀</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: '(name)'
    },
    excerpt: {
      type: String,
      default: '(excerpt)'
    },
    pic: {
      type: String,
      default: '(pic)'
    },
    outdoorScoreRequired: {
      type: Number,
      default: 0
    },
    popularity: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.btn {
  @apply w-1/4 my-3 mx-auto font-bold py-2 px-2 rounded-full text-center;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
