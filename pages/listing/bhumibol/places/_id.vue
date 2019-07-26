<template>
  <div class="container">
    <a @click="prevPage()" class="text-gray-500">← Back</a>
    <ListingCard
      :name="item.name"
      :excerpt="item.excerpt"
      :pic="item.pic"
      :outdoorScoreRequired="item.outdoorScoreRequired"
      :popularity="item.popularity"
    />
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
      id: this.$route.params.id
    }
  },
  computed: {
    item() {
      return listing.listing.find(l => l.id == this.id)
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
