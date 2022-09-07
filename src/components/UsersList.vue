<template>
 <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="users.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>

    <b-table
      id="image-table"
      hover
      fixed
      :items="users"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"

    >

    <template v-slot:cell(delete)="data">
					<span><b-btn class="btn-danger" @click="deleteUser(data.item.id)">Delete</b-btn></span>
				</template>
      <!-- <template #cell(isHighlight)="data">
        <b-icon v-if="data.value" icon="check-square" variant="success" scale="2"></b-icon>
        <b-icon v-else icon="x-circle" variant="danger" scale="2"></b-icon>
      </template> -->
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="users.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <b-button v-if="token" v-on:click="goToAddUser()">Add user</b-button>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: "UsersList",

    data() {
      return {
        fields: ['id', 'name',  'admin', 'email', 'delete', { key: 'id', tdClass: 'align-middle' }],
        items: [],
        currentPage: 1,
        perPage: 10
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
        // 'getItem'
        'fetchUsers',
        'deleteUser'
      ]),
      rowClicked(record, index) {
        this.$router.push({ name: 'SingleUserView', params: { id: record.id} });
      },
       goToAddUser(){
        this.$router.push({ name: 'AddUser', params: { id: this.$route.params.id} });
      }

    },
    mounted() {
        this.fetchUsers();     
        this.users.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
        this.getItem(id).then( obj => this.items.push(obj) );
      });
    }
    


  }
</script>


<style scoped>


</style>