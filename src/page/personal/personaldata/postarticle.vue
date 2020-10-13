<template>
  <div class="box">
    <div class="main">
      <div class="header">
        <div class="hrs"></div>
        <div class="title">发布文章</div>
      </div>
      <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="85px" class="from">
        <el-form-item label="名称：">
          <el-input v-model="ruleForm.name" class="name"></el-input>
        </el-form-item>
        <el-form-item label="文章分类：" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择类型" class="select">
            <el-option label="a类" value="shanghai"></el-option>
            <el-option label="b类" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章内容：" prop="region">
          <div class="">
            <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar>
          </div>
        </el-form-item>
        <el-form-item label="上传图片：" prop="region">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <div class="input-item buttons">
          <el-button  type="danger" @click="submitForm('ruleForm')">提交</el-button>
          <el-button  @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-form>

    </div>
    <v-comm></v-comm>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import EditorBar from '@/components/wangEnduit'
  import vFooter from "@/components/footer.vue"
  import vComm from "@/components/comm"
  export default {
      components: { EditorBar ,vFooter, vComm},
      data() {
        return {
              test:'',
              isClear: false,
              detail:"",
              labelPosition: "left",
              ruleForm:{
                name: ""
              },
              rules:{

              },
              fileList: [{
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
              }, {
                name: 'food2.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
              }]
          }
        },
      methods: {
          change(val) {
              console.log(val,this.detail)
          },
          handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
          }
      }
  }
</script>

<style scoped lang="less">
  .texts_lable {
    font-size: 26px;
    color: #333;
    padding: 20px 0;
  }
  .main {
    padding: 30px;
    .header {
      display: flex;
      .hrs {
        width: 6px;
        background: #c52519;
      }
      .title {
        margin-left: 20px;
        font-size: 28px;
      }
    }
    .from {
      margin: 20px 0 0 30px;
      .name {
        width: 300px;
      }
      .select {
        width: 200px;
      }
      .padding {
        margin-top: 10px;
      }
      .input-item {
        width: 570px;
        display: flex;
        margin: 70px auto 20px;
        align-items: center;
      }
      .buttons {
        justify-content: center;
      }
    }
  }
</style>
