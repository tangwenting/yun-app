<template>
  <div class="mas">
    <div class="row"></div>
    <div class="header">
      <router-link to>
        <img class="header-left" src="@/assets/logins/c.png" @click="$router.back(-1)">
      </router-link>
    </div>
    <div class="title text3">编辑</div>
    <el-form :model="ruleForm" :label-position="labelPosition" label-width="3rem" :rules="rules" ref="ruleForm" class="form">
      <el-form-item label="标题：">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="内容："></el-form-item>
      <div class="detail">
        <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar>
      </div>
      <el-form-item label="图片：">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <div class="text-algin-center">
        <el-button type="danger" plain>发布</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
  import EditorBar from '@/components/wangEnduit.vue'
  export default {
    components: {
      EditorBar
    },
    data() {
      return {
        labelPosition: "left",
        labelTop: "top",
        ruleForm: {},
        rules: {},
        detail:"",
        isClear: false,
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      change() {

      },
    }
  }
</script>
<style lang="less">
  .form {
    .el-form-item__label {
      font-size: 25px;
    }
    .el-form-item__content {
      align-items: center;
    }
    .el-input__inner {
      height: 50px;
    }
    .el-button--danger.is-plain {
      padding: 20px 35px;
    }
  }
</style>
<style scoped lang="less">
  .mas {
    height: 100%;
    .row {
      height: 60px;
    }
  }
  .header {
    margin: 0px 30px 0 30px;
    overflow: hidden;

    .header-left {
      float: right;
      width: 1.875rem;
      height: 1.875rem;
      cursor: pointer;
    }
  }
  .title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
  }
  .form {
    margin: 0 30px;
    .detail {
      margin-bottom: 30px;
    }
  }
</style>
