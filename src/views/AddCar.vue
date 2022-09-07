<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="Create listing"/>

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

    


<!--      <b-form-group label="LibraryId:" label-for="libraryId">-->
<!--        <b-form-input id="libraryId" v-model="form.libraryId" type = "number" placeholder="Enter libraryId" required></b-form-input>-->
<!--      </b-form-group>-->

<!--      <b-form-group label="UserId:" label-for="userId">-->
<!--        <b-form-input id="userId" v-model="form.userId" type = "number" :state="userIdState" placeholder="Enter userId" required></b-form-input>-->
<!--      </b-form-group>-->

      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        Please fill in all the fields correctly!
      </b-alert>

      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
  <!-- <p v-else>You must be signed in to leave a comment</p> -->
</template>

<script>

import Header from '@/components/Header.vue';
import {mapActions, mapState} from "vuex";


export default {
  name: 'AddCar',

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
       
      },
      showDismissibleAlert: false
    }
  },

  computed: {
    ...mapState([
      'token',
      'loggedUserId'
    ]),
    nameState() {
      return (this.form.name.length >= 4 && this.form.name.length <= 15)
    },
    writerState() {
      return (this.form.writer.length >= 4 && this.form.writer.length <= 15)
    },
    genreState() {
      return (this.form.genre.length >= 4 && this.form.genre.length <= 15)
    },
    desciptionState() {
      return this.form.desciption.length >= 4
    },
    publisherState() {
      return (this.form.publisher.length >= 4 && this.form.publisher.length <= 15)
    }
    // userIdState() {
    //   return this.form.userId.length > 0
    // },
  },


  methods: {
    ...mapActions([
      'addCar',
    ]),

    onSubmit(e) {
      e.preventDefault();
      
        // this.form.id = this.$route.params.id.toString()
        // this.form.SellerId = this.loggedUserId.toString()
        // this.$socket.emit('addbook', { body: this.form, token: this.token });

        this.addCar(this.form);
        this.$router.back();
      
    }
  }
}
</script>

<style scoped>

</style>
