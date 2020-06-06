<template>
	<div class="login">
		<p>User registration</p>
		<div class="login-form">
			<div class="form-item">
				<input
					maxlength="15"
					v-model.trim="forms.nickname"
					placeholder="Please enter a nickname"
				/>
			</div>
			<div class="form-item">
				<input
					maxlength="15"
					v-model.trim="forms.userName"
					placeholder="Please enter your account number"
				/>
			</div>
			<div class="form-item">
				<input
					maxlength="15"
					v-model.trim="forms.password"
					placeholder="Please input a password"
					type="password"
				/>
			</div>
			<div class="form-item">
				<button @click="handlerSubmit" :disabled="disabled">REGISTER</button>
			</div>
			<div class="footer">
				<span @click="$router.push({ name: 'login' })">>> login</span>
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
				nickname: '',
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
				let { userName, password, nickname } = this.forms;
				userName = userName.trim();
				password = password.trim();
				nickname = nickname.trim();
				if (!nickname) {
					isMessage && this.$toast('Please enter a nickname');
					return reject();
				}
				if (!userName) {
					isMessage && this.$toast('Please enter your account number');
					return reject();
				}
				if (!password) {
					isMessage && this.$toast('Please input a password');
					return reject();
				}
				resolve({ userName, password, nickname });
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
					url: this.$api.register,
					data: params,
				});
				this.$router.replace({ name: 'login' });
				setTimeout(() => {
					this.$toast('register successful');
				});
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
