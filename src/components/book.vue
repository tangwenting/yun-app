<template>
  <div class="book_template flex_between">
    <div class="book_item" v-for="(item,index) in list" :key='index' @click="handleDateil()">
      <img class="book_img" :src="item.imgUrl" alt="">
      <div class="book_dateil">
        <div class="book_texts">
          <div class="book_times">
            <span class="book_time" v-if="item.time">{{item.time}}</span>
          </div>
          <div class="book_tit">{{item.title}}</div>
          <div class="book_bt flex_between_center">
            <img class="book_upload" src="@/static/upload.png" alt="">
            <div class="book_views">
              <img src="@/static/hot.png" alt="">
              <span>{{item.num}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'vBook',
    props:{
      list:Array,
      type:''  //0书籍   1视频   2教程
    },
    data() {
      return {

      }
    },
    methods: {
      handleDateil() {
      	this.$emit('dateil');
        if (this.type == 0) {
          this.$router.push({
            path:'/book_dateil',
            params:{
          
            }
          })
        } else if(this.type == 1) {
          this.$router.push({
            path:'/video_dateil',
            params:{

            }
          })
        } else if(this.type == 2) {
          this.$router.push({
            path:'/course_dateil',
            params:{

            }
          })
        } else if(this.type == 3) {
          this.$router.push({
            path:'/book_dateil',
            params:{

            }
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .book_times {
    min-height: 50px;
  }
  .book_template {
    width: 100%;
  }
  .book_item {
    width: 48%;
    height: 420px;
    box-shadow: 0 10px 10px #eee;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
  }
  .book_img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    display: block;
  }
  .book_dateil {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 200px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  .book_texts {
    padding: 0 25px;
  }
  .book_time {
    display: inline-block;
    padding: 5px 16px;
    border-radius: 30px;
    background: #B2B2B2;
    color: #fff;
    font-size: 18px;
    margin: 18px 0 10px;
  }
  .book_tit {
    font-size: 22px;
    color: #333;
    line-height: 36px;
    height: 72px;
  }
  .book_views span {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    color: #999;
    padding-left: 2px;
  }
  .book_views img {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
  }
  .book_upload {
    width: 26px;
  }
  .book_bt {
    padding-top: 10px;
  }
</style>
