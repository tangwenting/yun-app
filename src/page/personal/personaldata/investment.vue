<template>
  <div class="box">
    <div class="main">
      <div class="header">
        <div class="hrs"></div>
        <div class="title">发布招商</div>
      </div>
      <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="4.5rem" class="from">
        <el-form-item label="公司名：">
          <el-input v-model="ruleForm.name" class="name"></el-input>
        </el-form-item>
        <el-form-item label="公司类别：">
          <el-select v-model="ruleForm.region" placeholder="请选择类型" class="select">
            <el-option label="a类" value="shanghai"></el-option>
            <el-option label="b类" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="公司logo：">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="公司网址：">
          <el-input v-model="ruleForm.ww" class="name"></el-input>
        </el-form-item>
        <el-form-item label="出入金方式：">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="支付宝"></el-checkbox>
            <el-checkbox label="微信"></el-checkbox>
            <el-checkbox label="银联卡"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="招商电话：" prop="phone">
          <el-input v-model="ruleForm.phone" class="name"></el-input>
        </el-form-item>
        <el-form-item label="招商QQ：">
          <el-input v-model="ruleForm.qq" class="name"></el-input>
        </el-form-item>
        <el-form-item label="招商微信：">
          <el-input v-model="ruleForm.wx" class="name"></el-input>
        </el-form-item>
        <el-form-item label="监管：">
          <el-input v-model="ruleForm.jg" class="name"></el-input>
        </el-form-item>
        <el-form-item label="说明：">
          <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.textarea" maxlength="200" show-word-limit rows="6">
          </el-input>
        </el-form-item>
        <el-form-item label="上传软件：">
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
          <el-button  type="danger" @click="submitForm('ruleForm')">发布</el-button>
          <el-button  @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-form>
    </div>
    <v-comm></v-comm>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vFooter from "@/components/footer.vue"
  import vComm from "@/components/comm"
  export default {
    data() {
      return {
        labelPosition: "left",
        checkList: [],
        ruleForm: {
          name: "",
          region: "",
          phone: "",
          qq: "",
          ww:"",
          wx: "",
          jg: ""
        },
        rules: {
          phone: [
            { 
              required: true, 
              message: "请输入手机号码", 
              trigger: "blur" 
            },
            {
              pattern: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,
              message: "请输入正确的手机号码",
              trigger: "blur"
            }
          ]
        },
        imageUrl: '',
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
    },
    components:{vFooter,vComm},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
    }
  }
</script>
<style>
  .el-checkbox__label {
    font-size: 0.5rem !important;
  }
  
</style>
<style>
  .avatar-uploader .el-upload {
    border: 2px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<style lang="less" scoped>
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
