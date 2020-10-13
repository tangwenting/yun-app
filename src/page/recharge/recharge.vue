<template>
  <div class="box">
    <div class="main" style="margin-bottom: 70px;">
      <div class="header">
        <div class="hrs"></div>
        <div class="title">充值</div>
      </div>
      <el-form :model="ruleForm" :label-position="labelPosition" label-width="5rem" :rules="rules" ref="ruleForm" class="form">
        <el-form-item label="账户ID：">
          <el-input v-model="ruleForm.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="余额：">
          <span>{{ruleForm.recharge}}</span>
        </el-form-item>
        <div class="hr"></div>
        <el-form-item label="充值金币：" style="margin-top: 10px;">
          <div class="recharge-border">
            <el-radio v-model="ruleForm.radio1" label="1" border text-color="red">10金币</el-radio>
            <el-radio v-model="ruleForm.radio1" label="2" border>30金币</el-radio>
            <el-radio v-model="ruleForm.radio1" label="3" border>50金币</el-radio>
            <el-radio v-model="ruleForm.radio1" label="4" border>100金币</el-radio>
            <el-radio v-model="ruleForm.radio1" label="5" border>200金币</el-radio>
            <el-radio v-model="ruleForm.radio1" label="6" border>500金币</el-radio>
            <el-radio v-model="ruleForm.radio1" label="7" border>1000金币</el-radio>
            <el-radio v-model="ruleForm.radio1" label="8" border>2000金币</el-radio>
          </div>
        </el-form-item>
        <el-form-item label="自定义数额：">
          <el-input v-model="ruleForm.num"></el-input>
        </el-form-item>
        <el-form-item label="支付方式：">
          <div class="paymentmethod flex">
            <div class="paymentmethod-item" v-for="(item, index) in paymentmethod" @click="handclick(index)">
              <img :src="item.url" v-show="paymentmethod_active == index">
              <img :src="item.urlActive" v-show="paymentmethod_active != index">
            </div>
          </div>
        </el-form-item>
        <div class="hr"></div>
        <div class="pay">
          <div class="pay-left">支付金额：<span>{{pay}}</span>元</div>
          <div>
            <el-button type="danger">确认支付</el-button>
          </div>
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
          name: "12345",
          recharge: "0",
        },
        rules: {},
        paymentmethod_active: 0,
        paymentmethod:[
          {
            url: require("@/assets/personal/weixin.png"),
            urlActive: require("@/assets/personal/weixin_a.png"),
          },
          {
            url: require("@/assets/personal/zhifubao.png"),
            urlActive: require("@/assets/personal/zhifubao_a.png"),
          },
          {
            url: require("@/assets/personal/yinlian.png"),
            urlActive: require("@/assets/personal/yinlian_a.png"),
          }
        ],
        pay: 10,
      }
    },
    components:{vFooter, vComm},
    methods:{
      handclick(index) {
        this.paymentmethod_active = index;
      }
    }
  }
</script>

<style lang="less">
  .recharge-border {
    display: flex;
    flex-wrap: wrap;
    .el-radio.is-bordered {
      padding: 6px 8px;
      width: 70px;
      height: auto;
      text-align: center;
      margin: 0;
      margin-bottom: 10px;
      margin-right: 20px;
    }
    .el-radio.is-bordered:nth-child(3n) {
      margin-right: 0;
    }
    .el-radio.is-bordered+.el-radio.is-bordered {
      margin-left: 0;
    }
    .el-radio__label {
      font-size: 10px;
      padding: 0;
    }
    .el-radio__input {
      display: none;
    }
    .el-radio__input.is-checked+.el-radio__label {
      color: #606266;
    }
    .el-radio.is-bordered.is-checked {
      border-color: #cd4238;
    }
  }
</style>
<style lang="less" scoped>
  .hr {
    background-color: #d2d2d2;
    height: 2px;
    width: 100%;
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
      .paymentmethod {
        .paymentmethod-item {
          width: auto;
          margin-right: 25px;
          img {
            height: 62px;
          }
        }
      }
      .pay {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        color: #606266;
        font-size: 16px;
        .pay-left {
          span {
            font-size: 40px;
            color: #c52519;
          }
        }
      }
    }
  }
</style>
