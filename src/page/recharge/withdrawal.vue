<template>
  <div class="box">
    <div class="main" style="margin-bottom: 70px;">
      <div class="header">
        <div class="hrs"></div>
        <div class="title">提现</div>
      </div>
      <el-form :model="ruleForm" :label-position="labelPosition" label-width="5rem" :rules="rules" ref="ruleForm" class="form">
        <el-form-item label="账户ID：">
          <span>{{ruleForm.name}}</span>
        </el-form-item>
        <el-form-item label="余额：">
          <span>{{ruleForm.recharge}}金币</span>
        </el-form-item>
        <div class="hr"></div>
        <el-form-item label="提现金额：" style="margin-top: 20px;">
          <div class="flex pay">
            <el-input v-model="ruleForm.a"></el-input>
            <div class="pay-width">可用余额{{pay}}元</div>
          </div>
        </el-form-item>
        <el-form-item label="选择银行卡：">
          <div @click="yinhang" class="bank">
           <img :src="yingang1" class="bank" v-if="yingangShow">
           <img :src="yingang2" class="bank" v-else>
          </div>
        </el-form-item>
        <el-form-item label="支付密码：">
          <el-input v-model="ruleForm.password" show-password></el-input>
        </el-form-item>
        <el-button type="danger" class="pay-button" style="margin-top: 20px;">提现</el-button>
        <div class="text2" style="margin-top: 20px;">* 工作日当天最晚18:00到账，节假日要到下一个工作日到账。</div>
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
        yingang1: require("@/assets/personal/yinhang.png"),
        yingang2: require("@/assets/personal/yinhang1.png"),
        yingangShow: false,
        labelPosition: "left",
        ruleForm: {
          name: "12345",
          recharge: "0",
          password: ""
        },
        rules: {},
        pay: 10,
      }
    },
    components:{vFooter, vComm},
    methods:{
      handclick(index) {
        this.paymentmethod_active = index;
      },
      yinhang() {
        this.yingangShow = !this.yingangShow;
      }
    }
  }
</script>

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
      .pay {
        align-items: center;
        .pay-width {
          width: 350px;
          text-align: right;
          color: #7f7f7f;
        }
      }
      .bank {
        width: 300px;
      }
      .pay-button {
        padding: 12px 30px;
      }
    }
  }
</style>
