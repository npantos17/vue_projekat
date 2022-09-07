<template>
  <div id="app"  v-if="this.token">
    <Header subtitle="Create listing"/>

    <b-form @submit="onSubmit">

      <b-form-group label="Name:" label-for="name">
        <b-form-input id="name" v-model="form.name"  placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Email:" label-for="email">
        <b-form-input id="email" v-model="form.email"  placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password"  placeholder="Enter password" required></b-form-input>
      </b-form-group>

      <b-form-group label="Roles" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="form.admin" :aria-describedby="ariaDescribedby" :value="true" :unchecked-value="false" name="admin">Admin</b-form-radio>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="moderator" value="Moderator">Moderator</b-form-radio>
    </b-form-group>
    


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
  name: 'AddUser',

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
        password: '',
        admin:false
        
       
      },
      showDismissibleAlert: false
    }
  },

  computed: {
    ...mapState([
      'token',
      'loggedUserId'
    ]),
    
    // userIdState() {
    //   return this.form.userId.length > 0
    // },
  },


  methods: {
    ...mapActions([
      'addUser',
    ]),

    onSubmit(e) {
      e.preventDefault();
      
        // this.form.id = this.$route.params.id.toString()
        // this.form.SellerId = this.loggedUserId.toString()
        // this.$socket.emit('addbook', { body: this.form, token: this.token });

        this.addUser(this.form);
        this.$router.back();
      
    }
  }
}
</script>

<style scoped>

</style>
