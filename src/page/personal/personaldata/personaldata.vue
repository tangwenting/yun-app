<template>
  <div class="box">
    <div class="main">
      <div class="header">
        <div class="hrs"></div>
        <div class="title">个人资料</div>
      </div>
      <el-form
        :model="ruleForm"
        :label-position="labelPosition"
        label-width="4rem"
        :rules="rules"
        ref="ruleForm"
        class="form"
      >
        <div class="form-item">
          <div class="titles">
            <span class="red">*</span>
            <span>身份审核</span>
          </div>
          <div class="id">
            <div class="id-item">
              <div class="id-item-input verticallyflex">
                <input type="file" @change="changeImage($event,'1')" />
                <img :src="IdJpg.just" alt :class="{idwidth: IdJpg.justw}" />
              </div>
              <div class="label text3">上传身份证正面照</div>
            </div>
            <div class="id-item">
              <div class="id-item-input verticallyflex">
                <input type="file" @change="changeImage($event,'2')" />
                <img :src="IdJpg.back" alt :class="{idwidth: IdJpg.backw}" />
              </div>
              <div class="label text3">上传身份证正面照</div>
            </div>
          </div>
          <div class="input-item">
            <el-form-item label="姓名" prop="input1">
              <el-input v-model="ruleForm.input1" placeholder="请输姓名"></el-input>
            </el-form-item>
          </div>
          <div class="input-item">
            <el-form-item label="身份证号" prop="input2">
              <el-input v-model="ruleForm.input2" placeholder="请输身份证号"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="form-item">
          <div class="titles">
            <span class="red">*</span>
            <span>绑定银行卡</span>
          </div>
          <div class="id">
            <div class="id-item">
              <div class="id-item-input verticallyflex">
                <input type="file" @change="changeImage($event,'3')" />
                <img :src="yinhangk.just" alt :class="{idwidth: yinhangk.justw}" />
              </div>
              <div class="label text3">上传银行卡正面照</div>
            </div>
            <div class="id-item">
              <div class="id-item-input verticallyflex">
                <input type="file" @change="changeImage($event,'4')" />
                <img :src="yinhangk.back" alt :class="{idwidth: yinhangk.backw}" />
              </div>
              <div class="label text3">上传银行卡正面照</div>
            </div>
          </div>
          <div class="input-item">
            <el-form-item label="银行卡号" prop="input3">
              <el-input v-model="ruleForm.input3" placeholder="请输银行卡号"></el-input>
            </el-form-item>
          </div>
          <div class="input-item">
            <el-form-item label="开户支行" prop="input4">
              <el-input v-model="ruleForm.input4" placeholder="请输开户支行"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="form-item">
          <div class="titles" style="margin-bottom: 20px;">
            <span class="red">*</span>
            <span>联系方式</span>
          </div>
          <div class="input-item">
            <el-form-item label="手机号" prop="input5">
              <el-input v-model="ruleForm.input5" placeholder="请输手机号"></el-input>
            </el-form-item>
          </div>
          <div class="input-item">
            <el-form-item label="邮箱" prop="input6">
              <el-input v-model="ruleForm.input6" placeholder="请输邮箱"></el-input>
            </el-form-item>
          </div>
          <div class="input-item">
            <el-form-item label="QQ" prop="input7">
              <el-input v-model="ruleForm.input7" placeholder="请输QQ"></el-input>
            </el-form-item>
          </div>
          <div class="input-item">
            <el-form-item label="微信" prop="input8">
              <el-input v-model="ruleForm.input8" placeholder="请输微信"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="form-item">
          <div class="titles" style="margin-bottom: 20px;">
            <span>其他</span>
          </div>
          <div class="input-item">
            <div class="labels text3">性别：</div>
            <div class="input-border">
              <template>
                <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
                <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
              </template>
            </div>
          </div>
          <div class="input-item select">
            <div class="labels text3">地址：</div>
            <div class="input-border">
              <el-select v-model="ruleForm.value" placeholder="请选择">
                <el-option
                  v-for="item in ruleForm.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="labels text3">省份</div>
            <div class="input-border">
              <el-select v-model="ruleForm.value" placeholder="请选择">
                <el-option
                  v-for="item in ruleForm.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="labels text3">市</div>
            <div class="input-border">
              <el-select v-model="ruleForm.value" placeholder="请选择">
                <el-option
                  v-for="item in ruleForm.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="labels text3 xian">县/镇</div>
          </div>
          <div class="input-item textarea">
            <div class="labels text3">简介：</div>
            <div class="input-border">
              <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="ruleForm.textarea"
                maxlength="200"
                show-word-limit
                rows="6"
              ></el-input>
            </div>
          </div>
          <div class="input-item text3">
            注：
            <span class="red">*</span> 为必填项，否则无法提交修改的信息内容
          </div>
          <div class="input-item buttons">
            <el-button type="danger" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </div>
        </div>
      </el-form>
    </div>
    <v-comm></v-comm>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from "@/components/footer.vue";
import vComm from "@/components/comm";
export default {
  data() {
    return {
      IdJpg: {
        just: require("@/assets/personal/justid.png"),
        back: require("@/assets/personal/backid.png"),
        justw: false,
        backw: false
      },
      yinhangk: {
        just: require("@/assets/personal/yinhangk.png"),
        back: require("@/assets/personal/yinhangk.png"),
        justw: false,
        backw: false
      },
      labelPosition: "left",
      ruleForm: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        mobilePhone: "",
        input6: "",
        input7: "",
        input8: "",
        value: "",
        options: "",
        sex: "男",
        textarea: ""
      },
      rules: {
        input1: [
          { 
            required: true, 
            message: "请输入", 
            trigger: "blur" 
          }
        ],
        input2: [
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
        input5: [
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
        ],
        input6: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    };
  },
  components: {
    vFooter,
    vComm
  },
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
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        switch (m) {
          case "1":
            that.IdJpg.just = this.result;
            that.IdJpg.justw = true;
            break;
          case "2":
            that.IdJpg.back = this.result;
            that.IdJpg.backw = true;
            break;
          case "3":
            that.yinhangk.just = this.result;
            that.yinhangk.justw = true;
            break;
          case "4":
            that.yinhangk.back = this.result;
            that.yinhangk.backw = true;
            break;
          default:
        }
      };
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less">
.el-input__inner {
  width: 350px;
  height: 50px;
}

.select {
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
<style scoped lang="less">
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

    .form-item {
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
          .id-item-input {
            width: 260px;
            position: relative;
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
    }
  }
}
</style>
