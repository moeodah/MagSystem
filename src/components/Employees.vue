<template>
      <div>
            <div><router-link :to="{ name: 'CreateEmployee' }">
              <v-btn class="primary
              right
              "
              >
                +
              </v-btn>
              </router-link>
              <v-data-table
    :headers="headers"
    :items="employees"
    item-key="id"
    sort-by="id"
    :items-per-page="10"
    class="elevation-1"
     >
    <template v-slot:items="props"
    class="container"
      
      >
     
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.phoneNumber1 }}</td>
      <td>{{ formatDate(props.item.DOB) }}</td>
      <td>{{ props.item.civilId }}</td>
      <td>{{  formatDate(props.item.civilIdExpiry) }}</td>
      <td><v-btn
      :to="{
              name: 'viewEmployee', 
              params: {
                employeeId: props.item.id
              }
            }">View</v-btn></td>
    </template>
    
                    </v-data-table>
            
            </div>
      </div>
</template>
<script>
import EmployeeService from '../services/EmployeeServices'

export default { 
      data () {
            return {
                  headers: [
        {
          text: 'Id',
          align: 'center',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Phone Number', value: 'phoneNumber' },
        { text: 'DOB', value: 'DOB' },
        { text: 'Civil Id', value: 'civilId' },
        { text: 'Civil Id Expiry', value: 'civilIdExpiry' },
        { text: 'Edit', value: 'edit' }
      ],
      employees : [],
      editedIndex:-1,
      editedItem:{
            id:'',
            name:'',
            phoneNumber1:'',
            DOB:'',
            civilId:'',
            civilIdExpiry:''
      },
      defaultItem:{
            id:'',
            name:'',
            phoneNumber1:'',
            DOB:'',
            civilId:'',
            civilIdExpiry:''
      }



            }
      
    },
    async mounted () {
      var emps =  (await EmployeeService.index()).data.map(function(obj) {
            return{
                  id:obj.id,
                  name:obj.name,
                  phoneNumber1:obj.phoneNumber1,
                  DOB:obj.DOB,
                  civilId:obj.civilId,
                  civilIdExpiry:obj.civilIdExpiry
            }
      })
      this.employees = emps
    },
    methods:{
      changeRoute(routeName) {
      const vm = this;
      return vm.$router.push({ name: routeName });
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
    }
    
}
</script>

<style scoped>

</style>