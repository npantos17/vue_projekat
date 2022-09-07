<template>
  <div>
        <SingleSeller v-if="seller" :seller="seller" />
  </div>
</template>

<script>
import SingleSeller from "@/components/SingleSeller";
import {mapActions, mapState} from "vuex";
export default {
  name: "SingleSellerView",
  components: {
    SingleSeller
  },
  // data(){
  //   return {
  //   }
  // },

  computed: {
    ...mapState([
      'seller'
    ])
  },
  methods: {
    ...mapActions([
      'fetchSellerByID'
    ])
  },
  mounted() {
    this.fetchSellerByID(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>