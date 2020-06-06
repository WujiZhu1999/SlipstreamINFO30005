<template>
	<div class="login">
		<p>Account password login</p>
		<div class="login-form">
			<div class="form-item">
				<input
					v-model.trim="forms.userName"
					placeholder="Please enter your account number"
				/>
			</div>
			<div class="form-item">
				<input
					v-model.trim="forms.password"
					placeholder="Please input a password"
					type="password"
				/>
			</div>
			<div class="form-item">
				<button @click="handlerSubmit" :disabled="disabled">LOGIN</button>
			</div>
			<div class="footer">
				<span @click="$router.push({ name: 'register' })">>> register</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			disabled: false,
			forms: {
				userName: '',
				password: '',
			},
		};
	},
	watch: {
		forms: {
			deep: true,
			immediate: true,
			handler: function () {
				this.validateFields()
					.then(() => {
						this.disabled = false;
					})
					.catch(() => {
						this.disabled = true;
					});
			},
		},
	},
	methods: {
		validateFields(isMessage = false) {
			return new Promise((resolve, reject) => {
				let { userName, password } = this.forms;
				userName = userName.trim();
				password = password.trim();
				if (!userName) {
					isMessage && this.$toast('Please enter your account number');
					return reject();
				}
				if (!password) {
					isMessage && this.$toast('Please input a password');
					return reject();
				}
				resolve({ userName, password });
			});
		},
		async handlerSubmit() {
			const params = await this.validateFields(true);
			try {
				this.$toast.loading({
					duration: 0,
				});
				const { data } = await this.$http({
					method: 'post',
					url: this.$api.login,
					data: params,
				});
				const user = {
					...params,
					...data,
					outTime: 1000 * 3600 * 24 + new Date().getTime(), //过期时间
				};
				this.$store.commit('users/users', user);
				this.$router.replace({ name: 'person' });
			} finally {
				this.$toast.clear(true);
			}
		},
	},
};
</script>

<style lang="less" scoped>
@import './style.less';
</style>
