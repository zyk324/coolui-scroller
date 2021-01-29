<template>
	<div>
		<div class="pagination text-center">
			<ul>
				<a href="">&lsaquo;</a>
				<a class="on" href="">1</a>
				<a href="">2</a>
				<a href="">3</a>
				<a href="">4</a>
				<a href="">&rsaquo;</a>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		computed: {
		}
	};
</script>

<style scoped lang="scss">
	.pagination {
		ul {
			margin-top: 50px;
			a {
				height: 30px;
				line-height: 30px;
				border: 1px solid #14a83a;
				display: inline-block;
				color: #14a83a;
				font-size: 16px;
				margin: 0 4px;
				padding: 0 10px;
				transition: all .3s;
				&:hover, &.on {
					background-color: #14a83a;
					color: #f6ff00;
				}
				&:last-child {
					font-size: 24px;
					line-height: 24px;
				}
				&:first-child {
					font-size: 24px;
					line-height: 24px;
				}
			}
		}
	}
</style>
