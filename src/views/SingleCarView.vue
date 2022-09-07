<template>
  <div>
        <SingleCar v-if="car" :car="car" />
  </div>
</template>

<script>
import SingleCar from "@/components/SingleCar";
import {mapActions, mapState} from "vuex";
export default {
  name: "SingleCarView",
  components: {
    SingleCar
  },
  // data(){
  //   return {
  //   }
  // },

  computed: {
    ...mapState([
      'car'
    ])
  },
  methods: {
    ...mapActions([
      'fetchCarByID'
    ])
  },
  mounted() {
    this.fetchCarByID(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>