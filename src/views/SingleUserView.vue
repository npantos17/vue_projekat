<template>
  <div>
        <SingleUser v-if="user" :seller="user" />
  </div>
</template>

<script>
import SingleUser from "@/components/SingleUser";
import {mapActions, mapState} from "vuex";
export default {
  name: "SingleUserView",
  components: {
    SingleUser
  },
  // data(){
  //   return {
  //   }
  // },

  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'fetchUserByID'
    ])
  },
  mounted() {
    this.fetchUserByID(this.$route.params.id)
  }
}
</script>

<style scoped>
</style>