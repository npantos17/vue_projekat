<template>
  <div class="d-flex justify-content-center">
    <div class="row text-center">
      <b-card
          :title="seller.name"
          
          tag="article"
          style="max-width: 300rem;"
          class="mb-2"
      >
        <h4>{{seller.email}}</h4>
        <h4>Adresa: {{seller.address}}</h4>
        <h4>Rating: {{seller.rating}}</h4>
        <!-- <b-card-text>
          <p id="year">Creation date: {{car.createdAt}}</p>
          <p>Year: {{car.year}}</p>
        </b-card-text> -->
        <b-button v-on:click="goToEdit()" pill>Update</b-button>
      </b-card>
    </div>
  </div>

</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";

export default {
  name: "SingleSeller",


  props: {
    seller: Object
  },

  computed: {
    ...mapState([
      'sellerInfo',
      'loggedUserId'
    ])
  },


  methods: {
    ...mapMutations([
        "setSellerInfo",
        
    ]),
    ...mapActions([
         
       ]),
    goToEdit(record, index) {

      
        this.setSellerInfo({
          id: this.car.id,
          SellerId: this.car.SellerId,
          brand: this.car.brand,
          model: this.car.model,
          year: this.car.year,
          price: this.car.price,
          OrderId: this.car.OrderId
          
        })
        this.$router.push({ name: 'UpdateCar'});
      
      
    },
    // deleteCar(){
    //     this.deleteCar(this.car.id)

    // }
  }

}

</script>

<style scoped>

</style>