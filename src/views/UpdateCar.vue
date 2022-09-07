<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="Update Car"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Brand:" label-for="brand">
        <b-form-input id="brand" v-model="form.brand"  placeholder="Enter brand" required></b-form-input>
      </b-form-group>

      <b-form-group label="Model:" label-for="model">
        <b-form-input id="model" v-model="form.model"  placeholder="Enter model" required></b-form-input>
      </b-form-group>

      <b-form-group label="Year:" label-for="year">
        <b-form-input id="year" v-model="form.year"  placeholder="Enter year" required></b-form-input>
      </b-form-group>

      <b-form-group label="Price:" label-for="price">
        <b-form-input id="price" v-model="form.price" placeholder="Enter price" required></b-form-input>
      </b-form-group>


      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
  <p v-else>You must be signed in to update your book</p>
</template>

<script>

import Header from '@/components/Header.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'UpdateCar',

  components: {
    Header
  },

  props: {
    userObj: Object
  },

  data() {
    return {
      form: {
        brand: '',
        model: '',
        year: '',
        price: '',
        // SellerId: '',
        OrderId:0
      }
    }
  },


  computed: {
    ...mapState([
      'token',
      'carInfo',
    ]),
    
  },

  mounted() {
    this.form.id = this.carInfo.id,
    this.form.brand = this.carInfo.brand,
    this.form.model= this.carInfo.model,
    this.form.year= this.carInfo.year,
    this.form.price= this.carInfo.price,
    this.form.OrderId= this.carInfo.OrderId
    

  },

  methods: {
    ...mapActions([
      'updateCar'
    ]),

    onSubmit(e) {
      e.preventDefault();
      
        this.updateCar(this.form)
        // this.$socket.emit('updateCar', { body: this.form, token: this.token });
        this.$router.back();
      
    }
  }
}
</script>

<style scoped>

</style>
