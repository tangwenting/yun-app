<template>
	<div class="page">
		<div class="dateil padding">
			<div class="introduce_head">
				<span>商务中心 >></span>
				<span>奇瑞期货开户</span>
			</div>
			<!-- 开户介绍  流程 -->
			<div class="dateil_procedure">
				<div class="dateil_procedure_head">
					<h3 class="dateil_procedure_tit">奇瑞期货开户</h3>
					<p class="dateil_procedure_date">开户时间段：周一至周五08:30-17:30</p>
				</div>
				<div class="dateil_procedure_con">
					<div class="dateil_procedure_con_tit">手机开户流程</div>
					<div class="dateil_procedure_item" v-for="(item,pindex) in procedureItem" :key='pindex'>
						<div class="procedure_item_texts">
							<h6>{{item.title}}</h6>
							<div v-html="item.texts"></div>
							<div class="procedure_item_img">
								<img src="@/static/bottom.png" alt="">
							</div>
						</div>
					</div>
					<div class="procedure_upload"><span>具体流程点击下载附件</span></div>
				</div>
			</div>
			<!-- 最热招商平台 -->
			<div class="hot">
				<div class="hot_con">
					 <hot-swiper :hotSlide='hotSlide'></hot-swiper>
				</div>
			</div>
			<!-- 招商投资资讯 -->
			<div class="news">
				<div class="news_con">
           <news :newsList='newsList'></news>
				</div>
			</div>
		</div>
		<!-- back -->
		<div class="back" @click="back">
			<img src="@/static/back.png" alt="">
		</div>
    <v-footer></v-footer>
	</div>
</template>

<script>
	import hotSwiper from '@/components/swiper'
  import news from '@/components/news'
  import vFooter from '@/components/footer'
	export default {
		components: {
		  hotSwiper,
      news,
      vFooter
		},
		data() {
			return {
				procedureItem:[
					{
						title:'1：开户前的准备（身份证正反面照、手写签名照、银行卡正面照）:',
						texts:'<p> 1）身份证：过期身份证不能开户。</p><p>2）手写签名: 正楷字,不能过于潦草。</p><p>3）银行卡：必须是储蓄卡。不能信用卡</p><p>4）照片要求</p>'
					},
					{
						title:'2：客户端下载：手机客户端扫描二维码下载APP（期货开户云）'
					},
					{
						title:'3：选择期货公司：打开应用，方式二中：扫描二维码'
					},
					{
						title:'4：注册手机账号：输入注册的手机号码以及验证码。点击“验证并登录”'
					},
					{
						title:'5：确认协议：阅读所有协议和业务，没问题就勾选“我已阅读”选项，点击下一步'
					},
					{
						title:'6：证件照片上传：上传之前准备好的身份证正反面照片以及签名。横向上传电子照片，勾选 “我已阅读”选项，点击下一步'
					},
					{
						title:'7、选择营业部'
					},
					{
						title:'8：基本资料：按要求填写基本资料，点击 下一步，进入绑定银行卡信息 页面(联系地址：与身 份证地址一致)'
					},
					{
						title:'9：绑定银行卡信息：选择银行（共、农、中、建、交、浦发、招行），写上卡号，银行卡网点（格式：**银行**支行/分行/营业厅/储蓄所等或者**支行/分行/营业厅/储蓄所等），上传银行卡正面（横向正面传，不要竖着、倒着），点击“添加银行卡”按钮，点击“下一步 ”推荐使用：建设银行（公司可以直接关联银期、其他银行需本人登录银行网站或手机银行进行关联）'
					},
					{
						title:'10：投资者适当性分类选择及普通投资者适当性问卷：点击“普通投资者”选项（专业投资者 需要提供很多证件，比较麻烦，暂时不支持）',
						texts:'<p>1）点击下一步，进入适当性问卷页面：（问卷第10题不能选A、13题选B）</p><p>2）C1、C2级别的客户，不能继续开户，要点击“重新测评”</p><p>3）最低风险承受能力投资者（问卷第10题选择A,则是最低风险能力投资者），最低风险承受能力投资者，不能开户，点击“确定”按钮，返回登录页面，再次登录后可以重新进入适当性调查问卷进行测评。</p>'
					},
					{
						title:'11、选择期货账户类型：只勾选上海期货交易所、大连商品交易、郑州商品交易所，其他的请勿勾选！（点击“下一步”，进入视频认证环节）'
					},
					{
						title:'12、视频认证环节：客户本人持身份证出现在视频中，如果有耳机，可以备好耳机，手机调至最  大音量。'
					},
					{
						title:'13、安装CA证书视频通过后，客户进入安装CA证书环节'
					},
					{
						title:'14、签署协议'
					},
					{
						title:'15：申请提交：客户网开流程到此结束，接下来耐心等待账户开设。'
					},
					{
						title:'16：账户开好后，联系我们的工作人员获取教学资料。'
					}
				],
				newsList:[
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
					{text:'资讯标题急急水果蛋糕发挥共额题急急水果蛋糕发挥共额题急急水果蛋糕',num:'520'},
				],
				hotSlide:[
					{image: require('@/static/int_logo.png')},
					{image: require('@/static/int_logo.png')},
          {image: require('@/static/int_logo.png')},
          {image: require('@/static/int_logo.png')},
          {image: require('@/static/int_logo.png')}
				],
			}
		},

		methods: {
			back(){
				if (window.history.length <= 1) {
					this.$router.push({path:'/'});
					return false
				} else {
					this.$router.go(-1);
				}
			}
		}

	}
</script>

<style>
	@import url("./shangwu_dateil.css");
	@import url("../shangwu_introduce/shangwu_introduce.css");
</style>
