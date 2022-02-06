<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>

            <!-- <b-nav-item-dropdown text="Department">
              <b-dropdown-item
                v-for="dep in departments"
                :key="dep.departmentId"
                :to="`/department/${dep.departmentId}/${dep.displayName}`">
                {{ dep.displayName }}
              </b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item to="/cars">Cars</b-nav-item>
          </b-navbar-nav> 
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!token" to="/register">Register</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
            <b-nav-item v-else @click="logout()">Log Out</b-nav-item>

            <!-- <b-nav-form>
              <b-form-input v-model="searchQuery" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button @click="search" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view class="stranica" />
  </div>
</template>


<script>
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
    name: 'App',

    data() {
      return {
        searchQuery: ''
      }
    },

    computed: {
      ...mapState([
        'token'
      ])
    },

    mounted() {
      
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
    },

    methods: {
      ...mapActions([
        
      ]),

      ...mapMutations([
        'removeToken',
        'setToken'
      ]),

      // search(e) {
      //   e.preventDefault();

      //   const sq = this.searchQuery;
      //   this.searchQuery = '';
        
      //   this.$router.push({ name: 'Search', query: { q: sq } });
      // },

      logout() {
        this.removeToken();
      }
    },

    sockets: {
      error(err) {
        alert(err);
      }
    }
  }
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
