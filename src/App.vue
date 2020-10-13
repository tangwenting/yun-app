<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {

      }
    }
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;
	}
  .ellipsis {/* 单超出隐藏 */
    overflow: hidden;white-space: nowrap;text-overflow:ellipsis;
  }
  .ellipsis2 {/* 多超出隐藏 */
    overflow:hidden;
    text-overflow: 20px;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .idwidth {
    width: 100% !important;
  }
  #app,html,body{
    width: 100%;
    height: 100%;
  }
	input,button {
		outline: none;
		border: none;
	}
	.flex {
		display: -webkit-flex;
		display: flex;
	}
  img {
    vertical-align:middle;
  }
	.verticallyflex {
		display: flex;
		display: -webkit-flex;
		justify-content: center;
		align-items: center;
	}
	.text1 {
		font-size: 26px;
		color: #000;
	}
	.text2 {
		font-size: 20px;
		color: #909090;
	}
	.text3 {
		font-size: 24px;
		color: #333;
	}
  .text-algin-center {
    text-align: center;
  }
  .padding {
  	padding: 0 30px;
  }
  .text_ellipsis {
  	overflow: hidden;
  	text-overflow: ellipsis;
  	white-space: nowrap;
  }
  .text_clamp {
  	overflow : hidden;
  	text-overflow: ellipsis;
  	display: -webkit-box;
  	-webkit-box-orient: vertical;
  }
  .text_clamp2 {
  	overflow : hidden;
  	text-overflow: ellipsis;
  	display: -webkit-box;
  	-webkit-line-clamp: 2;
  	-webkit-box-orient: vertical;
  }
  .text_clamp3 {
  	overflow : hidden;
  	text-overflow: ellipsis;
  	display: -webkit-box;
  	-webkit-line-clamp: 3;
  	-webkit-box-orient: vertical;
  }
  .text_clamp4 {
  	overflow : hidden;
  	text-overflow: ellipsis;
  	display: -webkit-box;
  	-webkit-line-clamp: 4;
  	-webkit-box-orient: vertical;
  }
  .text_clamp5 {
  	overflow : hidden;
  	text-overflow: ellipsis;
  	display: -webkit-box;
  	-webkit-line-clamp: 5;
  	-webkit-box-orient: vertical;
  }
  .flex_1 {
  	flex: 1;
  }
  .flex_row {
  	display: flex;
  	display: -webkit-flex;
  	flex-direction: row;
  	/* flex-wrap: wrap; */
  }
  .flex_items_center {
  	display: flex;
  	display: -webkit-flex;
  	flex-direction: row;
  	align-items: center;
  }
  .flex_between {
  	display: flex;
  	display: -webkit-flex;
  	justify-content: space-between;
  	flex-wrap: wrap;
  }
  .flex_between_center {
  	display: flex;
  	display: -webkit-flex;
  	justify-content: space-between;
  	align-items: center;
  }
  .flex_around {
  	display: flex;
  	display: -webkit-flex;
  	justify-content: space-around;
  }
  .flex_center {
  	display: flex;
  	display: -webkit-flex;
  	justify-content: center;
  	align-items: center;
  }
  .flex_start {
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
  }

  .toujiao_search {
    height: 50px;
    line-height: 50px;
    border-radius: 50px;
    width: 460px;
    border: 1px solid #C52519;
    overflow: hidden;
  }
  .search_icon {
    margin: 0 15px;
  }
  .toujiao_submit {
    height: 100%;
    color: #fff;
    width: 70px;
    text-align: center;
    font-size: 20px;
    background-image: linear-gradient(to right, #F94A34 , #C52519);
  }
  .toujiao_camera {
    margin-right: 15px;
  }
  .search_bar {
    font-size: 20px;
    color: #333;
  }
  .toujiao_collect {
    font-size: 24px;
    color: #333;
  }
  .toujiao_collect span {
    padding-left: 10px;
  }
  .toujiao_collect img {
    width: 26px;
    height: 26px;
  }
  .toujiao_head {
    padding: 30px 0;
  }
  .introduce_head {
  	padding: 25px 0;
  }
  .introduce_head span {
  	font-size: 22px;
  	color: #333;
  	display: inline-block;
  }
  .banner_img img {
    display: block;
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  .guanggao_box {
    padding: 30px 0;
  }
  .guanggao {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap>.el-form-item__label:before, .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
    display: none;
  }
  .el-form-item {
    margin-bottom: 40px;
  }
</style>
