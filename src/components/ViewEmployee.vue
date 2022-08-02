<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="500"
  >
    <div
        class="margin:50px;" 
    >
    <img
    width="500"
    heigh="500"
    class="mx-auto my-12"
    src="@/assets/1.jpeg"/>
    </div>
    <v-card-text>
      <table style="font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;">
  <tr>
    <td>Full Name:</td>
    <td>{{employee.name}}</td>
  </tr>
  <tr>
    <td>Primary Phone Number: </td>
    <td>+965-{{employee.phoneNumber1}}</td>
  </tr>
  <tr>
    <td>Secondary Phone Number: </td>
    <td>+965-{{employee.phoneNumber2}}</td>
  </tr>
  <tr>
    <td>Gender: </td>
    <td>{{employee.gender}}</td>
  </tr>
  <tr>
    <td>Education:</td>
    <td>{{employee.education}}</td>
  </tr>
  <tr>
    <td>Primary Email:</td>
    <td>{{employee.email1}}</td>
  </tr>

  <tr>
    <td>Secondary Email:</td>
    <td>{{employee.email2}}</td>
  </tr>
  <tr>
    <td>Primary Address: </td>
    <td>{{employee.address1}}</td>
  </tr>

  <tr>
    <td>Secondary Address:</td>
    <td>{{employee.address2}}</td>
  </tr>
  <tr>
    <td>Civil Id: </td>
    <td>{{employee.civilId}}</td>
  </tr>
  <tr>
    <td>Civil Id Expiry: </td>
    <td>{{formatDate(employee.civilIdExpiry)}}</td>
  </tr>
  <tr>
    <td>Date Of Birth: </td>
    <td>{{formatDate(employee.DOB)}}</td>
  </tr>
  <tr>
    <td>Driver License Expiry Date: </td>
    <td>{{formatDate(employee.driverLicenseExpiry)}}</td>
  </tr>

  <tr>
    <td>Passport Id: </td>
    <td>{{employee.passportId}}</td>
  </tr>
  <tr>
    <td>Passport Expiry: </td>
    <td>{{formatDate(employee.passportIdExpiry)}}</td>
  </tr>
  <tr>
    <td>Job Title: </td>
    <td>{{employee.jobTitle}}</td>
  </tr>
  <tr>
    <td>Date Of Hire: </td>
    <td>{{formatDate(employee.dateOfHire)}}</td>
  </tr>
  <tr>
    <td>Bank Account Number: </td>
    <td>{{employee.bankAccountNumber}}</td>
  </tr>
  <tr>
    <td>IBAN: </td>
    <td>{{employee.Iban}}</td>
  </tr>
  <tr>
    <td>Bank Name: </td>
    <td>{{employee.bankName}}</td>
  </tr>
  <tr>
    <td>Salary: </td>
    <td>{{employee.salary}}</td>
  </tr>
  <tr>
    <td>Martial Status: </td>
    <td>{{employee.Martial}}</td>
  </tr>
  <tr>
    <td>Nationality: </td>
    <td>{{employee.nationality}}</td>
  </tr>
</table>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
      <router-link :to="{ name: 'EditEmployee' }">
      <v-btn
        color="primary lighten-2"
        text
      >
        Edit
      </v-btn>
      </router-link>
      <router-link :to="{ name: 'employees' }">
      <v-btn
        color="red lighten-2"
        text
        @click="kill"
      >
        Delete
      </v-btn>
          </router-link>
  </v-card>
</template>

<script>
import EmployeeServices from '../services/EmployeeServices'
import {mapState} from 'vuex'
export default {

  data () {
    return {
        employee:null,

    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods:{
        formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
      async kill(){
        try{
        const employeeId = this.$store.state.route.params.employeeId
        this.employee = (await EmployeeServices.del(employeeId)).data
        }catch(err){
          console.log("dead")
        }
    }
  },
async mounted () {
    try{
      const employeeId = this.$store.state.route.params.employeeId
      this.employee = (await EmployeeServices.show(employeeId)).data
    }catch(err){
        console.log("------",err)
    }
  }
}
</script>
<style>
.table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>