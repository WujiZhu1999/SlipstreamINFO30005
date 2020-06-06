<template>
	<div class="layout">
		<div class="header">
			<h3>
				<img
					@click="$router.push({ name: 'userInfo' })"
					class="user-icon"
					:src="user.headImage"
				/>
				<span class="user-text">{{ user.nickname }}</span>
				<div class="tag" @click="$router.push({ name: 'addUser' })">
					<van-icon name="plus" />
					<p>Good friend</p>
				</div>
			</h3>
			<div>
				<span
					@click="$router.push({ name: 'userList', query: { type: 'Follow' } })"
					><i>{{ followTotal }}</i> Follow</span
				>
				<span
					@click="$router.push({ name: 'userList', query: { type: 'Fans' } })"
					><i>{{ fansTotal }}</i> Fans</span
				>
			</div>
		</div>
		<van-cell-group>
			<van-cell
				icon="user-o"
				title="User"
				is-link
				@click.native="$router.push({ name: 'userInfo' })"
			/>
			<van-cell
				icon="orders-o"
				title="Post"
				is-link
				@click.native="$router.push({ name: 'myposts' })"
			/>
			<van-cell
				icon="exchange"
				title="Route"
				is-link
				@click.native="$router.push({ name: 'myroute' })"
			/>
			<van-cell
				icon="comment-o"
				title="Comment"
				is-link
				@click.native="$router.push({ name: 'mycomment' })"
			/>
			<van-cell
				icon="chart-trending-o"
				title="Report"
				is-link
				@click.native="$router.push({ name: 'report' })"
			/>
			<van-cell
				icon="home-o"
				title="Active"
				is-link
				@click.native="$router.push({ name: 'myactive' })"
			/>
			<van-cell
				icon="label-o"
				title="Ranking"
				is-link
				@click.native="$router.push({ name: 'ranking' })"
			/>
		</van-cell-group>

		<div @click="onLogOut" class="logout-btn">LOGOUT</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			followTotal: 0,
			fansTotal: 0,
		};
	},
	computed: {
		user() {
			return this.$store.getters.user;
		},
	},
	created() {
		this.getList();
	},
	methods: {
		onLogOut() {
			this.$store.dispatch('users/logout');
		},
		//获取粉丝关注列表
		async getList() {
			const { data } = await this.$http({
				url: this.$api.user_fans,
				method: 'post',
				data: {
					me: this.user._id,
				},
			});
			this.followTotal = data.followTotal;
			this.fansTotal = data.fansTotal;
		},
	},
};
</script>

<style lang="less" scoped>
.layout {
	height: 100%;
	overflow-y: auto;
	background-color: #fafafa;
	padding: 15px 0;
	.header {
		background: #fff;
		padding: 15px;
		margin-bottom: 15px;
		color: #333;
		h3 {
			font-size: 16px;
			position: relative;
			display: flex;
			align-items: center;
			.user-text {
				flex: 1;
				padding-right: 100px;
				overflow: hidden;
				white-space: pre-wrap;
				word-break: break-all;
			}
			.tag {
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				border: 1px solid #969799;
				font-size: 12px;
				margin-right: 0;
				color: #969799;
				font-weight: 400;
				padding: 4px 8px;
				border-radius: 2px;
				display: flex;
				align-items: center;
				justify-content: center;
				i {
					margin-right: 5px;
					font-size: 14px;
					color: #969799;
				}
			}
		}
		span {
			margin-right: 30px;
			font-size: 14px;
			color: #999;
			i {
				font-weight: 700;
				color: #333;
			}
		}
	}

	.logout-btn {
		height: 40px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #0084ff;
		font-size: 16px;
		width: 345px;
		margin: 0 auto;
		margin-top: 15px;
		box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
		&:active {
			opacity: 0.7;
		}
	}
}
.user-icon {
	height: 40px;
	width: 40px;
	margin-right: 15px;
	border-radius: 50px;
	background-color: #e0e0e0;
	overflow: hidden;
}
</style>
