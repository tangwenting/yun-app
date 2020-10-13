<template>
	<div>
		<v-detailss></v-detailss>
		<v-comment></v-comment>
		<v-advertisement></v-advertisement>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import vDetailss from "./components/details.vue"
	import vComment from "./components/comment"
	import vAdvertisement from "./components/advertisement"
	import vFooter from "@/components/footer.vue"
	export default {
	  name: "",
	  data() {
	    return {

	    }
	  },
	  components: {
	  	vDetailss,
      vComment,
      vAdvertisement,
      vFooter
	  },
	}
</script>

<style scoped lang="less">

</style>
