<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <SellerList />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import SellerList from '@/components/SellerList.vue';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Sellers',
    
    components: {
      Header,
      SellerList
    },

    data() {
        return {
            subtitle: '',
        }
    },

    computed: {
      ...mapState([
        'sellers'
      ])
    },

    // watch: {
    //   $route() {
    //     this.subtitle = this.$route.params.name;
    //     this.depID = this.$route.params.id;

    //     this.fetchIDsByDepartment(this.depID);
    //   }
    // },

    methods: {
       ...mapActions([
         'fetchSellers'
       ])
    },

    mounted() {
        // this.subtitle = this.$route.params.name;
        // this.depID = this.$route.params.id;

        this.fetchSellers();
        
    },

    
  }
</script>

<style scoped>

</style>
