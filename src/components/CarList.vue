<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="cars.length"
      :per-page="perPage"
      aria-controls="cars-table"
    ></b-pagination>
    <b-table
      id="cars-table"
      hover
      fixed
      :items="items"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      
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
      aria-controls="cars-table"
    ></b-pagination>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'CarList',

    data() {
      return {
        fields: ['id', 'sellerId', 'model', 'brand', 'year', 'price',{ key: 'id', tdClass: 'align-middle' }],
        items: [],
        currentPage: 1,
        perPage: 10
      }
    },

    computed: {
      ...mapState([
        'cars'
      ])
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

    mounted() {
      this.cars.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
        this.getItem(id).then( obj => this.items.push(obj) );
      });
    },

    methods: {
      ...mapActions([
        'getItem'
      ]),

    //   rowClicked(record, index) {
    //     this.$router.push({ name: 'Single', params: { id: record.objectID } });
    //   }
    }
  }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>