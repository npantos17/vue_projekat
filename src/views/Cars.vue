<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <CarList />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import CarList from '@/components/CarList.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Cars',
    
    components: {
      Header,
      CarList
    },

    data() {
        return {
            subtitle: '',
        }
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
         'fetchCars'
       ])
    },

    mounted() {
        // this.subtitle = this.$route.params.name;
        // this.depID = this.$route.params.id;

        this.fetchCars();
        
    },

    
  }
</script>

<style scoped>

</style>
