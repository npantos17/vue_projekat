<template>
  <div class="d-flex justify-content-center">
    <div class="row text-center">
      <b-card
          :title="car.brand"
          
          tag="article"
          style="max-width: 300rem;"
          class="mb-2"
      >
        <h4>{{car.model}}</h4>
        <h4>Price: {{car.price}}</h4>
        <b-card-text>
          <p id="year">Creation date: {{car.createdAt}}</p>
          <p>Year: {{car.year}}</p>
        </b-card-text>
        <b-button v-on:click="goToEdit()" pill>Update</b-button>
        <!-- <b-button v-on:click="deleteCar" pill>Delete</b-button> -->
      </b-card>
    </div>
  </div>

</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";

export default {
  name: "SingleCar",


  props: {
    car: Object
  },

  computed: {
    ...mapState([
      'carInfo',
      'loggedUserId'
    ])
  },


  methods: {
    ...mapMutations([
        "setCarInfo",
        
    ]),
    ...mapActions([
         'deleteCar'
       ]),
    goToEdit(record, index) {

      
        this.setCarInfo({
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