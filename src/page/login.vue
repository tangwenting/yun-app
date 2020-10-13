<template>
	<div>
		<div class="header">
			<router-link to class="header-left">
				<img class="" src="@/assets/logins/c.png"  @click="$router.back(-1)">
			</router-link>
			<router-link class="header-right" to="/register">
				没有账号？立即注册
			</router-link>
		</div>
		<div class="main">
			<div class="login">
				<img src="@/assets/logins/login_03.png" alt="">
			</div>
			<div class="form">
				<div class="input-item">
					<div class="input-item-title">用户名</div>
					<div class="input-item-box">
						<div class="input-item-box-icon">
							<img src="@/assets/logins/a.png" alt="">
						</div>
						<div class="input-item-box-input">
							<input type="text" placeholder="请输入用户名">
						</div>
					</div>
					<div class="input-item-tip">* 输入错误！请重新输入</div>
				</div>
				<div class="input-item input-item-password">
					<div class="input-item-title">密码</div>
					<div class="input-item-box">
						<div class="input-item-box-icon">
							<img src="@/assets/logins/b.png" alt="">
						</div>
						<div class="input-item-box-input">
							<input type="password" placeholder="请输入账户密码8-12位">
						</div>
					</div>
				</div>
				<div class="input-item input-item-password-s">
					<div class="remember">
						<input type="checkbox" id="remember">
						<label for="remember">记住密码</label>
					</div>
					<div class="forget">
						<router-link to="reset">忘记密码</router-link>
					</div>
				</div>
				<div class="input-item">
					<button class="button-login" @click="login">登录</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {

			}
		},
		methods: {
			login() {
				let that = this;
				that.$message({
					message: '登录成功',
					type: 'success',
					duration: 1000,
					onClose: function() {
						//跳转首页
						that.$router.push({
							path: "home"
						})
					}
				});
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		padding: 60px 30px 0 30px;
		overflow: hidden;

		.header-left {
			float: left;
			width: 1.875rem;
			height: 1.875rem;
			cursor: pointer;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.header-right {
			float: right;
			font-size: 16px;
			color: #939292;
		}
	}

	.input-item-title {
		font-size: 16px;
	}

	.main {
		margin-top: 258px;

		.login {
			margin: 0 auto;
			width: 9.1875rem;

			img {
				width: 100%
			}
		}

		.form {
			width: 502px;
			margin: 80px auto 0;

			.input-item {
				.input-item-box {
					display: flex;
					height: 60px;
					margin-top: 8px;

					.input-item-box-icon {
						width: 60px;
						display: flex;
						justify-content: center;
						;
						border: 1px solid #e2dfdf;
						border-right: 0;
						align-items: center;

						img {
							width: 50%;
							height: 50%;
						}
					}

					.input-item-box-input {
						flex: 1;

						input {
							padding-left: 10px;
							width: 100%;
							height: 100%;
							border: 1px solid #e2dfdf;
							font-size: 14px;
						}

						input::-webkit-input-placeholder {
							/* placeholder字体大小  */
							font-size: 14px;
						}
					}
				}

				.input-item-tip {
					margin-top: 4px;
					text-align: right;
					color: #ff0101;
					font-size: 14px;
				}

				.button-login {
					width: 131px;
					cursor: pointer;
					margin: 77px auto 0;
					display: block;
					height: 50px;
					font-size: 20px;
					color: #fff;
					background: #323232;
				}
			}

			.input-item-password {
				margin-top: 22px;
			}

			.input-item-password-s {
				margin-top: 40px;
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #333333;

				input {
					position: relative;
					top: 2px;
				}

				a {
					color: #333333;
				}
			}
		}
	}
</style>
