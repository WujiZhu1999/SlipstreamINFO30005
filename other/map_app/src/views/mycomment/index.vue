<template>
	<div class="map-wrap">
		<div class="map-header">
			<div class="left-icon" @click="$router.replace({ name: 'person' })">
				<van-icon name="arrow-left" />
			</div>
			<div class="map-header-title">{{ $route.meta.title }}</div>
		</div>
		<div class="map-content">
			<Item
				@delete="onDeleteItem"
				v-for="item in comments"
				:key="item._id"
				:data="item"
			/>
		</div>
	</div>
</template>

<script>
import Item from './Item';
export default {
	components: { Item },
	data() {
		return {
			data: {},
			comments: [],
		};
	},
	created() {
		this.getComments();
	},
	methods: {
		async onDeleteItem({ _id, article }) {
			try {
				this.$toast.loading({
					duration: 0,
				});
				const { data } = await this.$http({
					url: this.$api.comment_remove,
					params: {
						_id,
						article,
					},
				});
				this.getComments();
				setTimeout(() => {
					this.$toast('delete success');
				});
			} finally {
				this.$toast.clear(true);
			}
		},
		//获取评论列表
		async getComments() {
			const { data } = await this.$http({
				url: this.$api.comment,
				params: {
					user: true,
				},
			});
			this.comments = data;
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
</style>
