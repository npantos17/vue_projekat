<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="cars.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <b-table
      id="image-table"
      hover
      fixed
      :items="cars"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
      
    >
      <template #cell(isHighlight)="data">
        <b-icon v-if="data.value" icon="check-square" variant="success" scale="2"></b-icon>
        <b-icon v-else icon="x-circle" variant="danger" scale="2"></b-icon>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="cars.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <b-button v-if="token" v-on:click="goToAddCar()">Create listing</b-button>
  </div>
  <!-- <div>
    <div class="center " v-for="car in cars"
         :key="car.id"
          >
      <b-card no-body class="overflow-hidden " style="max-width: 540px; height: 350px">
        <b-row no-gutters>
          <a :href="`/car/${car.id}`" class="stretched-link"></a>
          <b-col md="6">
            <b-card-body :title="car.brand">
              <b-card-text>
                {{ car.model }}
              </b-card-text>
              <b-card-text>
                {{ car.price }} price
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <div v-if="token">
        <b-button @click="addToCart(product)">Add to cart</b-button>
      </div>
      
      <br>
    </div>
  </div> -->
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'CarList',

    data() {
      return {
        fields: ['id', 'sellerId', 'model', 'brand', 'year', 'price',{ key: 'id', tdClass: 'align-middle' }],
        // cars: [],
        currentPage: 1,
        perPage: 10
      }
    },

    computed: {
      ...mapState([
        'cars',
        'token'
      ]),
      filteredCars: function (){
        let sb = []
        console.log()
        return this.cars.filter(book => book.SellerId == this.$route.params.id);

      }
    },

    watch: {
      currentPage(nVal, oVal) {
        this.cars.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
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
        'fetchCars'
      ]),

      rowClicked(record, index) {
        this.$router.push({ name: 'SingleCarView', params: { id: record.id} });
      },
      goToAddCar(){
        this.$router.push({ name: 'AddCar', params: { id: this.$route.params.id} });
      }

    //   rowClicked(record, index) {
    //     this.$router.push({ name: 'Single', params: { id: record.objectID } });
    //   }
    },
    mounted() {
        this.fetchCars();     
        this.cars.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
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