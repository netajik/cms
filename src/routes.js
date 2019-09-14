import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

import LoginForm from '@/components/LoginForm';
import Dashboard from '@/components/Dashboard';
import Contacts from '@/components/Contacts';
import Groups from '@/components/Groups';

import mappings from './mappings';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    	path: mappings.LOGIN_URL,
    	name: 'login',
    	component: LoginForm
    },
    {
    	path: mappings.DASHBOARD,
    	name: 'dashboard',
    	component: Dashboard
    },
    {
    	path: mappings.CONTACTS_URL,
    	name: 'contacts',
    	component: Contacts
    },
    {
    	path: mappings.GROUPS_URL,
    	name: 'groups',
    	component: Groups
    },
    {
    	path: mappings.GROUP_URL,
    	name: 'group',
    	component: Contacts,
    	props: true
    }
  ]
})
