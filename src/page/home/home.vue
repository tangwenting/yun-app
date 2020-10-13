<template>
  <div>
    <v-swiper></v-swiper>
		<v-investmentranking></v-investmentranking>
		<v-futures></v-futures>
		<v-newsletter></v-newsletter>
		<v-adver></v-adver>
		<v-footer></v-footer>
  </div>
</template>

<script>
  import vSwiper from "./components/swiper"
  import vInvestmentranking from "./components/investmentranking"
  import vFutures from "./components/futures"
  import vNewsletter from "./components/newsletter"
  import vAdver from "../../components/advertisement"
	import vFooter from "../../components/footer"
  export default {
    name: "v-home",
    components: {
      vSwiper,
			vFooter,
      vAdver,
			vInvestmentranking,
			vFutures,
			vNewsletter,
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
</style>
