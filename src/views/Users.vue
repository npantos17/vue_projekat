<template>
  <div id="app">
    <Header :subtitle="subtitle"/>
    <UsersList />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import UsersList from '@/components/UsersList.vue';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Users',
    
    components: {
      Header,
      UsersList
    },

    data() {
        return {
            subtitle: '',
            user: null
        }
    },

    computed: {
      ...mapState([
        'users',
        'token'
      ])
    },


    methods: {
       ...mapActions([
         'fetchUsers'
       ])
    },

    mounted() {
        // this.subtitle = this.$route.params.name;
        // this.depID = this.$route.params.id;
        if (localStorage.token != null){
			this.user = JSON.parse(atob(localStorage.token.split('.')[1]))
            console.log(user)
		}

        this.fetchUsers();
        
    },

    
  }
</script>

<style scoped>

</style>
