<template>
	<div class="comment-item">
		<div class="left">
			<img :src="data.headImage" alt="" />
		</div>
		<div class="right">
			<div class="text">{{ data.nickname }}</div>
			<div class="user">
				<span @click="onFollow" class="tag" v-if="status === 0">
					<van-icon name="plus" /> Follow
				</span>
				<span @click="onNotFollow" class="tag" v-if="status === 1">
					<van-icon name="exchange" /> Mutual Follow
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: Object,
		status: Number,
	},
	methods: {
		async onDeleteConfirm() {
			this.$dialog
				.confirm({
					title: 'Message',
					message: 'confirm deletion?',
				})
				.then(() => {
					this.$emit('delete', this.data);
				})
				.catch(() => {
					// on cancel
				});
		},
		async onFollow() {
			try {
				this.$toast.loading({
					duration: 0,
				});
				const { user } = this.$store.getters;
				await this.$http({
					url: this.$api.follow,
					method: 'post',
					data: {
						me: user._id,
						friend: this.data._id,
					},
				});
				this.$emit('updateList', {});
			} finally {
				this.$toast.clear(true);
			}
		},
		async onNotFollow() {
			try {
				this.$toast.loading({
					duration: 0,
				});
				const { user } = this.$store.getters;
				await this.$http({
					url: this.$api.follow_remove,
					method: 'post',
					data: {
						me: user._id,
						friend: this.data._id,
					},
				});
				this.$emit('updateList', {});
			} finally {
				this.$toast.clear(true);
			}
		},
	},
};
</script>

<style lang="less" scoped>
.comment-item {
	display: flex;
	margin-bottom: 15px;
	.left {
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 40px;
		img {
			width: 40px;
			height: 40px;
			display: block;
			background-color: #f0f0f0;
		}
	}
	.right {
		flex: 1;
		padding-left: 15px;
		overflow: hidden;
		display: flex;
		align-items: center;
		.user {
			color: #999;
			font-size: 12px;
			line-height: 22px;
		}
		.text {
			color: #333;
			font-size: 16px;
			font-weight: 700;
			white-space: pre-wrap;
			word-break: break-all;
			flex: 1;
			overflow: hidden;
			display: flex;
			align-items: center;
			padding-right: 15px;
		}
	}
}
.tag {
	padding: 4px 8px;
	color: #fff;
	background: #1890ff;
	font-size: 12px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	&:active {
		opacity: 0.7;
	}
}
</style>
