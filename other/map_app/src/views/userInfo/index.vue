<template>
	<div class="map-wrap">
		<div class="map-header" style="z-index: 1;">
			<div class="left-icon" @click="$router.replace({ name: 'person' })">
				<van-icon name="arrow-left" />
			</div>
			<div class="map-header-title">{{ $route.meta.title }}</div>
		</div>
		<div class="map-content">
			<div
				class="form-item"
				style="height: auto; margin-bottom: 15px; text-align: center;"
			>
				<van-uploader
					v-model="fileList"
					:max-count="1"
					:after-read="afterRead"
				/>
			</div>
			<div class="form-item">
				<input
					v-model.trim="forms.nickname"
					placeholder="Please enter your nickname"
					maxlength="20"
				/>
			</div>
			<div class="form-item">
				<button @click="onSubmit">SUBMIT</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			fileList: [],
			forms: {
				nickname: '',
			},
		};
	},
	created() {
		const { user } = this.$store.getters;
		this.forms.nickname = user.nickname;
		if (user.headImage) {
			this.fileList = [
				{
					url: user.headImage,
					status: '',
				},
			];
		}
	},
	methods: {
		async afterRead(file) {
			file.status = 'uploading';
			const form = new FormData();
			form.append('file', file.file);
			try {
				const { data } = await this.$http({
					url: this.$api.upload,
					method: 'post',
					data: form,
				});
				file.status = '';
				file.url = data.url;
			} catch (error) {
				file.status = 'failed';
				file.url = '';
			}
		},
		async onSubmit() {
			if (!this.forms.nickname) {
				return this.$toast('Please enter your nickname');
			}
			const headImage = this.fileList[0] ? this.fileList[0].url : null;
			if (!headImage) {
				return this.$toast('Please upload your head image');
			}
			try {
				this.$toast.loading({
					duration: 0,
				});
				await this.$http({
					url: this.$api.user_update,
					method: 'post',
					data: {
						nickname: this.forms.nickname,
						headImage: headImage,
					},
				});
				const { user } = this.$store.getters;
				this.$store.commit('users/users', {
					...user,
					nickname: this.forms.nickname,
					headImage: headImage,
				});
				this.$router.replace({ name: 'person' });
			} finally {
				this.$toast.clear(true);
			}
		},
	},
};
</script>

<style lang="less" scoped>
@import '../home/header.less';
.map-wrap .map-header .input-wrap {
	height: 34px;
}
.map-wrap .map-header {
	height: 54px;
}
.map-wrap .map-content {
	padding: 20px;
	overflow-y: auto;
}
.content {
	padding: 15px 0;
	font-size: 14px;
	color: #333;
}
.map-wrap .left-icon {
	display: flex;
	align-items: center;
}
.form-item {
	height: 40px;
	line-height: 40px;
	width: 100%;
	margin-bottom: 24px;
	input {
		height: 40px;
		display: block;
		font-size: 14px;
		line-height: 40px;
		border-bottom: 1px solid #d9d9d9;
		color: rgba(0, 0, 0, 0.65);
		width: 100%;
		&::-webkit-input-placeholder {
			/* Chrome/Opera/Safari */
			color: rgba(0, 0, 0, 0.35);
		}
		&::-moz-placeholder {
			/* Firefox 19+ */
			color: rgba(0, 0, 0, 0.35);
		}
		&:-ms-input-placeholder {
			/* IE 10+ */
			color: rgba(0, 0, 0, 0.35);
		}
		&:-moz-placeholder {
			/* Firefox 18- */
			color: rgba(0, 0, 0, 0.35);
		}
	}
	button {
		color: #fff;
		background-color: #1890ff;
		border-color: #1890ff;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.045);
		font-weight: 400;
		width: 100%;
		border-radius: 50px;
		font-size: 16px;
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
		&:active {
			background-color: #096dd9;
			border-color: #096dd9;
		}
	}
	button[disabled] {
		background-color: #e0e0e0;
		color: rgba(0, 0, 0, 0.35);
		border-color: #ccc;
	}
}
</style>
