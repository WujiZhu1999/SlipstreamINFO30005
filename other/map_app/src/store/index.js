import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import users from '@/store/modules/users';
import getters from './getters';
const state = {
	modules: {
		users,
	},
	getters,
	plugins: [
		createPersistedState({
			paths: ['users.user'],
		}),
	],
};
Vue.use(Vuex);

const store = new Vuex.Store(state);
export default store;
