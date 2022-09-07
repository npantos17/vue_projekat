<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="Update Car"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" v-model="form.name"  placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Email:" label-for="email">
        <b-form-input id="email" v-model="form.email"  placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Address:" label-for="address">
        <b-form-input id="address" v-model="form.address"  placeholder="Enter address" required></b-form-input>
      </b-form-group>

      <b-form-group label="Rating:" label-for="rating">
        <b-form-input id="rating" v-model="form.rating" placeholder="Enter rating" required></b-form-input>
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
  name: 'UpdateSeller',

  components: {
    Header
  },

  props: {
    userObj: Object
  },

  data() {
    return {
      form: {
         name: '',
        email: '',
        address: '',
        rating: '',
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
    // this.form.id = this.carInfo.id,
    // this.form.brand = this.carInfo.brand,
    // this.form.model= this.carInfo.model,
    // this.form.year= this.carInfo.year,
    // this.form.price= this.carInfo.price,
    // this.form.OrderId= this.carInfo.OrderId
    

  },

  methods: {
    ...mapActions([
      'updateSeller'
    ]),

    onSubmit(e) {
      e.preventDefault();
      
        this.updateSeller(this.form, this.$route.params.id)
        // this.$socket.emit('updateCar', { body: this.form, token: this.token });
        this.$router.back();
      
    }
  }
}
</script>

<style scoped>

</style>
