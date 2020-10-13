<template>
	<div class="main">
		<div class="breadcrab">
			<span>公告中心</span>
      <span class="spa">/</span>
			<span>道恩股份拟扩产聚丙烯熔喷料 总产能预计达到1200吨/天</span>
		</div>
    <div class="title">道恩股份拟扩产聚丙烯熔喷料 总产能预计达到1200吨/天</div>
    <div class="information">
      <span>作者：xxx</span>
      <span>来源：—</span>
      <span>时间：2019/09/30  15:45:00</span>
    </div>
    <p class="test-p text3">上证报中国证券网讯 道恩股份27日早间公告，公司将在现有生产线的基础上，拟新增700吨/天聚丙烯熔喷料产能，建成后公司（母公司）总产能预计达到1200吨/天。新增投资不超过8000万元，预计建成时间为今年5月底。</p>
    <p class="test-p text3">公司在现有软硬件设施的基础上进行聚丙烯熔喷料生产线扩建，项目投资合理，短期内即可实现规模化生产。由于目前新冠疫情尚未结束，市场对聚丙烯熔喷料的需求比较旺盛，随着公司新增生产线建成投产，能更好地保证下游客户的需求，稳定熔喷料价格，积极履行社会责任，同时给公司带来收益。</p>
    <div class="echarts">
      <img src="../../../../assets/notice/echarts.png" alt="">
    </div>
	</div>
</template>

<script>
	export default {
	  name: "",
	  data() {
	    return {

	    }
	  }
	}
</script>

<style lang="less" scoped>
	.main {
		margin: 0 30px;
    .breadcrab {
      font-size: 19px;
      line-height: 75px;
      .spa {
        margin: 0 5px;
      }
    }
    .title {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
    }
    .information {
      text-align: center;
      font-size: 16px;
      color: #989797;
      line-height: 60px;
    }
    .test-p {
      text-indent: 40px;
      line-height: 50px;
    }
    .echarts {
      width: 100%;
      img {
        width: 100%;
      }
    }
 	}
</style>
