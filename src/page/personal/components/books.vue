<template>
  <div>
    <ul class="list flex">
      <li v-for="item in 9" @click="handlBook">
        <div class="img-box">
          <img src="@/assets/personal/book1.png" alt="">
        </div>
        <div class="text-algin-center">大崩盘</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {

      }
    },
    methods:{
    	handlBook() {
    		this.$router.push({
    			path:'/book_dateil'
    		})
    	}
    }
  }
</script>

<style scoped lang="less">
  .list {
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 10%;
    li {
      width: 25%;
      margin-top: 25px;
      cursor: pointer;
      .img-box {
        width: 120px;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .text-algin-center {
        font-size: 16px;
      }
    }
  }
</style>
