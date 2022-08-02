import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Social from '../pages/Social.vue';
import Media from '../pages/Media.vue';
import Snackbar from '../pages/Snackbar.vue';
import Chart from '../pages/Chart.vue';
import Employees from '../components/Employees.vue';
import Calendar from '../pages/Calendar.vue';
import Login from '../components/core/Login.vue';
import Error from '../pages/core/Error.vue';
import Register from '../components/core/Register.vue'
import CreateEmployee from '../components/CreateEmployee.vue'
import EditEmployee from '../components/EditEmployee'
import ViewEmployee from '../components/ViewEmployee'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'dashboard' }
        ]
      }
    },
    {
      path: '/employees',
      name: 'Employees',
      component: Employees,
      meta: {
        breadcrumb: [
          { name: 'employees' }
        ]
      }
      
    },
    {
      path: '/snackbar',
      name: 'Snackbar',
      component: Snackbar,
      meta: {
        breadcrumb: [
          { name: 'snackbar' }
        ]
      }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      meta: {
        breadcrumb: [
          { name: 'calendar' }
        ]
      }
    },
    {
      path: '/social',
      name: 'Social',
      component: Social,
      meta: {
        breadcrumb: [
          { name: 'social' }
        ]
      }
    },
    {
      path: '/media',
      name: 'Media',
      component: Media,
      meta: {
        breadcrumb: [
          { name: 'media' }
        ]
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'charts' }
        ]
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/employees',
      name: 'employees',
      component: Employees
    },
    {
      path: '/createEmployee',
      name: 'CreateEmployee',
      component: CreateEmployee
    },
    {
      path: '/employees/:employeeId',
      name: 'viewEmployee',
      component: ViewEmployee
    },
    {
      path: '/employees/:employeeId/edit',
      name: 'EditEmployee',
      component: EditEmployee
    },
    
  ]
});
