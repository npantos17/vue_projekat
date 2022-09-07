<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <OrderList />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import OrderList from '@/components/OrderList.vue';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Orders',
    
    components: {
      Header,
      OrderList
    },

    data() {
        return {
            subtitle: '',
        }
    },

    computed: {
      ...mapState([
        'orders'
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
         'fetchOrders'
       ])
    },

    mounted() {
        // this.subtitle = this.$route.params.name;
        // this.depID = this.$route.params.id;

        this.fetchOrders();
        
    },

    
  }
</script>

<style scoped>

</style>
