import $router from '@/router';
export default {
	namespaced: true,
	state: {
		user: {},
	},
	mutations: {
		users(state, user) {
			state.user = user;
		},
		clearUser(state) {
			state.user = {};
		},
	},
	actions: {
		logout({ state, commit }) {
			commit('clearUser');
			$router.replace({ name: 'login' });
		},
	},
};
