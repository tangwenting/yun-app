<template>
  <div>
    <v-personalheader></v-personalheader>
	<v-follow></v-follow>
    <div class="suspension">
      <img src="@/assets/personal/weiruz.png" alt="">
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vPersonalheader from "./components/personalheader"
  import vFollow from "./components/v-follow"
  import vFooter from "@/components/footer"
  export default {
    name: "follow",
    components: {
      vPersonalheader,
	  vFollow,
      vFooter
    }
  }
</script>

<style lang="less">
  .suspension {
    position: fixed;
    top: 343px;
    left: 0;
    width: 79px;
    img {
      width: 100%;
    }
  }
</style>
