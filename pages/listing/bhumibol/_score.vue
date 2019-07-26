<template>
  <div class="container">
    <a @click="prevPage()" class="text-gray-500">← Back</a>
    <div v-for="item in listing" :key="item.id">
      <ListingCard
        :id="item.id"
        :name="item.name"
        :excerpt="item.excerpt"
        :pic="item.pic"
        :outdoorScoreRequired="item.outdoorScoreRequired"
        :popularity="item.popularity"
      />
    </div>
    <div class="w-full h-1 rounded-full bg-gray-200 my-4"></div>
    <span class="text-gray-600">Weather conditions unsuitable for the following attractions & activities</span>
    <div v-for="item in listingExcluded" :key="item.id" class="opacity-50">
      <ListingCard
        :id="item.id"
        :name="item.name"
        :excerpt="item.excerpt"
        :pic="item.pic"
        :outdoorScoreRequired="item.outdoorScoreRequired"
        :popularity="item.popularity"
      />
    </div>
  </div>
</template>

<script>
import ListingCard from '~/components/ListingCard.vue'
import listing from '~/assets/bhumibol.en.json'

export default {
  components: {
    ListingCard
  },
  data() {
    return {
      score: this.$route.params.score
    }
  },
  computed: {
    listing() {
      return listing.listing.filter(l => l.outdoorScoreRequired <= this.score)
    },
    listingExcluded() {
      return listing.listing.filter(l => l.outdoorScoreRequired > this.score)
    }
  },
  methods: {
    prevPage() {
      return this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.container {
  @apply max-w-xl p-5 mx-auto;
}
</style>
