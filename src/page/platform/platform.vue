<template>
  <div class="box">
    <div class="main">
      <div class="header">
        <div class="hrs"></div>
        <div class="title">入驻平台</div>
      </div>
      <el-form :model="ruleForm" :label-position="labelPosition" label-width="5rem" :rules="rules" ref="ruleForm" class="form">
        <el-form-item label="公司名：">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="公司类别：">
          <el-select v-model="ruleForm.region" placeholder="请选择类型" class="select">
            <el-option label="a类" value="shanghai"></el-option>
            <el-option label="b类" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <div class="form-item">
          <div class="titles">
            <span class="red">*</span>
            <span>营业执照</span>
          </div>
          <div class="id">
            <div class="id-item">
              <div class="id-item-input verticallyflex">
                <input type="file" @change="changeImage($event,'1')">
                <img :src="licenseJpg.just" alt="" :class="{idwidth: licenseJpg.justw}">
              </div>
            </div>
            <div class="id-item">
              <div class="id-item-input verticallyflex">
                <input type="file" @change="changeImage($event,'2')">
                <img :src="licenseJpg.back" alt="" :class="{idwidth: licenseJpg.backw}">
              </div>
            </div>
          </div>
        </div>
        <el-form-item label="上传图片为4:3的png/jpg/gif/jpeg格式图片" label-width="300px"></el-form-item>
        <el-form-item label="法人身份证：" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <div class="form-items">
          <div class="titles">
            <span class="red">*</span>
            <span>法人身份证照</span>
          </div>
          <div class="id">
            <div class="id-item">
              <div class="id-item-input verticallyflex">
                <input type="file" @change="changeImage($event,'3')">
                <img :src="IdJpg.just" alt="" :class="{idwidth: IdJpg.justw}">
              </div>
              <div class="label text3">上传身份证正面照</div>
            </div>
            <div class="id-item">
              <div class="id-item-input verticallyflex">
                <input type="file" @change="changeImage($event,'4')">
                <img :src="IdJpg.back" alt="" :class="{idwidth: IdJpg.backw}">
              </div>
              <div class="label text3">上传身份证反面照</div>
            </div>
          </div>
        </div>
        <el-form-item label="联系电话：" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <div class="input-item select">
          <div class="labels text3">地址：</div>
          <div class="input-border">
            <el-select v-model="ruleForm.value" placeholder="请选择">
              <el-option v-for="item in ruleForm.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="labels text3">省份：</div>
          <div class="input-border">
            <el-select v-model="ruleForm.value" placeholder="请选择">
              <el-option v-for="item in ruleForm.options1" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="labels text3">市：</div>
          <div class="input-border">
            <el-select v-model="ruleForm.value" placeholder="请选择">
              <el-option v-for="item in ruleForm.options2" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="labels text3 xian">县/镇：</div>
        </div>
        <el-form-item label-width="3rem" style="margin-top: 10px;">
          <div>详细地址</div>
          <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.textarea" maxlength="200" show-word-limit rows="6">
          </el-input>
          <div class="text3">注：<span class="red">*</span>  为必填项，否则无法提交修改的信息内容</div>
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
  import vComm from "@/components/comm" 
  import vFooter from "@/components/footer.vue"
  export default {
    name: "",
    data() {
      return {
        labelPosition: "left",
        ruleForm: {
          phone: ''
        },
        rules: {
          id:[
            { 
              required: true, 
              message: "请输入身份证号", 
              trigger: "blur" 
            },
            {
              pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
              message: "请输入正确的身份证号码",
              trigger: "blur"
            }
          ],
          phone:[
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
        licenseJpg: {
          just: require("@/assets/personal/zhenmian.png"),
          back: require("@/assets/personal/fanmian.png"),
          justw: false,
          backw: false,
        },
        IdJpg: {
          just: require("@/assets/personal/justid.png"),
          back: require("@/assets/personal/backid.png"),
          justw: false,
          backw: false,
        },
      }
    },
    components: {vFooter, vComm},
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
      changeImage(e, m) {
        var file = e.target.files[0];
        var reader = new FileReader();
        var that = this;
        reader.readAsDataURL(file)
        reader.onload = function(e) {
          switch (m) {
            case "1":
              that.licenseJpg.just = this.result;
              that.licenseJpg.justw = true;
              break;
            case "2":
              that.licenseJpg.back = this.result;
              that.licenseJpg.backw = true;
              break;
            case "3":
              that.IdJpg.just = this.result;
              that.IdJpg.justw = true;
              break;
            case "4":
              that.IdJpg.back = this.result;
              that.IdJpg.backw = true;
              break;
            default:
          }
        }
      },
    }
  }
</script>
<style lang="less">
  .el-input__inner {
    width: 350px;
    height: 50px;
  }

  .select {
    display: flex;
    align-items: center;
    .labels {
      width: 100px !important;
    }

    .xian {
      width: 120px !important;
    }

    .input-border {
      width: 120px !important;
    }

    .el-input__inner {
      width: 100%;
    }

    .el-input {
      width: 100%;
    }
  }
</style>
<style lang="less" scoped>
  .red {
    font-size: 24px;
    color: #c52519;
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
    .form {
      margin: 20px 0 0 30px;
      .input-item {
        width: 570px;
        display: flex;
        margin: 0 auto 20px;
        align-items: center;
      }
      .textarea {
        padding-top: 10px;
        align-items: self-end;
        .input-border {
          width: 400px;
        }
      }
      .buttons {
        justify-content: center;
      }
      .form-item {
        .titles {
          font-size: 18px;
        }

        .id {
          display: flex;
          padding: 30px 0;
          justify-content: space-between;

          .id-item {
            position: relative;

            .id-item-input {
              width: 320px;
              height: 210px;
              border: 4px solid #eee;
              cursor: pointer;
              overflow: hidden;
              input {
                opacity: 0;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
              }

              img {
                width: 150px;
              }
            }

            .label {
              text-align: center;
              margin: 20px 0;
            }
          }
        }

        .input-item {
          width: 570px;
          display: flex;
          margin: 0 auto 20px;
          align-items: center;
        }
        .textarea {
          padding-top: 10px;
          align-items: self-end;
          .input-border {
            width: 400px;
          }
        }
      }
      .form-items {
        .titles {
          font-size: 18px;
        }

        .id {
          display: flex;
          padding: 30px 0;
          width: 570px;
          margin: 0 auto;
          justify-content: space-between;

          .id-item {
            position: relative;

            .id-item-input {
              width: 260px;
              height: 170px;
              border: 4px solid #eee;
              cursor: pointer;
              overflow: hidden;
              input {
                opacity: 0;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
              }

              img {
                width: 210px;
              }
            }

            .label {
              text-align: center;
              margin: 20px 0;
            }
          }
        }


      }
    }
  }
</style>
