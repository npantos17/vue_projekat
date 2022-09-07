<template>
  <div class="d-flex justify-content-center">
    <div class="row text-center">
      <b-card
          :title="user.name"
          
          tag="article"
          style="max-width: 300rem;"
          class="mb-2"
      >
        <h4>Admin: {{user.admin}}</h4>
        <h4>Email: {{user.email}}</h4>
    
        <b-button v-on:click="goToEdit()" pill>Update</b-button>
        <!-- <b-button v-on:click="deleteUser" pill>Delete</b-button> -->
      </b-card>
    </div>
  </div>

</template>

<script>
import {mapActions, mapState, mapMutations} from "vuex";

export default {
  name: "SingleUser",


  props: {
    user: Object
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
        'deleteUser'
         
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