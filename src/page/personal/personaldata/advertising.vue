<template>
  <div class="box">
    <div class="main">
      <div class="header">
        <div class="hrs"></div>
        <div class="title">发布广告</div>
      </div>
      <div v-if="!checkin" class="ad verticallyflex text2"><!-- 是否显示 -->
        您还未入驻平台，暂时不可以发布广告~
      </div>
      <div v-else>
        <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="4.9rem" class="from">
          <el-form-item label="购买广告位：">
            <el-checkbox-group
              class="chebox"
              v-model="ruleForm.checkedCities"
              :min="1"
              :max="2">
              <el-checkbox
                v-for="item in ruleForm.cities"
                :label="item"
                :key="item"
              >{{item}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item style="border-bottom: 1px solid #f5f5f5;padding-bottom: 15px;">
            <el-button type="danger" plain round @click="advertising">购买</el-button>
          </el-form-item>
          <el-form-item label="广告标题：">
            <el-input v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="广告序号：">
            <el-select v-model="ruleForm.region" placeholder="请选择类型" class="select">
              <el-option label="a类" value="shanghai"></el-option>
              <el-option label="b类" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="广告有效期：">
            <div>2020/5/20  17:00:00</div>
          </el-form-item>
          <el-form-item label="联系人：">
            <el-input v-model="ruleForm.phname"></el-input>
          </el-form-item>
          <el-form-item label="QQ：">
            <el-input v-model="ruleForm.qq"></el-input>
          </el-form-item>
          <el-form-item label="微信：">
            <el-input v-model="ruleForm.wx"></el-input>
          </el-form-item>
          <el-form-item label="电话：" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="广告内容">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.textarea" maxlength="2000" show-word-limit rows="6">
            </el-input>
          </el-form-item>
          <el-form-item label="上传图片：">
             <el-upload
               class="upload-demo"
               action="https://jsonplaceholder.typicode.com/posts/"
               :on-change="handleChange"
               :file-list="fileList">
               <el-button size="small" type="primary">上传图片</el-button>
               <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
             </el-upload>
          </el-form-item>
          <div class="input-item buttons">
            <el-button  type="danger" @click="submitForm('ruleForm')">发布</el-button>
            <el-button  @click="resetForm('ruleForm')">重置</el-button>
          </div>
        </el-form>
      </div>
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
        checkin: true,//是否入住平台,
        labelPosition: "left",
        ruleForm:{
          checkedCities: [],
          cities: ['A1：10金币', 'B1：20金币', 'C1：30金币', 'D1：50金币',"E1：100金币","F1：200金币"]
        },
        rules:{
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
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
    },
    components:{vFooter, vComm},
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
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      },
      advertising() {
        var that = this;
        if(that.ruleForm.checkedCities.length) {
          that.$router.push({
            path: "advertisingpurchase",
            query: {
              name: that.ruleForm.checkedCities
            }
          })
        } else {
          alert("请选择广告位");
        }
      }
    }
  }
</script>
<style>
  .el-checkbox__label {
    font-size: 0.5rem !important;
  }
</style>
<style lang="less" scoped>
  .main {
    padding: 30px;
    display: flex;
    flex-direction: column;
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
    .ad {
      flex: 1;
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
      .chebox {
        display: flex;
        flex-wrap: wrap;
        .el-checkbox {
          margin-right: 30px;
        }
      }
    }
  }
</style>
