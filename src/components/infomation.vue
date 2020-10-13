<template>
  <div class="dateil_recomm_con flex_between">
    <div class="dateil_recomm_item" v-for="(item,rindex) in recommList" :key='rindex'>
      <div class="dateil_recomm_img">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="dateil_recomm_texts">
        <div class="dateil_recomm_text flex_between_center" v-for="text in item.news">
          <p class="flex_1 text_ellipsis">{{text}}</p>
          <img src="@/static/hot.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'infomation',
    props:['recommList'],
    data() {
      return {

      }
    }
  }
</script>

<style>
  .dateil_recomm_item {
    width: 48%;
  }
  .dateil_recomm_img img {
    display: block;
    width: 100%;
    height: 185px;
    object-fit: cover;
  }
  .dateil_recomm_texts {
    padding: 15px;
    font-size: 22px;
    color: #333;
    background: #F3F3F3;
    height: 180px;
  }
  .dateil_recomm_text {
    padding: 10px 0;
  }
  .dateil_recomm_text p {
    padding-right: 8px;
  }
  .dateil_recomm_text img {
    height: 22px;
  }
  .dateil_recomm_item {
    padding-bottom: 30px;
  }
</style>
