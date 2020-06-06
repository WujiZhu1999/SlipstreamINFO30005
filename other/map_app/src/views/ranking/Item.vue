<template>
	<div class="comment-item">
		<span style="padding-right: 15px;">{{ index }}</span>
		<div class="left">
			<img :src="data.headImage" alt="" />
		</div>
		<div class="right">
			<div class="text">{{ data.nickname }}</div>
			<div class="user">{{ data.distance_total }}km</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: Object,
		index: Number,
	},
	methods: {},
};
</script>

<style lang="less" scoped>
.comment-item {
	display: flex;
	margin-bottom: 15px;
	align-items: center;
	span {
		font-size: 24px;
	}
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
			font-size: 14px;
			line-height: 22px;
			font-weight: 600;
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
