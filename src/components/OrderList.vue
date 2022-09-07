<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="orders.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <b-table
      id="image-table"
      hover
      fixed
      :items="orders"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
      
    >
      <!-- <template #cell(isHighlight)="data">
        <b-icon v-if="data.value" icon="check-square" variant="success" scale="2"></b-icon>
        <b-icon v-else icon="x-circle" variant="danger" scale="2"></b-icon>
      </template> -->
      <template v-slot:cell(delete)="data">
					<span><b-btn class="btn-danger" @click="deleteOrder(data.item.id)">Delete</b-btn></span>
				</template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="orders.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <b-button v-if="token" v-on:click="goToAddOrder()">Add seller</b-button>
  </div>
  
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'SellerList',

    data() {
      return {
        fields: ['id', 'CarId', 'SellerId', 'buyerID', 'date', 'delete', { key: 'id', tdClass: 'align-middle' }],
        currentPage: 1,
        perPage: 10
      }
    },

    computed: {
      ...mapState([
        'orders',
        'token'
      ]),
     
    },

    watch: {
      currentPage(nVal, oVal) {
        this.orders.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
          this.getItem(id).then( obj => this.items.push(obj) );
        });
      },

      imageIDs(nVal, oVal) {
        this.currentPage = 1;
        this.items = [];

        nVal.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
          this.getItem(id).then( obj => this.items.push(obj) );
        });
      }
    },

    // mounted() {
    //   this.cars.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
    //     this.getItem(id).then( obj => this.items.push(obj) );
    //   });
    // },

    methods: {
      ...mapActions([
        // 'getItem'
        'fetchOrders',
        'deleteOrder'
      ]),

      rowClicked(record, index) {
        this.$router.push({ name: 'SingleOrderView', params: { id: record.id} });
      },
      goToAddSeller(){
        this.$router.push({ name: 'AddOrder', params: { id: this.$route.params.id} });
      },
    //   deleteSeller(id){
    //     this.deleteSeller(id)
    //   }


    //   rowClicked(record, index) {
    //     this.$router.push({ name: 'Single', params: { id: record.objectID } });
    //   }
    },
    mounted() {
        this.fetchOrders();     
        this.orders.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
        this.getItem(id).then( obj => this.items.push(obj) );
      });
    },
  }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>