<template>
	<div class="map-wrap">
		<div class="map-header">
			<div
				class="left-icon"
				@click="
					$router.replace({
						name: $route.query.back ? $route.query.back : 'active',
					})
				"
			>
				<van-icon name="arrow-left" />
			</div>
			<div class="map-header-title">{{ $route.meta.title }}</div>
		</div>
		<div class="map-content">
			<div class="user">
				<h4>
					{{ data.promoter && data.promoter.nickname
					}}<span v-if="data.promoter._id === user._id" class="tag">ME</span
					><span class="tag">{{ status[1] }}</span>
				</h4>
				<span>{{ data.createdAt | dateFormat }}</span
				><br />
				<span>start date: {{ data.startDate | dateFormat }}</span
				><br />
				<span>end date: {{ data.endDate | dateFormat }}</span>
			</div>
			<div class="content" v-html="data.content"></div>
			<div class="post-content">
				<span
					@click.stop="onAddActive"
					class="action"
					v-if="user._id !== data.promoter._id && !isJoin && status[0] !== 2"
				>
					<van-icon name="plus" />
				</span>
				<span
					v-if="isJoin && status[0] !== 2"
					@click.stop="onDeleteConfirm"
					class="action"
				>
					<van-icon name="cross" />
				</span>
			</div>
			<h4 class="comment-title">
				Users joined
			</h4>
			<div class="enlist">
				<UserItem v-for="item in enlist" :key="item._id" :data="item" />
			</div>
		</div>
	</div>
</template>

<script>
import UserItem from './UserItem';
export default {
	components: { UserItem },
	data() {
		return {
			data: {
				promoter: {},
				enlist: [],
			},
			enlist: [],
		};
	},
	computed: {
		user() {
			return this.$store.getters.user;
		},
		isJoin() {
			return !!this.enlist.find((item) => item._id === this.user._id);
		},
		status() {
			const start = +new Date(this.data.startDate);
			const end = +new Date(this.data.endDate);
			const now = +new Date();
			//未开始
			if (start >= now) {
				return [0, 'Not yet begun'];
			}
			//一结束
			if (now >= end) {
				return [2, 'Has ended'];
			}
			//活动中
			return [1, 'In activity'];
		},
	},
	created() {
		this.getInfo();
	},
	methods: {
		async getInfo() {
			if (!this.$route.query._id) return;
			try {
				this.$toast.loading({
					duration: 0,
				});
				const { data } = await this.$http({
					url: this.$api.active_info,
					params: {
						_id: this.$route.query._id,
					},
				});
				this.data = data;
				this.enlist = data.enlist;
			} finally {
				this.$toast.clear(true);
			}
		},
		async onDeleteConfirm() {
			this.$dialog
				.confirm({
					title: 'Message',
					message: 'confirm deletion?',
				})
				.then(async () => {
					try {
						this.$toast.loading({
							duration: 0,
						});
						await this.$http({
							url: this.$api.active_user_del,
							method: 'post',
							data: {
								_id: this.data._id,
							},
						});
						setTimeout(() => {
							this.$toast('delete in success');
						});
						this.getInfo();
					} finally {
						this.$toast.clear(true);
					}
				})
				.catch(() => {
					// on cancel
				});
		},
		async onAddActive() {
			this.$dialog
				.confirm({
					title: 'Message',
					message: 'confirm to join the activity?',
				})
				.then(async () => {
					try {
						this.$toast.loading({
							duration: 0,
						});
						await this.$http({
							url: this.$api.active_user_add,
							method: 'post',
							data: {
								_id: this.data._id,
							},
						});
						setTimeout(() => {
							this.$toast('join in success');
						});
						this.getInfo();
					} finally {
						this.$toast.clear(true);
					}
				})
				.catch(() => {
					// on cancel
				});
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
.user-num {
	display: flex;
	align-items: center;
	color: #999;
}
.content {
	padding: 15px 0;
	font-size: 14px;
	color: #333;
}
.user {
	font-weight: 700;
	color: #333;
	font-size: 14px;
	h4 {
		height: 20px;
		line-height: 20px;
	}
	span {
		color: #999;
		font-size: 12px;
		font-weight: 400;
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
		float: right;
		margin-left: 10px;
		line-height: 1;
		font-weight: 400;
		&:active {
			opacity: 0.7;
		}
	}
}
.comment-title {
	font-size: 14px;
	border-top: 1px solid #e0e0e0;
	padding: 15px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	i {
		font-size: 18px;
	}
}
.map-wrap .left-icon {
	display: flex;
	align-items: center;
}
.post-content {
	font-size: 12px;
	color: #b2bac2;
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	> span {
		display: inline-block;
		display: flex;
		align-items: center;
		padding: 0 10px;
		color: #b2bac2;
		border-radius: 1px;
		border: 1px solid #edeeef;
		> span {
			font-weight: 600;
			margin-left: 5px;
		}
	}
	> .action {
		padding-top: 4px;
		padding-bottom: 4px;
		font-size: 16px;
	}
	> span:last-child {
		margin-left: -1px;
	}
}
p {
	font-size: 12px;
	color: #1a1a1a;
}
</style>
