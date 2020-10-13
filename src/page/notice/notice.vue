<template>
  <div>
    <div class="bunner">
      <img src="@/assets/notice/bunner.png" alt="">
    </div>
    <v-collection></v-collection>
		<v-newest></v-newest>
    <v-advertisement></v-advertisement>
		<v-footer></v-footer>
  </div>
</template>

<script>
  import vFooter from "../../components/footer.vue"
  import vAdvertisement from "../../components/advertisement.vue"
  import vCollection from "./components/collection.vue"
  import vNewest from "./components/newest.vue"
  export default {
    name: "v-notice",
    data() {
      return {

      }
    },
    components: {
      vCollection,
      vFooter,
      vAdvertisement,
			vNewest,
    }
  }
</script>

<style lang="less" scoped>
	.bunner {
    width: 100%;
    img {
      width: 100%;
    }
  }

</style>
